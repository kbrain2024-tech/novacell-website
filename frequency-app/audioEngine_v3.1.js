/**
 * ==========================================================================
 * Solavre Sound Web Audio API 오디오 엔진 (audioEngine.js)
 * 8초 주기 크로스페이드 주파수 스윕 & 초저주파 바이노럴 비트 자동 결합 버전
 * 초보자를 위해 다중 크로스페이드 신디사이저와 스케줄러 작동 원리를 주석으로 상세 기술했습니다.
 * ==========================================================================
 */

class AudioEngine {
  constructor() {
    // 1. 상태 및 컨텍스트 관리
    this.audioCtx = null;
    this.isPlaying = false;
    this.isMuted = false;           
    
    // [신규] 생성된 모든 오디오 노드(발진기, 소스노드 등)를 추적하여 정지 시 일괄 소멸시키기 위한 배열
    this.activeNodes = [];

    // [신규] 4대 오디오 파트별 재생/정지(On/Off) 활성화 플래그 상태 변수
    this.isBeatsActive = false;       // 바이노럴 비트 활성화 여부
    this.isSolfeggioActive = true;    // 솔페지오 주파수 활성화 여부 (기본값 ON)
    this.isRifeActive = false;        // 일반 솔라브르 테라피 주파수 활성화 여부
    this.isVipActive = false;         // [분리 신설] VIP 솔라브르 테라피 주파수 활성화 여부
    this.isCustomActive = false;      // [신규] 사용자 맞춤 주파수 생성기 (Custom Studio) 활성화 여부
    this.isNatureActive = true;       // 자연음 믹서 활성화 여부 (기본값 ON 복구)

    // 2. 오디오 노드 참조 변수
    this.masterGain = null;         
    this.analyser = null;           
    
    // [파트 1] 바이노럴 비트 노드
    this.oscL = null;
    this.oscR = null;
    this.pannerL = null;
    this.pannerR = null;
    this.beatsGain = null;          
    
    // [파트 2] 솔페지오 주파수 노드
    this.solfeggioOsc = null;
    this.solfeggioGain = null;       
    
    // [파트 3-1] 일반 솔라브르 주파수 레시피 노드 (크로스페이드 더블 게인 채널 구축)
    this.rifeGain = null;           
    this.rifeOscA = null;           // 크로스페이드용 발진기 A
    this.rifeGainA = null;          // A 채널 볼륨 게인
    this.rifeOscB = null;           // 크로스페이드용 발진기 B
    this.rifeGainB = null;          // B 채널 볼륨 게인
    this.rifeNodesA = [];           // A 채널 활성 노드 풀 (바이노럴/순음 완벽 통합)
    this.rifeNodesB = [];           // B 채널 활성 노드 풀
    this.rifeActiveChannel = 'A';   // 현재 사운드가 나오는 활성 채널 ('A' 또는 'B')
    this.rifeBeatsGain = null;      // Rife 전용 저주파 바이노럴 비트 게인 (하위 호환)
    this.rifeBeatsOscL = null;      // Rife 전용 저주파 발진기 L
    this.rifeBeatsOscR = null;      // Rife 전용 저주파 발진기 R
    
    // [파트 3-2] [분리 신설] VIP 솔라브르 주파수 레시피 노드 (크로스페이드 더블 게인 채널 구축)
    this.vipGain = null;           
    this.vipOscA = null;            // VIP 크로스페이드용 발진기 A
    this.vipGainA = null;           // VIP A 채널 볼륨 게인
    this.vipGainB = null;           // VIP B 채널 볼륨 게인
    this.vipOscB = null;            // VIP 크로스페이드용 발진기 B
    this.vipNodesA = [];            // VIP A 채널 활성 노드 풀
    this.vipNodesB = [];            // VIP B 채널 활성 노드 풀
    this.vipActiveChannel = 'A';    // VIP 현재 사운드가 나오는 활성 채널 ('A' 또는 'B')
    this.vipBeatsGain = null;       // VIP 전용 저주파 바이노럴 비트 게인 (하위 호환)
    this.vipBeatsOscL = null;       // VIP 전용 저주파 발진기 L
    this.vipBeatsOscR = null;       // VIP 전용 저주파 발진기 R

    // [파트 3-3] [신규] 사용자 맞춤 주파수 음원 생성기 (Custom Studio) 노드 (크로스페이드 더블 게인 채널 구축)
    this.customGain = null;          // 커스텀 생성기 마스터 게인
    this.customOscA = null;          // 커스텀 크로스페이드용 발진기 A
    this.customGainA = null;         // 커스텀 A 채널 볼륨 게인
    this.customGainB = null;         // 커스텀 B 채널 볼륨 게인
    this.customOscB = null;          // 커스텀 크로스페이드용 발진기 B
    this.customNodesA = [];          // 커스텀 A 채널 활성 노드 풀
    this.customNodesB = [];          // 커스텀 B 채널 활성 노드 풀
    this.customActiveChannel = 'A';  // 커스텀 현재 활성 채널 ('A' 또는 'B')

    // [파트 4] 자연음 믹서 노드
    this.natureMasterGain = null;    
    this.natureGains = {};          
    this.natureSources = {};        
    
    // 3. 합성 버퍼 보관
    this.pinkNoiseBuffer = null;
    this.brownNoiseBuffer = null;
    this.rainBuffer = null;
    this.campfireBuffer = null;
    this.streamBuffer = null;
    this.bamboowindBuffer = null;
    this.ambientpadBuffer = null;
    this.bambooCreakBuffer = null;
    
    // 4. LFO 및 모듈레이터 노드
    this.waveLfo = null;
    this.waveLfoGain = null;
    this.windLfo = null;
    this.windLfoGain = null;
    this.windFilter = null;
    
    this.seagullTimer = null;
    this.singingBowlTimer = null;
    this.forestBirdsTimer = null;
    this.cuckooSleepTimer = null;
    this.cricketsTimer = null;
    this.mountainBirdsTimer = null;
    
    // 5. 일반/VIP/커스텀 주파수 주기적 크로스페이드 스윕 제어 타이머 및 인덱스
    this.rifeSweepTimer = null;
    this.rifeCycleIndex = 0;        // 일반 Rife 현재 순환 중인 주파수 인덱스
    this.rifeSweepInterval = 8.0;   // 일반 Rife 주파수당 전환 시간 (초, 기본값 8초, 5~600초)
    this.isRifeHold = false;        // 일반 Rife 현재 주파수 고정(Hold) 여부
    this.triggerNextRifeFrequency = null;

    this.vipSweepTimer = null;      // VIP Rife 현재 순환용 타이머
    this.vipCycleIndex = 0;         // VIP Rife 현재 순환 중인 주파수 인덱스
    this.vipSweepInterval = 8.0;    // VIP Rife 주파수당 전환 시간 (초, 기본값 8초, 5~600초)
    this.isVipHold = false;         // VIP Rife 현재 주파수 고정(Hold) 여부
    this.triggerNextVipFrequency = null;

    this.customSweepTimer = null;    // 커스텀 생성기 현재 순환용 타이머
    this.customCycleIndex = 0;       // 커스텀 생성기 현재 순환 중인 주파수 인덱스
    this.customSweepInterval = 180.0;// 커스텀 생성기 주파수당 전환 시간 (초, 기본값 180초=3분, 5~1800초)
    this.isCustomHold = false;       // 커스텀 생성기 현재 주파수 고정(Hold) 여부
    this.triggerNextCustomFrequency = null;
    
    // 6. 기본 설정 매개변수
    this.carrierFreq = 100;
    this.beatFreq = 4;
    this.solfeggioFreq = 432;
    
    // 볼륨 상태 저장 변수 추가 (재생 정지 상태에서도 설정값 보존을 위함)
    this.masterVolume = 0.8;
    this.beatsVolume = 0.0;
    this.solfeggioVolume = 0.0;
    this.rifeVolume = 0.0;          // 일반 테라피 볼륨
    this.vipVolume = 0.0;           // VIP 테라피 볼륨
    this.customVolume = 0.5;        // [신규] 사용자 맞춤 생성기 볼륨 (기본 50%)
    this.natureMasterVolume = 0.8;
    this.natureVolumeSettings = {
      rain: 0.0,
      waves: 0.0,
      campfire: 0.0,
      wind: 0.0,
      reedwind: 0.0,
      stream: 0.0,
      bamboowind: 0.0,
      ambientpad: 0.0,
      seagull: 0.0,
      singingbowl: 0.0,
      forestbirds: 0.0,
      cuckoo: 0.0,
      crickets: 0.0,
      mountainbirds: 0.0
    };

    this.rainTracks = [
      'rain01', 'rain02', 'rain03', 'rain04', 'rain05', 'rain06',
      'rain07', 'rain08', 'rain09', 'rain10', 'rain11', 'rain12'
    ];
    this.rainFiles = {
      rain01: '01 heavy-rain-nature-sounds.mp3',
      rain02: '02 white_records-rain-sounds.mp3',
      rain03: '03 thunderstorm-rain-sounds.mp3',
      rain04: '04 relaxing-rain.mp3',
      rain05: '05 rain-sounds.mp3',
      rain06: '06 rain-sounds.mp3',
      rain07: '07 calming-rain-loop.mp3',
      rain08: '08 rain-sounds.mp3',
      rain09: '09 gentle-midday-rain-sounds.mp3',
      rain10: '10 soundreality-rain-sound.mp3',
      rain11: '11 calming-rain.mp3',
      rain12: '12 rain-sounds.mp3'
    };
    this.rainVolumeSettings = {};
    for (const rKey of this.rainTracks) {
      this.rainVolumeSettings[rKey] = 0.0;
    }
    this.rainAudioElements = {};
    
    // 12종 솔라브르 주파수 레시피 배열 (기본 Code 001 탑재)
    this.rifeFreqs = [3.59, 3, 7.83, 10, 1550, 1500, 880, 802, 6000, 304, 2720, 2489, 2170, 2000, 1865, 1800, 1600, 776, 727, 660, 465, 450, 444, 440, 428, 380, 250, 146, 125, 95, 72, 20, 1.2];
    // VIP용 기본 주파수 배열 (초기값: V001 유방암 레시피)
    this.vipFreqs = [3672, 3072, 2950, 2876, 2333, 2298, 2263, 2208, 2191, 2189, 2187, 2184, 2182, 2180, 2173, 2162, 2152, 2146, 2133, 2128, 2127, 2120, 2116, 2112, 2104, 2103, 2100, 2063, 2008, 1865, 1550, 866, 802, 732, 676, 666, 444, 166, 125, 120, 95, 72, 48];
    // [신규] 사용자 맞춤 생성기 기본 주파수 배열 (솔페지오 & 뇌파 치유 톤)
    this.customFreqs = [528, 432, 7.83, 10];
    this.onCustomFrequencyChange = null;
    
    this.lastUnmutedVolume = 0.8;
    this.onFrequencyChange = null;       // 하위 호환용 주파수 변경 콜백
    this.onRifeFrequencyChange = null;  // [분리 신설] 일반 Rife 주파수 변경 콜백
    this.onVipFrequencyChange = null;   // [분리 신설] VIP Rife 주파수 변경 콜백
  }

  /**
   * 오디오 컨텍스트 초기화 및 사운드 버퍼 사전 합성
   */
  init() {
    if (this.audioCtx) return;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContextClass();
    
    // 1) 최종 마스터 게인 및 분석기 설정 (클리핑 방지 투명 리미터 다이내믹 컴프레서 장착)
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.value = this.isMuted ? 0.0 : this.masterVolume; 
    
    this.limiter = this.audioCtx.createDynamicsCompressor();
    this.limiter.threshold.setValueAtTime(-1.0, this.audioCtx.currentTime);
    this.limiter.knee.setValueAtTime(3.0, this.audioCtx.currentTime);
    this.limiter.ratio.setValueAtTime(20.0, this.audioCtx.currentTime);
    this.limiter.attack.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.limiter.release.setValueAtTime(0.15, this.audioCtx.currentTime);
    
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 256;
    
    this.masterGain.connect(this.limiter);
    this.limiter.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);
    
    // 2) 7채널 자연음 합성용 오디오 버퍼 생성
    this.synthesizeAmbientBuffers();
    
    // 3) 파트 1: 바이노럴 비트 전용 볼륨 노드 -> 마스터 연결
    this.beatsGain = this.audioCtx.createGain();
    this.beatsGain.gain.value = this.beatsVolume * 0.45;
    this.beatsGain.connect(this.masterGain);
    
    // 4) 파트 2: 솔페지오 주파수 전용 볼륨 노드 -> 마스터 연결
    this.solfeggioGain = this.audioCtx.createGain();
    this.solfeggioGain.gain.value = this.solfeggioVolume * 0.50;
    this.solfeggioGain.connect(this.masterGain);
    
    // 4.5) 파트 3-1: 일반 솔라브르 주파수 레시피 전용 볼륨 노드 및 크로스페이드 2채널 구축 -> 마스터 연결
    this.rifeGain = this.audioCtx.createGain();
    this.rifeGain.gain.value = this.rifeVolume;
    this.rifeGain.connect(this.masterGain);
    
    // 크로스페이드 교차 채널 A, B 생성하여 일반 Rife 마스터 게인 연결
    this.rifeGainA = this.audioCtx.createGain();
    this.rifeGainA.gain.value = 0.001; // 기본 묵음
    this.rifeGainA.connect(this.rifeGain);
    
    this.rifeGainB = this.audioCtx.createGain();
    this.rifeGainB.gain.value = 0.001; 
    this.rifeGainB.connect(this.rifeGain);

    // [핫픽스] Rife 전용 저주파 바이노럴 게인 구축 -> Rife 마스터 연결
    this.rifeBeatsGain = this.audioCtx.createGain();
    this.rifeBeatsGain.gain.value = 0.001;
    this.rifeBeatsGain.connect(this.rifeGain);
 
    // 4.6) [분리 신설] 파트 3-2: VIP 솔라브르 주파수 레시피 전용 볼륨 노드 및 크로스페이드 2채널 구축 -> 마스터 연결
    this.vipGain = this.audioCtx.createGain();
    this.vipGain.gain.value = this.vipVolume;
    this.vipGain.connect(this.masterGain);
    
    // 크로스페이드 교차 채널 A, B 생성하여 VIP Rife 마스터 게인 연결
    this.vipGainA = this.audioCtx.createGain();
    this.vipGainA.gain.value = 0.001; // 기본 묵음
    this.vipGainA.connect(this.vipGain);
    
    this.vipGainB = this.audioCtx.createGain();
    this.vipGainB.gain.value = 0.001; 
    this.vipGainB.connect(this.vipGain);

    // [핫픽스] VIP 전용 저주파 바이노럴 게인 구축 -> VIP 마스터 연결
    this.vipBeatsGain = this.audioCtx.createGain();
    this.vipBeatsGain.gain.value = 0.001;
    this.vipBeatsGain.connect(this.vipGain);
    
    // 4.7) [신규] 파트 3-3: 사용자 맞춤 주파수 생성기 (Custom Studio) 전용 볼륨 노드 및 크로스페이드 2채널 구축 -> 마스터 연결
    this.customGain = this.audioCtx.createGain();
    this.customGain.gain.value = this.customVolume;
    this.customGain.connect(this.masterGain);
    
    // 크로스페이드 교차 채널 A, B 생성하여 커스텀 마스터 게인 연결
    this.customGainA = this.audioCtx.createGain();
    this.customGainA.gain.value = 0.001; // 기본 묵음
    this.customGainA.connect(this.customGain);
    
    this.customGainB = this.audioCtx.createGain();
    this.customGainB.gain.value = 0.001; 
    this.customGainB.connect(this.customGain);
    
    // 5) 파트 4: 자연음 믹서 파트 전체 볼륨 노드 -> 마스터 연결
    this.natureMasterGain = this.audioCtx.createGain();
    this.natureMasterGain.gain.value = this.natureMasterVolume;
    this.natureMasterGain.connect(this.masterGain);
    
    // 자연음 14종 개별 채널 볼륨 게인 생성 -> 자연음 마스터에 연결
    const natureKeys = [
      'rain', 'waves', 'campfire', 'wind', 'reedwind',
      'stream', 'bamboowind', 'ambientpad', 'seagull',
      'singingbowl', 'forestbirds', 'cuckoo', 'crickets', 'mountainbirds'
    ];
    natureKeys.forEach(key => {
      if (!this.natureGains[key]) {
        this.natureGains[key] = this.audioCtx.createGain();
        this.natureGains[key].gain.value = this.natureVolumeSettings[key] || 0;
        this.natureGains[key].connect(this.natureMasterGain);
      }
    });

    // [신규] 대나무 삐걱거리는 현장음 외부 리소스 로딩 (비동기)
    this.loadBambooCreakBuffer();
  }

  /**
   * [신규] 대나무 삐걱거리는 소리 파일 비동기 로드
   */
  async loadBambooCreakBuffer() {
    if (this.bambooCreakBuffer) return;
    return;
    try {
      const response = await fetch('bamboo_creak.wav');
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      const arrayBuffer = await response.arrayBuffer();
      this.bambooCreakBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
      console.log("대나무 삐걱거리는 소리 음원(bamboo_creak.wav) 로드 성공!");
    } catch (e) {
      // 파일이 없을 때는 경고만 띄우고 앱은 문제 없이 동작함
      console.warn("대나무 삐걱거리는 소리 음원 로드 우회 (bamboo_creak.wav가 없거나 로드 실패):", e.message || e);
      this.bambooCreakBuffer = null;
    }
  }

  /**
   * 브라우저 연산 기반의 자연음/노이즈 버퍼 직접 합성
   */
  synthesizeAmbientBuffers() {
    const sampleRate = this.audioCtx.sampleRate;
    const bufferSize = sampleRate * 4;
    
    // 1. 핑크 노이즈 기초 버퍼 생성
    this.pinkNoiseBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const pinkData = this.pinkNoiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      let white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      let pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      b6 = white * 0.115926;
      pinkData[i] = pink * 0.12; 
    }
    
    // 2. 브라운 노이즈 기초 버퍼 생성
    this.brownNoiseBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const brownData = this.brownNoiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      let white = Math.random() * 2 - 1;
      brownData[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = brownData[i];
      brownData[i] *= 5.5; 
    }
    
    // 3. 빗소리 (Rain) 버퍼 합성
    this.rainBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const rainData = this.rainBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      rainData[i] = pinkData[i] * 1.5; 
    }
    for (let i = 0; i < 35; i++) {
      const pos = Math.floor(Math.random() * bufferSize);
      const decayDuration = Math.floor(sampleRate * 0.025);
      for (let j = 0; j < decayDuration; j++) {
        if (pos + j < bufferSize) {
          rainData[pos + j] += Math.sin(2 * Math.PI * 2200 * (j / sampleRate)) * Math.exp(-j / 80) * 0.35;
        }
      }
    }
    
    // 4. 모닥불소리 (Campfire) 버퍼 합성 (장작 타는 ASMR 벤치마킹 고도화)
    this.campfireBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const fireData = this.campfireBuffer.getChannelData(0);
    
    // 이글거리는 불길 배경음 (브라운 노이즈에 느린 사인파 볼륨 요동 결합)
    for (let i = 0; i < bufferSize; i++) {
      // 0.15Hz 주기의 부드러운 불길 요동 효과 생성
      const roar = Math.sin(2 * Math.PI * 0.15 * (i / sampleRate)) * 0.03;
      fireData[i] = brownData[i] * (0.12 + roar);
    }
    
    // 장작 타는 타닥타닥 마찰음 및 나무 터지는 소리 (Crackles & Pops)
    // 4초 버퍼 기준 기존 25회에서 180회로 빈도를 대폭 상향하여 풍성하게 합성
    const crackleCount = 180;
    for (let i = 0; i < crackleCount; i++) {
      const pos = Math.floor(Math.random() * bufferSize);
      
      // 불규칙한 강도
      const amp = 0.2 + Math.random() * 0.65;
      
      // 약 7% 확률로 "툭!" 하고 묵직하게 튀는 큰 나무 폭발 소리(Pop) 추가
      const isPop = Math.random() > 0.93;
      const decay = isPop ? (120 + Math.random() * 100) : (15 + Math.random() * 25);
      const clickDuration = Math.floor(sampleRate * (isPop ? 0.04 : 0.008));
      
      for (let j = 0; j < clickDuration; j++) {
        if (pos + j < bufferSize) {
          let val = (Math.random() * 2 - 1) * Math.exp(-j / decay) * amp;
          if (isPop) {
            // 둔탁한 느낌의 400Hz 로우패스 톤 필터링 모사
            val *= Math.sin(2 * Math.PI * 400 * (j / sampleRate)); 
          }
          fireData[pos + j] += val;
        }
      }
    }

    // 5. [신규] 계곡물 흐르는 소리 (Stream) 버퍼 합성
    this.streamBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const streamData = this.streamBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      streamData[i] = pinkData[i] * 0.4;
    }
    const bubbleCount = 200;
    for (let i = 0; i < bubbleCount; i++) {
      const pos = Math.floor(Math.random() * bufferSize);
      const bubbleFreq = 600 + Math.random() * 1200;
      const decay = 25 + Math.random() * 35;
      const duration = Math.floor(sampleRate * 0.03);
      const amp = 0.05 + Math.random() * 0.08;
      for (let j = 0; j < duration; j++) {
        if (pos + j < bufferSize) {
          streamData[pos + j] += Math.sin(2 * Math.PI * bubbleFreq * (j / sampleRate)) * Math.exp(-j / decay) * amp;
        }
      }
    }

    // 6. [신규] 대나무숲 바람소리 (BambooWind) 버퍼 합성
    this.bamboowindBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const bamboowindData = this.bamboowindBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      bamboowindData[i] = pinkData[i] * 0.65;
    }
    const leavesCount = 80;
    for (let i = 0; i < leavesCount; i++) {
      const pos = Math.floor(Math.random() * bufferSize);
      const leafDuration = Math.floor(sampleRate * (0.1 + Math.random() * 0.2));
      const amp = 0.03 + Math.random() * 0.05;
      for (let j = 0; j < leafDuration; j++) {
        if (pos + j < bufferSize) {
          const white = Math.random() * 2 - 1;
          bamboowindData[pos + j] += white * Math.sin(2 * Math.PI * (2000 + Math.random() * 500) * (j / sampleRate)) * Math.exp(-j / 1500) * amp;
        }
      }
    }

    // 7. [신규] 낮은 앰비언트 패드 (AmbientPad) 버퍼 합성
    this.ambientpadBuffer = this.audioCtx.createBuffer(1, bufferSize, sampleRate);
    const padData = this.ambientpadBuffer.getChannelData(0);
    const tones = [68, 136, 204, 272];
    const vols = [0.35, 0.45, 0.25, 0.15];
    for (let i = 0; i < bufferSize; i++) {
      let sample = 0;
      const t = i / sampleRate;
      for (let j = 0; j < tones.length; j++) {
        sample += Math.sin(2 * Math.PI * tones[j] * t) * vols[j];
      }
      const lfo = 0.8 + Math.sin(2 * Math.PI * 0.25 * t) * 0.2;
      padData[i] = sample * lfo * 0.14;
    }
  }

  /**
   * [신규] 대나무숲 바람소리(ASMR/수면용) 5채널 복합 사운드 그래프 생성 및 스케줄링
   */
  startBambooWind(ctx, targetGainNode, isOffline = false, durationSeconds = 0, segStart = 0, segEnd = 0) {
    const activeNodesList = [];

    // 1. 마스터 서브 게인 노드 생성 (볼륨 조절의 상위 연결 노드)
    const bambooMasterGain = ctx.createGain();
    bambooMasterGain.gain.value = 1.0;
    bambooMasterGain.connect(targetGainNode);

    // 바람 호흡 곡선 헬퍼 (주기 30초: 조용함 -> 바람 상승 -> 유지 -> 하강 -> 조용함)
    const getWindBreathVolume = (tAbs) => {
      const cycle = 30;
      const tau = tAbs % cycle;
      if (tau < 5) {
        return 0.05; // 조용함
      } else if (tau < 15) {
        return 0.05 + 0.95 * ((tau - 5) / 10); // 바람 불기 시작
      } else if (tau < 22) {
        return 1.0; // 바람 절정
      } else {
        return 1.0 - 0.95 * ((tau - 22) / 8); // 바람 잦아듦
      }
    };

    // 잎사귀 흔들림 곡선 헬퍼 (주기 30초: 바람에 뒤따라 흔들리기 시작 -> 절정 -> 잦아듦)
    const getLeafBreathVolume = (tAbs) => {
      const cycle = 30;
      const tau = tAbs % cycle;
      if (tau < 10) {
        return 0.02; // 조용함
      } else if (tau < 18) {
        return 0.02 + 0.98 * ((tau - 10) / 8); // 잎 흔들리기 시작
      } else if (tau < 24) {
        return 1.0; // 잎 흔들림 절정
      } else {
        return 1.0 - 0.98 * ((tau - 24) / 6); // 잎 흔들림 잦아듦
      }
    };

    // 2. 트랙 1: 부드러운 숲 바람 (25%)
    // 낮은 바람층 - 공간감 - 숲 전체에 흐르는 바람 (200Hz 이하 거의 제거, 6kHz 이상 차단)
    const windSource = ctx.createBufferSource();
    windSource.buffer = this.pinkNoiseBuffer;
    windSource.loop = true;
    
    const windHPF = ctx.createBiquadFilter();
    windHPF.type = 'highpass';
    windHPF.frequency.value = 180; // 200Hz 부근 로우컷
    windHPF.Q.value = 0.5;

    const windLPF = ctx.createBiquadFilter();
    windLPF.type = 'lowpass';
    windLPF.frequency.value = 1200; // 바람 소리는 저역에 아늑하게 남김
    windLPF.Q.value = 0.5;

    const windGainNode = ctx.createGain();

    windSource.connect(windHPF);
    windHPF.connect(windLPF);
    windLPF.connect(windGainNode);
    windGainNode.connect(bambooMasterGain);

    activeNodesList.push(windSource);

    // 3. 트랙 2: 대나무 잎 흔들림 (70%)
    // 잎 흔들림층 - 대나무 정체성 - 사각사각, 스스스, 아주 약한 잎소리 (2kHz ~ 5kHz 강조)
    const leafSource = ctx.createBufferSource();
    leafSource.buffer = this.pinkNoiseBuffer;
    leafSource.loop = true;

    // 2kHz ~ 5kHz 잎소리 중심 대역 필터링
    const leafBPF = ctx.createBiquadFilter();
    leafBPF.type = 'bandpass';
    leafBPF.frequency.value = 3500;
    leafBPF.Q.value = 1.0;

    // 좌우 스테레오 스플릿으로 공간 차별화 (Binaural & Haas Effect)
    const splitter = ctx.createChannelSplitter(2);
    const merger = ctx.createChannelMerger(2);

    // 왼쪽 채널: 잎소리를 약간 더 부드럽게 (Lowpass 3.0kHz)
    const leftLPF = ctx.createBiquadFilter();
    leftLPF.type = 'lowpass';
    leftLPF.frequency.value = 3000;
    leftLPF.Q.value = 0.7;

    const leftLeafGain = ctx.createGain();
    leftLeafGain.gain.value = 0.25;

    // 오른쪽 채널: 잎소리를 약간 더 밝게 + 18ms 딜레이 (하스 효과로 넓은 대나무숲 공간감 형성)
    const rightLPF = ctx.createBiquadFilter();
    rightLPF.type = 'lowpass';
    rightLPF.frequency.value = 4500;
    rightLPF.Q.value = 0.7;

    const delayNode = ctx.createDelay(0.1);
    delayNode.delayTime.value = 0.018; // 18ms 딜레이

    const rightLeafGain = ctx.createGain();
    rightLeafGain.gain.value = 0.25;

    // 좌우 오디오 패스 연결
    leafSource.connect(leafBPF);
    leafBPF.connect(splitter);

    // 왼쪽 채널 연결
    splitter.connect(leftLPF, 0);
    leftLPF.connect(leftLeafGain);
    leftLeafGain.connect(merger, 0, 0);

    // 오른쪽 채널 연결
    splitter.connect(rightLPF, 0);
    rightLPF.connect(delayNode);
    delayNode.connect(rightLeafGain);
    rightLeafGain.connect(merger, 0, 1);

    // 좌우 볼륨 아주 천천히 움직이기 (25초 주기 LFO 교차 변조)
    const leafLfo = ctx.createOscillator();
    leafLfo.frequency.value = 0.04; // 25초 주기
    activeNodesList.push(leafLfo);

    const leafLfoGainL = ctx.createGain();
    leafLfoGainL.gain.value = 0.12; // 변조 깊이

    const leafLfoGainR = ctx.createGain();
    leafLfoGainR.gain.value = -0.12; // 반대 위상 적용

    leafLfo.connect(leafLfoGainL);
    leafLfo.connect(leafLfoGainR);
    leafLfoGainL.connect(leftLeafGain.gain);
    leafLfoGainR.connect(rightLeafGain.gain);

    const leafMixGain = ctx.createGain();

    merger.connect(leafMixGain);
    leafMixGain.connect(bambooMasterGain);

    activeNodesList.push(leafSource);

    // 4. 트랙 3: 밤 공기감 (5%)
    // 깊은 밤 공기층 - 수면감 - 어둡고 조용한 배경
    const airSource = ctx.createBufferSource();
    airSource.buffer = this.brownNoiseBuffer;
    airSource.loop = true;

    const airLPF = ctx.createBiquadFilter();
    airLPF.type = 'lowpass';
    airLPF.frequency.value = 250;
    airLPF.Q.value = 0.5;

    const airGainNode = ctx.createGain();
    airGainNode.gain.value = 0.05; // 밤 숲 공기감은 5% 고정으로 뒤에서 포근히 받쳐줍니다.

    airSource.connect(airLPF);
    airLPF.connect(airGainNode);
    airGainNode.connect(bambooMasterGain);

    activeNodesList.push(airSource);

    // 5. [선택 트랙] 대나무 삐걱거리는 현장음 (음원이 로드되었을 경우에만 4% 결합)
    // 수면 방해를 주지 않도록 5% 이하(4%)로 매우 은은하게 배경에 밀착시켜 믹스합니다.
    if (this.bambooCreakBuffer) {
      const creakSource = ctx.createBufferSource();
      creakSource.buffer = this.bambooCreakBuffer;
      creakSource.loop = true;

      const creakHPF = ctx.createBiquadFilter();
      creakHPF.type = 'highpass';
      creakHPF.frequency.value = 150; // 저역 웅웅거림 필터링
      creakHPF.Q.value = 0.5;

      const creakLPF = ctx.createBiquadFilter();
      creakLPF.type = 'lowpass';
      creakLPF.frequency.value = 3500; // 날카로운 나무 긁힘 노이즈 제거
      creakLPF.Q.value = 0.5;

      const creakGainNode = ctx.createGain();
      creakGainNode.gain.value = 0.04; // 4% 비율 믹싱

      creakSource.connect(creakHPF);
      creakHPF.connect(creakLPF);
      creakLPF.connect(creakGainNode);
      creakGainNode.connect(bambooMasterGain);

      activeNodesList.push(creakSource);
    }

    // 볼륨 호흡 변조 스케줄링 적용 (바람과 잎소리에 각각 시간차가 있는 곡선 적용)
    if (isOffline) {
      windGainNode.gain.setValueAtTime(getWindBreathVolume(segStart) * 0.25, 0);
      leafMixGain.gain.setValueAtTime(getLeafBreathVolume(segStart) * 0.70, 0);

      for (let absTime = segStart + 2; absTime <= segEnd + 2; absTime += 2) {
        const t = absTime - segStart;
        const targetWind = getWindBreathVolume(Math.min(absTime, segEnd)) * 0.25;
        const targetLeaf = getLeafBreathVolume(Math.min(absTime, segEnd)) * 0.70;
        windGainNode.gain.linearRampToValueAtTime(targetWind, Math.min(t, durationSeconds));
        leafMixGain.gain.linearRampToValueAtTime(targetLeaf, Math.min(t, durationSeconds));
      }
    } else {
      const now = ctx.currentTime;
      windGainNode.gain.setValueAtTime(getWindBreathVolume(0) * 0.25, now);
      leafMixGain.gain.setValueAtTime(getLeafBreathVolume(0) * 0.70, now);

      // 실시간 재생 시에는 4시간 동안 부드러운 2초 간격 정밀 램프 스케줄링 선행 적용
      const totalScheduleTime = 14400; // 4시간
      const step = 2;
      for (let offset = step; offset <= totalScheduleTime; offset += step) {
        windGainNode.gain.linearRampToValueAtTime(getWindBreathVolume(offset) * 0.25, now + offset);
        leafMixGain.gain.linearRampToValueAtTime(getLeafBreathVolume(offset) * 0.70, now + offset);
      }
    }

    // 모든 노드 시작
    activeNodesList.forEach(node => {
      try {
        node.start();
      } catch (e) {
        try { node.start(0); } catch(err) {}
      }
    });

    return {
      masterNode: bambooMasterGain,
      nodes: activeNodesList
    };
  }

  /**
   * 실시간 오디오 기동 및 각 합성 채널 스타트
   */
  start() {
    this.init();
    
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    
    this.isPlaying = true;

    // [신규] 시작 전 기존 노드 혹시 모를 정리
    this.stopOscillators();
    this.stopNoiseSources();
    
    // 재생 시작 시 50ms 페이드인 적용으로 클릭음 차단
    if (this.masterGain && !this.isMuted) {
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.linearRampToValueAtTime(this.masterVolume, now + 0.05);
    }
    
    // [파트 1] 바이노럴 비트 기동 (활성화 상태인 경우에만)
    if (this.isBeatsActive) {
      this.startBeats();
    }
    
    // [파트 2] 솔페지오 발진기 기동 (활성화 상태인 경우에만)
    if (this.isSolfeggioActive) {
      this.startSolfeggio();
    }
    
    // [파트 3-1] 일반 솔라브르 주파수 레시피 8초 주기 크로스페이드 순환 기동 (활성화 상태인 경우에만)
    if (this.isRifeActive) {
      this.startRifeFrequencySweep();
    }

    // [파트 3-2] [분리 신설] VIP 솔라브르 주파수 레시피 8초 주기 크로스페이드 순환 기동 (활성화 상태인 경우에만)
    if (this.isVipActive) {
      this.startVipFrequencySweep();
    }

    // [파트 3-3] [신규] 사용자 맞춤 주파수 생성기 (Custom Studio) 크로스페이드 순환 기동 (활성화 상태인 경우에만)
    if (this.isCustomActive) {
      this.startCustomFrequencySweep();
    }
    
    // [파트 4] 자연음 믹서 7종 합성 구동 (활성화 상태인 경우에만)
    if (this.isNatureActive) {
      this.startNatureMixer();
    }
  }

  /**
   * 바이노럴 비트 사운드 재생 코어 (팝노이즈 없는 부드러운 주파수 글라이딩)
   */
  startBeats(overrideCarrier = null, overrideBeat = null) {
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const carrier = overrideCarrier !== null ? overrideCarrier : this.carrierFreq;
    const beat = overrideBeat !== null ? overrideBeat : this.beatFreq;

    if (this.oscL && this.oscR) {
      this.oscL.frequency.cancelScheduledValues(now);
      this.oscL.frequency.setTargetAtTime(carrier, now, 0.02);
      this.oscR.frequency.cancelScheduledValues(now);
      this.oscR.frequency.setTargetAtTime(carrier + beat, now, 0.02);
      return; 
    }

    this.oscL = this.audioCtx.createOscillator();
    this.oscL.type = 'sine';
    this.oscL.frequency.setValueAtTime(carrier, now);
    this.activeNodes.push(this.oscL);
    
    this.oscR = this.audioCtx.createOscillator();
    this.oscR.type = 'sine';
    this.oscR.frequency.setValueAtTime(carrier + beat, now);
    this.activeNodes.push(this.oscR);
    
    // [Binaural Fix] 모바일 환경의 좌우 음원 분리를 보장하기 위해 StereoPanner 대신 ChannelMergerNode 사용
    this.beatsMerger = this.audioCtx.createChannelMerger(2);
    
    this.oscL.connect(this.beatsMerger, 0, 0); // L -> 0번 인풋 (왼쪽)
    this.oscR.connect(this.beatsMerger, 0, 1); // R -> 1번 인풋 (오른쪽)
    this.beatsMerger.connect(this.beatsGain);
    
    this.oscL.start(now);
    this.oscR.start(now);
  }

  /**
   * 솔페지오 주파수 사운드 재생 코어 (팝노이즈/클릭음 완벽 제거 및 무음 크로스페이드)
   */
  startSolfeggio() {
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    if (this.isSolfeggioBinaural) {
      // 1) 바이노럴 모드 (예: 396_399)
      // 기존 모노 오실레이터가 돌고 있었다면 클릭 없이 부드럽게 정지
      if (this.solfeggioOsc) {
        const oldOsc = this.solfeggioOsc;
        this.solfeggioOsc = null;
        try {
          oldOsc.stop(now + 0.03);
          setTimeout(() => { try { oldOsc.disconnect(); } catch(e) {} }, 40);
        } catch(e) {}
      }

      // 이미 바이노럴 오실레이터가 작동 중이라면 주파수만 부드럽게 글라이딩 전환 (클릭 방지)
      if (this.solfeggioOscL && this.solfeggioOscR) {
        this.solfeggioOscL.frequency.cancelScheduledValues(now);
        this.solfeggioOscL.frequency.setTargetAtTime(this.solfeggioFreqL, now, 0.02);
        this.solfeggioOscR.frequency.cancelScheduledValues(now);
        this.solfeggioOscR.frequency.setTargetAtTime(this.solfeggioFreqR, now, 0.02);
        return;
      }

      this.clearSolfeggioOscillators();

      this.solfeggioOscL = this.audioCtx.createOscillator();
      this.solfeggioOscL.type = 'sine';
      this.solfeggioOscL.frequency.setValueAtTime(this.solfeggioFreqL, now);
      this.activeNodes.push(this.solfeggioOscL);
      
      this.solfeggioOscR = this.audioCtx.createOscillator();
      this.solfeggioOscR.type = 'sine';
      this.solfeggioOscR.frequency.setValueAtTime(this.solfeggioFreqR, now);
      this.activeNodes.push(this.solfeggioOscR);
      
      this.solfeggioMerger = this.audioCtx.createChannelMerger(2);
      this.solfeggioOscL.connect(this.solfeggioMerger, 0, 0);
      this.solfeggioOscR.connect(this.solfeggioMerger, 0, 1);
      this.solfeggioMerger.connect(this.solfeggioGain);
      
      this.solfeggioOscL.start(now);
      this.solfeggioOscR.start(now);
    } else {
      // 2) 일반 단일 주파수 모노 솔페지오 기동 (396, 417, 432, 528, 639, 741 등)
      // 기존 바이노럴 오실레이터가 돌고 있었다면 클릭 없이 부드럽게 정지
      if (this.solfeggioOscL || this.solfeggioOscR) {
        const oldL = this.solfeggioOscL;
        const oldR = this.solfeggioOscR;
        const oldMerger = this.solfeggioMerger;
        this.solfeggioOscL = null;
        this.solfeggioOscR = null;
        this.solfeggioMerger = null;
        try {
          if (oldL) oldL.stop(now + 0.03);
          if (oldR) oldR.stop(now + 0.03);
          setTimeout(() => {
            try { if (oldL) oldL.disconnect(); } catch(e) {}
            try { if (oldR) oldR.disconnect(); } catch(e) {}
            try { if (oldMerger) oldMerger.disconnect(); } catch(e) {}
          }, 40);
        } catch(e) {}
      }

      // 이미 모노 오실레이터가 작동 중이라면 주파수만 즉시 부드럽게 글라이딩 전환 (클릭음/툭툭음 원천 제거!)
      if (this.solfeggioOsc) {
        this.solfeggioOsc.frequency.cancelScheduledValues(now);
        this.solfeggioOsc.frequency.setTargetAtTime(this.solfeggioFreq, now, 0.02);
        return;
      }

      this.clearSolfeggioOscillators();

      this.solfeggioOsc = this.audioCtx.createOscillator();
      this.solfeggioOsc.type = 'sine';
      this.solfeggioOsc.frequency.setValueAtTime(this.solfeggioFreq, now);
      this.solfeggioOsc.connect(this.solfeggioGain);
      this.activeNodes.push(this.solfeggioOsc);
      
      this.solfeggioOsc.start(now);
    }
  }

  /**
   * 솔페지오 오실레이터 안전 정리 (클릭 방지)
   */
  clearSolfeggioOscillators() {
    if (this.solfeggioOsc) {
      try { this.solfeggioOsc.stop(); } catch(e) {}
      try { this.solfeggioOsc.disconnect(); } catch(e) {}
      this.solfeggioOsc = null;
    }
    if (this.solfeggioOscL) {
      try { this.solfeggioOscL.stop(); } catch(e) {}
      try { this.solfeggioOscL.disconnect(); } catch(e) {}
      this.solfeggioOscL = null;
    }
    if (this.solfeggioOscR) {
      try { this.solfeggioOscR.stop(); } catch(e) {}
      try { this.solfeggioOscR.disconnect(); } catch(e) {}
      this.solfeggioOscR = null;
    }
    if (this.solfeggioMerger) {
      try { this.solfeggioMerger.disconnect(); } catch(e) {}
      this.solfeggioMerger = null;
    }
  }

  /**
   * 자연음 믹서 7종 사운드 재생 코어 (0% 볼륨 기동 차단 및 리소스 최적화 버전)
   */
  startNatureMixer() {
    this.init();

    if (this.rainTracks && this.rainVolumeSettings) {
      for (const trackId of this.rainTracks) {
        if (this.rainVolumeSettings[trackId] > 0.001) {
          this.startRainTrack(trackId);
        }
      }
    }

    // 3-1) 빗소리 (Rain): 볼륨 설정이 0보다 클 때만 노드를 동적 생성하여 기동합니다.
    if (this.natureVolumeSettings.rain > 0.001 && !this.natureSources.rain) {
      this.natureSources.rain = this.audioCtx.createBufferSource();
      this.natureSources.rain.buffer = this.rainBuffer;
      this.natureSources.rain.loop = true;
      this.natureSources.rain.connect(this.natureGains.rain);
      this.activeNodes.push(this.natureSources.rain);
      this.natureSources.rain.start();
    }
    
    // 3-2) 파도소리 (Waves): 볼륨이 0보다 클 때만 기동하며 저주파 변조 LFO를 함께 켭니다.
    if (this.natureVolumeSettings.waves > 0.001 && !this.natureSources.waves) {
      this.natureSources.waves = this.audioCtx.createBufferSource();
      this.natureSources.waves.buffer = this.brownNoiseBuffer;
      this.natureSources.waves.loop = true;
      this.activeNodes.push(this.natureSources.waves);
      
      const wavesFilter = this.audioCtx.createBiquadFilter();
      wavesFilter.type = 'lowpass';
      wavesFilter.frequency.value = 350;
      
      this.waveLfo = this.audioCtx.createOscillator();
      this.waveLfo.frequency.value = 0.06;
      this.activeNodes.push(this.waveLfo);
      
      this.waveLfoGain = this.audioCtx.createGain();
      this.waveLfoGain.gain.value = 0.45; 
      const wavesModulatorGain = this.audioCtx.createGain();
      wavesModulatorGain.gain.value = 0.75; 
      
      this.waveLfo.connect(this.waveLfoGain);
      this.waveLfoGain.connect(wavesModulatorGain.gain);
      
      this.natureSources.waves.connect(wavesFilter);
      wavesFilter.connect(wavesModulatorGain);
      wavesModulatorGain.connect(this.natureGains.waves);
      
      this.waveLfo.start();
      this.natureSources.waves.start();
    }
    
    // 3-3) 바람소리 (Wind): 볼륨이 0보다 클 때만 기동하며 대역 통과 필터 및 LFO를 연결합니다.
    if (this.natureVolumeSettings.wind > 0.001 && !this.natureSources.wind) {
      this.natureSources.wind = this.audioCtx.createBufferSource();
      this.natureSources.wind.buffer = this.pinkNoiseBuffer;
      this.natureSources.wind.loop = true;
      this.activeNodes.push(this.natureSources.wind);
      
      this.windFilter = this.audioCtx.createBiquadFilter();
      this.windFilter.type = 'bandpass';
      this.windFilter.frequency.value = 600;
      this.windFilter.Q.value = 1.8; 
      
      this.windLfo = this.audioCtx.createOscillator();
      this.windLfo.frequency.value = 0.13;
      this.activeNodes.push(this.windLfo);
      
      this.windLfoGain = this.audioCtx.createGain();
      this.windLfoGain.gain.value = 300; 
      
      const windAmplifier = this.audioCtx.createGain();
      windAmplifier.gain.value = 2.0; 
      
      this.windLfo.connect(this.windLfoGain);
      this.windLfoGain.connect(this.windFilter.frequency);
      
      this.natureSources.wind.connect(this.windFilter);
      this.windFilter.connect(windAmplifier);
      windAmplifier.connect(this.natureGains.wind);
      
      this.windLfo.start();
      this.natureSources.wind.start();
    }
    
    // 3-3.5) 갈대 바람소리 (Reed Wind): 볼륨이 0보다 클 때만 기동하며 대역 통과 필터 및 듀얼 LFO 변조를 탑재합니다.
    if (this.natureVolumeSettings.reedwind > 0.001 && !this.natureSources.reedwind) {
      this.natureSources.reedwind = this.audioCtx.createBufferSource();
      this.natureSources.reedwind.buffer = this.pinkNoiseBuffer;
      this.natureSources.reedwind.loop = true;
      this.activeNodes.push(this.natureSources.reedwind);
      
      const reedFilter = this.audioCtx.createBiquadFilter();
      reedFilter.type = 'bandpass';
      reedFilter.frequency.value = 1100; // 갈대 서걱임의 기저 대역 주파수
      reedFilter.Q.value = 1.5; 
      
      // LFO 1: 느린 주파수 변조 (바람에 의한 서걱거림의 쏠림)
      this.reedWindLfo = this.audioCtx.createOscillator();
      this.reedWindLfo.frequency.value = 0.07; // 약 14초 주기
      this.activeNodes.push(this.reedWindLfo);
      
      const reedLfoGain = this.audioCtx.createGain();
      reedLfoGain.gain.value = 350; // 750Hz ~ 1450Hz 사이에서 변화 유도
      
      this.reedWindLfo.connect(reedLfoGain);
      reedLfoGain.connect(reedFilter.frequency);
      
      // LFO 2: 볼륨 물결치듯 흔들림 변조 (바람의 팽창/수축 세기)
      this.reedWindLfo2 = this.audioCtx.createOscillator();
      this.reedWindLfo2.frequency.value = 0.11; // 약 9초 주기
      this.activeNodes.push(this.reedWindLfo2);
      
      const reedVolumeGain = this.audioCtx.createGain();
      reedVolumeGain.gain.value = 0.4; // 40% 변조 폭
      
      const reedAmp = this.audioCtx.createGain();
      reedAmp.gain.value = 0.7; // 기본 믹서 볼륨
      
      this.reedWindLfo2.connect(reedVolumeGain);
      reedVolumeGain.connect(reedAmp.gain);
      
      this.natureSources.reedwind.connect(reedFilter);
      reedFilter.connect(reedAmp);
      reedAmp.connect(this.natureGains.reedwind);
      
      this.reedWindLfo.start();
      this.reedWindLfo2.start();
      this.natureSources.reedwind.start();
    }

    // 3-4) 모닥불소리 (Campfire): 볼륨이 0보다 클 때만 기동합니다.
    if (this.natureVolumeSettings.campfire > 0.001 && !this.natureSources.campfire) {
      this.natureSources.campfire = this.audioCtx.createBufferSource();
      this.natureSources.campfire.buffer = this.campfireBuffer;
      this.natureSources.campfire.loop = true;
      this.natureSources.campfire.connect(this.natureGains.campfire);
      this.activeNodes.push(this.natureSources.campfire);
      this.natureSources.campfire.start();
    }
    
    // 3-5) 계곡물 흐르는 소리 (Stream): 볼륨이 0보다 클 때만 기동합니다.
    if (this.natureVolumeSettings.stream > 0.001 && !this.natureSources.stream) {
      this.natureSources.stream = this.audioCtx.createBufferSource();
      this.natureSources.stream.buffer = this.streamBuffer;
      this.natureSources.stream.loop = true;
      this.natureSources.stream.connect(this.natureGains.stream);
      this.activeNodes.push(this.natureSources.stream);
      this.natureSources.stream.start();
    }
    
    // 3-5-2) 대나무숲 바람소리 (BambooWind): 볼륨이 0보다 클 때만 기동합니다.
    if (this.natureVolumeSettings.bamboowind > 0.001 && !this.natureSources.bamboowind) {
      const bambooGraph = this.startBambooWind(this.audioCtx, this.natureGains.bamboowind, false);
      this.natureSources.bamboowind = bambooGraph.masterNode;
      bambooGraph.nodes.forEach(node => this.activeNodes.push(node));
    }

    // 3-5-3) 낮은 앰비언트 패드 (AmbientPad): 볼륨이 0보다 클 때만 기동합니다.
    if (this.natureVolumeSettings.ambientpad > 0.001 && !this.natureSources.ambientpad) {
      this.natureSources.ambientpad = this.audioCtx.createBufferSource();
      this.natureSources.ambientpad.buffer = this.ambientpadBuffer;
      this.natureSources.ambientpad.loop = true;
      this.natureSources.ambientpad.connect(this.natureGains.ambientpad);
      this.activeNodes.push(this.natureSources.ambientpad);
      this.natureSources.ambientpad.start();
    }
    
    // 3-6) 갈매기소리 (기존 스케줄러 자체적으로 볼륨이 0이면 리턴함)
    this.triggerSeagullLoop();
    
    // 3-7) 싱잉볼 (기존 스케줄러 자체적으로 볼륨이 0이면 리턴함)
    this.triggerSingingBowlLoop();
    
    // 3-8) 숲 속의 새소리
    this.triggerForestBirdsLoop();
    
    // 3-9) 수면 유도 뻐꾸기소리
    this.triggerCuckooSleepLoop();
    
    // 3-10) 밤의 풀벌레소리
    this.triggerCricketsLoop();
    
    // 3-11) 깊은 산속 새소리 앙상블
    this.triggerMountainBirdsLoop();
  }

  /**
   * 주파수에 따른 청감 볼륨 등화(Equal Perceptual Loudness) 게인 산출
   * Fletcher-Munson 및 ISO 226 등청감 곡선 표준을 바탕으로 튜닝되어,
   * 0.1Hz부터 40,887Hz까지 귀와 뇌가 느끼는 볼륨을 일정하고 편안하게 유지합니다.
   * @param {number} freq - 주파수 (Hz)
   * @returns {number} 정규화된 최적 게인 값
   */
  computePerceptualGain(freq) {
    const f = parseFloat(freq) || 100;
    if (f < 30) {
      // 0.1Hz ~ 29.9Hz 초저주파/뇌파 대역 (216Hz/324Hz/432Hz 3중 하모닉 바이노럴 코드): 강력하고 뚜렷한 맥동
      return 0.58;
    } else if (f < 85) {
      // 30Hz ~ 84.9Hz 극저역 (30, 39, 40, 60, 72, 80Hz 등): 가상 피치 6단 멀티 하모닉스 강력 보정
      return 0.62;
    } else if (f < 180) {
      // 85Hz ~ 179.9Hz 중저역 (90, 95, 100, 120, 125, 146Hz 등): 가상 피치 4단 하모닉스 (125Hz/95Hz 감쇄 완벽 차단)
      return 0.55;
    } else if (f < 300) {
      // 180Hz ~ 300Hz (250Hz 등)
      return 0.36;
    } else if (f < 600) {
      // 300Hz ~ 600Hz: 솔페지오 396, 432, 528Hz 등
      return 0.28;
    } else if (f < 1200) {
      // 600Hz ~ 1200Hz: 외이도 공명 대역 (727Hz, 880Hz 등) -> 자극 완화
      return 0.22;
    } else if (f < 2500) {
      // 1200Hz ~ 2500Hz: 1500Hz, 1550Hz, 2000Hz, 2170Hz -> 부드럽고 온화한 실크 톤 (볼륨 급상승 원천 차단)
      return 0.18;
    } else if (f < 4000) {
      // 2500Hz ~ 4000Hz: 2.7kHz ~ 4kHz 대역
      return 0.20;
    } else if (f < 8000) {
      // 4000Hz ~ 8000Hz: 5000Hz, 6000Hz, 7344Hz 등 고주파 대역 (서브하모닉 결합)
      return 0.30;
    } else if (f <= 14000) {
      // 8000Hz ~ 14000Hz: 10000Hz, 12128Hz 등 초고주파 대역 (10000Hz 명징한 힐링음)
      return 0.36;
    } else {
      // 14000Hz 초과: 극초고주파/초음파 대역 (양자 옥타브 분주 공명 결합)
      return 0.32;
    }
  }

  /**
   * [지능형 음향 합성 엔진 (Intelligent Psychoacoustic Synthesizer)]
   * 0.1Hz ~ 40,887Hz 전 대역 무음 차단 및 완벽 청감 보정 주파수 보이스 노드 그래프 생성
   * - Tier 1 (< 30Hz): 216Hz + 324Hz + 432Hz 3중 하모닉 바이노럴 코드 (소형 스피커/이어폰 100% 가청)
   * - Tier 2-A (30Hz ~ 84.9Hz): 기본음 + 가상 피치(Missing Fundamental) 6단 하모닉 배음 클러스터 (39, 40, 72Hz 완벽 가청)
   * - Tier 2-B (85Hz ~ 179.9Hz): 기본음 + 가상 피치 4단 하모닉 배음 클러스터 (95Hz, 125Hz 볼륨 저하 원천 방지)
   * - Tier 3 (180Hz ~ 3,999.9Hz): 순수 가청 사인파
   * - Tier 4-A (4,000Hz ~ 14,000Hz): 타겟 고주파수 + 황금 분주 서브하모닉(f/2, f/4, f/8) 결합 (10000Hz 등 완벽 청음)
   * - Tier 4-B (> 14,000Hz): 양자 옥타브 분주 법칙(Law of Octaves) 가청 공명대역(1k~4.5k) 변환 + 2차 옥타브 배음
   */
  createSynthesisVoiceNodes(ctx, targetFreq, activeGainNode, startTime, stopTime = null, isOffline = false, numChannels = 2) {
    const newNodes = [];
    const activeNodesList = [];
    const f = parseFloat(targetFreq) || 100;

    if (f < 30) {
      // ─────────────────────────────────────────────────────────────
      // [Tier 1: 0.1Hz ~ 29.9Hz 극저주파/뇌파 대역]
      // 3중 하모닉 바이노럴 코드 (216Hz + 324Hz + 432Hz)
      // 소형 스피커/노트북/이어폰 어디서나 100% 강력하고 아름답게 맥동 청취
      // ─────────────────────────────────────────────────────────────
      const safeBeat = Math.max(0.1, f);

      // 1) 메인 216Hz 캐리어 바이노럴 L/R
      const oscL = ctx.createOscillator();
      oscL.type = 'sine';
      oscL.frequency.setValueAtTime(216.0, startTime);

      const oscR = ctx.createOscillator();
      oscR.type = 'sine';
      oscR.frequency.setValueAtTime(216.0 + safeBeat, startTime);

      if (numChannels === 2) {
        const merger = ctx.createChannelMerger(2);
        oscL.connect(merger, 0, 0);
        oscR.connect(merger, 0, 1);
        merger.connect(activeGainNode);
        newNodes.push(oscL, oscR, merger);
      } else {
        oscL.connect(activeGainNode);
        oscR.connect(activeGainNode);
        newNodes.push(oscL, oscR);
      }
      activeNodesList.push(oscL, oscR);

      // 2) 432Hz 2차 배음 바이노럴 L/R (게인 0.65)
      const harm432Gain = ctx.createGain();
      harm432Gain.gain.setValueAtTime(0.65, startTime);

      const harm432OscL = ctx.createOscillator();
      harm432OscL.type = 'sine';
      harm432OscL.frequency.setValueAtTime(432.0, startTime);

      const harm432OscR = ctx.createOscillator();
      harm432OscR.type = 'sine';
      harm432OscR.frequency.setValueAtTime(432.0 + safeBeat, startTime);

      if (numChannels === 2) {
        const harm432Merger = ctx.createChannelMerger(2);
        harm432OscL.connect(harm432Merger, 0, 0);
        harm432OscR.connect(harm432Merger, 0, 1);
        harm432Merger.connect(harm432Gain);
        newNodes.push(harm432OscL, harm432OscR, harm432Gain, harm432Merger);
      } else {
        harm432OscL.connect(harm432Gain);
        harm432OscR.connect(harm432Gain);
        newNodes.push(harm432OscL, harm432OscR, harm432Gain);
      }
      harm432Gain.connect(activeGainNode);
      activeNodesList.push(harm432OscL, harm432OscR);

      // 3) 324Hz 온화한 화음(5도 배음) 바이노럴 L/R (게인 0.45)
      const harm324Gain = ctx.createGain();
      harm324Gain.gain.setValueAtTime(0.45, startTime);

      const harm324OscL = ctx.createOscillator();
      harm324OscL.type = 'sine';
      harm324OscL.frequency.setValueAtTime(324.0, startTime);

      const harm324OscR = ctx.createOscillator();
      harm324OscR.type = 'sine';
      harm324OscR.frequency.setValueAtTime(324.0 + safeBeat, startTime);

      if (numChannels === 2) {
        const harm324Merger = ctx.createChannelMerger(2);
        harm324OscL.connect(harm324Merger, 0, 0);
        harm324OscR.connect(harm324Merger, 0, 1);
        harm324Merger.connect(harm324Gain);
        newNodes.push(harm324OscL, harm324OscR, harm324Gain, harm324Merger);
      } else {
        harm324OscL.connect(harm324Gain);
        harm324OscR.connect(harm324Gain);
        newNodes.push(harm324OscL, harm324OscR, harm324Gain);
      }
      harm324Gain.connect(activeGainNode);
      activeNodesList.push(harm324OscL, harm324OscR);

      // 시작/정지 스케줄링
      oscL.start(startTime);
      oscR.start(startTime);
      harm432OscL.start(startTime);
      harm432OscR.start(startTime);
      harm324OscL.start(startTime);
      harm324OscR.start(startTime);
      if (stopTime !== null) {
        oscL.stop(stopTime);
        oscR.stop(stopTime);
        harm432OscL.stop(stopTime);
        harm432OscR.stop(stopTime);
        harm324OscL.stop(stopTime);
        harm324OscR.stop(stopTime);
      }

    } else if (f < 85) {
      // ─────────────────────────────────────────────────────────────
      // [Tier 2-A: 30Hz ~ 84.9Hz 극저역 주파수 (V047: 40, 39, 72Hz / V079: 30, 40, 60, 80Hz 등)]
      // 가상 피치(Missing Fundamental / MaxxBass) 6단 하모닉 배음 클러스터
      // ─────────────────────────────────────────────────────────────
      const safeFreq = Math.max(30.0, f);

      // 1) 기본음
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(safeFreq, startTime);
      osc.connect(activeGainNode);
      osc.start(startTime);
      if (stopTime !== null) osc.stop(stopTime);
      newNodes.push(osc);
      activeNodesList.push(osc);

      // 2~6차 배음 하모닉스 생성 함수
      const addHarmonic = (multiplier, gainVal) => {
        const harmFreq = safeFreq * multiplier;
        const harmOsc = ctx.createOscillator();
        harmOsc.type = 'sine';
        harmOsc.frequency.setValueAtTime(harmFreq, startTime);
        const harmGain = ctx.createGain();
        harmGain.gain.setValueAtTime(gainVal, startTime);
        harmOsc.connect(harmGain);
        harmGain.connect(activeGainNode);
        harmOsc.start(startTime);
        if (stopTime !== null) harmOsc.stop(stopTime);
        newNodes.push(harmOsc, harmGain);
        activeNodesList.push(harmOsc);
      };

      addHarmonic(2, 0.85); // 2차 배음 (80Hz, 144Hz 등)
      addHarmonic(3, 0.75); // 3차 배음 (120Hz, 216Hz 등)
      addHarmonic(4, 0.60); // 4차 배음 (160Hz, 288Hz 등) - 소형 스피커 완벽 가청
      addHarmonic(5, 0.45); // 5차 배음 (200Hz, 360Hz 등)
      addHarmonic(6, 0.30); // 6차 배음 (240Hz, 432Hz 등)

    } else if (f < 180) {
      // ─────────────────────────────────────────────────────────────
      // [Tier 2-B: 85Hz ~ 179.9Hz 중저역 주파수 (V047: 95, 125, 146Hz / V079: 100, 120Hz 등)]
      // 가상 피치 4단 하모닉 배음 클러스터 (125Hz, 95Hz 볼륨 저하 완벽 차단)
      // ─────────────────────────────────────────────────────────────
      const safeFreq = f;

      // 1) 기본음
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(safeFreq, startTime);
      osc.connect(activeGainNode);
      osc.start(startTime);
      if (stopTime !== null) osc.stop(stopTime);
      newNodes.push(osc);
      activeNodesList.push(osc);

      const addHarmonic = (multiplier, gainVal) => {
        const harmFreq = safeFreq * multiplier;
        const harmOsc = ctx.createOscillator();
        harmOsc.type = 'sine';
        harmOsc.frequency.setValueAtTime(harmFreq, startTime);
        const harmGain = ctx.createGain();
        harmGain.gain.setValueAtTime(gainVal, startTime);
        harmOsc.connect(harmGain);
        harmGain.connect(activeGainNode);
        harmOsc.start(startTime);
        if (stopTime !== null) harmOsc.stop(stopTime);
        newNodes.push(harmOsc, harmGain);
        activeNodesList.push(harmOsc);
      };

      addHarmonic(2, 0.75); // 2차 배음 (95Hz -> 190Hz, 125Hz -> 250Hz)
      addHarmonic(3, 0.55); // 3차 배음 (95Hz -> 285Hz, 125Hz -> 375Hz)
      addHarmonic(4, 0.35); // 4차 배음 (95Hz -> 380Hz, 125Hz -> 500Hz)

    } else if (f < 4000) {
      // ─────────────────────────────────────────────────────────────
      // [Tier 3: 180Hz ~ 3,999.9Hz 표준 가청 주파수 대역]
      // ─────────────────────────────────────────────────────────────
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, startTime);
      osc.connect(activeGainNode);
      osc.start(startTime);
      if (stopTime !== null) osc.stop(stopTime);
      newNodes.push(osc);
      activeNodesList.push(osc);

    } else if (f <= 14000) {
      // ─────────────────────────────────────────────────────────────
      // [Tier 4-A: 4,000Hz ~ 14,000Hz 고주파/초고주파 대역 (10,000Hz, 7344Hz, 6000Hz, 5000Hz 등)]
      // ─────────────────────────────────────────────────────────────
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, startTime);
      osc.connect(activeGainNode);
      osc.start(startTime);
      if (stopTime !== null) osc.stop(stopTime);
      newNodes.push(osc);
      activeNodesList.push(osc);

      const subFreq = (f >= 8000) ? (f / 4) : (f / 2);
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(subFreq, startTime);
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.70, startTime);
      subOsc.connect(subGain);
      subGain.connect(activeGainNode);
      subOsc.start(startTime);
      if (stopTime !== null) subOsc.stop(stopTime);
      newNodes.push(subOsc, subGain);
      activeNodesList.push(subOsc);

      if (f >= 8000) {
        const sub2Osc = ctx.createOscillator();
        sub2Osc.type = 'sine';
        sub2Osc.frequency.setValueAtTime(f / 8, startTime);
        const sub2Gain = ctx.createGain();
        sub2Gain.gain.setValueAtTime(0.40, startTime);
        sub2Osc.connect(sub2Gain);
        sub2Gain.connect(activeGainNode);
        sub2Osc.start(startTime);
        if (stopTime !== null) sub2Osc.stop(stopTime);
        newNodes.push(sub2Osc, sub2Gain);
        activeNodesList.push(sub2Osc);
      }

    } else {
      // ─────────────────────────────────────────────────────────────
      // [Tier 4-B: > 14,000Hz ~ 40,887Hz 극초고주파/초음파 대역]
      // ─────────────────────────────────────────────────────────────
      let audibleFreq = f;
      while (audibleFreq > 4500) {
        audibleFreq /= 2.0;
      }

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(audibleFreq, startTime);
      osc.connect(activeGainNode);
      osc.start(startTime);
      if (stopTime !== null) osc.stop(stopTime);
      newNodes.push(osc);
      activeNodesList.push(osc);

      const highHarm = ctx.createOscillator();
      highHarm.type = 'sine';
      highHarm.frequency.setValueAtTime(Math.min(12000, audibleFreq * 2), startTime);
      const highHarmGain = ctx.createGain();
      highHarmGain.gain.setValueAtTime(0.45, startTime);
      highHarm.connect(highHarmGain);
      highHarmGain.connect(activeGainNode);
      highHarm.start(startTime);
      if (stopTime !== null) highHarm.stop(stopTime);
      newNodes.push(highHarm, highHarmGain);
      activeNodesList.push(highHarm);
    }

    return {
      allNodes: newNodes,
      activeNodes: activeNodesList
    };
  }

  /**
   * 실시간 재생 정지 (클릭음/툭 소리 100% 완전 차단 및 자원 안전 정리)
   */
  stop() {
    this.isPlaying = false;
    
    // 1) 즉각 모든 타이머 정리 (타이머 누수 원천 차단)
    if (this.customSweepTimer) { clearInterval(this.customSweepTimer); this.customSweepTimer = null; }
    if (this.seagullTimer) { clearInterval(this.seagullTimer); this.seagullTimer = null; }
    if (this.singingBowlTimer) { clearInterval(this.singingBowlTimer); this.singingBowlTimer = null; }
    if (this.rifeSweepTimer) { clearInterval(this.rifeSweepTimer); this.rifeSweepTimer = null; }
    if (this.vipSweepTimer) { clearInterval(this.vipSweepTimer); this.vipSweepTimer = null; }
    if (this.forestBirdsTimer) { clearInterval(this.forestBirdsTimer); this.forestBirdsTimer = null; }
    if (this.cuckooSleepTimer) { clearInterval(this.cuckooSleepTimer); this.cuckooSleepTimer = null; }
    if (this.cricketsTimer) { clearInterval(this.cricketsTimer); this.cricketsTimer = null; }
    if (this.mountainBirdsTimer) { clearInterval(this.mountainBirdsTimer); this.mountainBirdsTimer = null; }
    if (this._rifePreFadeTimer) { clearTimeout(this._rifePreFadeTimer); this._rifePreFadeTimer = null; }
    if (this._vipPreFadeTimer) { clearTimeout(this._vipPreFadeTimer); this._vipPreFadeTimer = null; }
    if (this._cricketTimers) { this._cricketTimers.forEach(t => clearTimeout(t)); this._cricketTimers = []; }
    if (this._forestTimers) { this._forestTimers.forEach(t => clearTimeout(t)); this._forestTimers = []; }

    // 2) HTML5 오디오 (12종 빗소리) 즉각 일시정지 및 시간 되감기
    if (this.rainTracks) {
      for (const trackId of this.rainTracks) {
        this.stopRainTrack(trackId);
        const a = this.rainAudioElements ? this.rainAudioElements[trackId] : null;
        if (a) {
          try { a.pause(); a.currentTime = 0; } catch(e) {}
        }
      }
    }

    // 3) 모든 오실레이터 (발진기) 및 합성 노드 안전 정지
    this.stopOscillators();
    this.stopNoiseSources();

    // 4) activeNodes 잔여 노드 모두 정지 및 배열 초기화
    if (this.activeNodes && this.activeNodes.length > 0) {
      this.activeNodes.forEach(node => {
        if (node) {
          try { if (typeof node.stop === 'function') node.stop(); } catch(e) {}
          try { if (typeof node.disconnect === 'function') node.disconnect(); } catch(e) {}
        }
      });
      this.activeNodes = [];
    }

    // 5) 마스터 게인 즉각 소음 차단
    if (this.audioCtx && this.masterGain) {
      try {
        const now = this.audioCtx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(0, now);
      } catch(e) {}
    }

    // 6) 오디오 컨텍스트 suspend (하드웨어 출력 즉각 프리징)
    if (this.audioCtx && this.audioCtx.state === 'running') {
      try {
        this.audioCtx.suspend();
      } catch(e) {}
    }
  }

  /**
   * 발진기 노드 해제 및 정리
   */
  stopOscillators() {
    if (this.oscL) { try { this.oscL.stop(); } catch(e) {} try { this.oscL.disconnect(); } catch(e) {} this.oscL = null; }
    if (this.oscR) { try { this.oscR.stop(); } catch(e) {} try { this.oscR.disconnect(); } catch(e) {} this.oscR = null; }
    if (this.beatsMerger) { try { this.beatsMerger.disconnect(); } catch(e) {} this.beatsMerger = null; }

    this.clearSolfeggioOscillators();

    if (this.waveLfo) { try { this.waveLfo.stop(); } catch(e) {} try { this.waveLfo.disconnect(); } catch(e) {} this.waveLfo = null; }
    if (this.windLfo) { try { this.windLfo.stop(); } catch(e) {} try { this.windLfo.disconnect(); } catch(e) {} this.windLfo = null; }
    if (this.reedWindLfo) { try { this.reedWindLfo.stop(); } catch(e) {} try { this.reedWindLfo.disconnect(); } catch(e) {} this.reedWindLfo = null; }
    if (this.reedWindLfo2) { try { this.reedWindLfo2.stop(); } catch(e) {} try { this.reedWindLfo2.disconnect(); } catch(e) {} this.reedWindLfo2 = null; }

    this.stopRifeOscillators();
    this.stopVipOscillators();
    this.stopCustomOscillators();
  }

  /**
   * [신규] 사용자 맞춤 생성기 (Custom Studio) 발진기 노드들 정지 및 연결 해제
   */
  stopCustomOscillators() {
    if (this.customNodesA) {
      this.customNodesA.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.customNodesA = [];
    }
    if (this.customNodesB) {
      this.customNodesB.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.customNodesB = [];
    }
    if (this.customOscA) { try { this.customOscA.stop(); } catch(e) {} this.customOscA.disconnect(); this.customOscA = null; }
    if (this.customOscB) { try { this.customOscB.stop(); } catch(e) {} this.customOscB.disconnect(); this.customOscB = null; }
  }

  /**
   * 일반 Rife 테라피 발진기 노드들 정지 및 연결 해제
   */
  stopRifeOscillators() {
    if (this.rifeNodesA) {
      this.rifeNodesA.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.rifeNodesA = [];
    }
    if (this.rifeNodesB) {
      this.rifeNodesB.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.rifeNodesB = [];
    }
    if (this.rifeOscA) { try { this.rifeOscA.stop(); } catch(e) {} this.rifeOscA.disconnect(); this.rifeOscA = null; }
    if (this.rifeOscB) { try { this.rifeOscB.stop(); } catch(e) {} this.rifeOscB.disconnect(); this.rifeOscB = null; }
    this.stopRifeBeats();
    if (this._rifePreFadeTimer) { clearTimeout(this._rifePreFadeTimer); this._rifePreFadeTimer = null; }
    if (this._rifePreFadeOsc) { try { this._rifePreFadeOsc.stop(); } catch(e) {} try { this._rifePreFadeOsc.disconnect(); } catch(e) {} this._rifePreFadeOsc = null; }
    if (this._rifePreFadeGain) { this._rifePreFadeGain.gain.value = 0.0; }
  }

  /**
   * VIP Rife 테라피 발진기 노드들 정지 및 연결 해제
   */
  stopVipOscillators() {
    if (this.vipNodesA) {
      this.vipNodesA.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.vipNodesA = [];
    }
    if (this.vipNodesB) {
      this.vipNodesB.forEach(node => {
        try { if (node.stop) node.stop(); } catch(e) {}
        try { node.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== node);
      });
      this.vipNodesB = [];
    }
    if (this.vipOscA) { try { this.vipOscA.stop(); } catch(e) {} this.vipOscA.disconnect(); this.vipOscA = null; }
    if (this.vipOscB) { try { this.vipOscB.stop(); } catch(e) {} this.vipOscB.disconnect(); this.vipOscB = null; }
    this.stopVipBeats();
    if (this._vipPreFadeTimer) { clearTimeout(this._vipPreFadeTimer); this._vipPreFadeTimer = null; }
    if (this._vipPreFadeOsc) { try { this._vipPreFadeOsc.stop(); } catch(e) {} try { this._vipPreFadeOsc.disconnect(); } catch(e) {} this._vipPreFadeOsc = null; }
    if (this._vipPreFadeGain) { this._vipPreFadeGain.gain.value = 0.0; }
  }

  /**
   * [개선] Rife 전용 저주파 바이노럴 비트 발진기 가동 (216Hz 온음 캐리어 기반)
   */
  startRifeBeats(carrier = 216, beat = 7.83) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const safeCarrier = 216.0;
    const targetBeat = Math.max(0.1, parseFloat(beat) || 7.83);
    
    if (!this.rifeBeatsOscL || !this.rifeBeatsOscR) {
      this.stopRifeBeats();
      
      this.rifeBeatsOscL = this.audioCtx.createOscillator();
      this.rifeBeatsOscL.type = 'sine';
      this.rifeBeatsOscL.frequency.setValueAtTime(safeCarrier, now);
      
      this.rifeBeatsOscR = this.audioCtx.createOscillator();
      this.rifeBeatsOscR.type = 'sine';
      this.rifeBeatsOscR.frequency.setValueAtTime(safeCarrier + targetBeat, now);
      
      this.rifeBeatsMerger = this.audioCtx.createChannelMerger(2);
      this.rifeBeatsOscL.connect(this.rifeBeatsMerger, 0, 0);
      this.rifeBeatsOscR.connect(this.rifeBeatsMerger, 0, 1);
      if (this.rifeBeatsGain) this.rifeBeatsMerger.connect(this.rifeBeatsGain);
      
      this.activeNodes.push(this.rifeBeatsOscL);
      this.activeNodes.push(this.rifeBeatsOscR);
      this.rifeBeatsOscL.start(now);
      this.rifeBeatsOscR.start(now);
    } else {
      try {
        this.rifeBeatsOscL.frequency.cancelScheduledValues(now);
        this.rifeBeatsOscL.frequency.setTargetAtTime(safeCarrier, now, 0.1);
        
        this.rifeBeatsOscR.frequency.cancelScheduledValues(now);
        this.rifeBeatsOscR.frequency.setTargetAtTime(safeCarrier + targetBeat, now, 0.35);
      } catch(e) {}
    }
  }

  /**
   * [개선] Rife 전용 저주파 바이노럴 비트 발진기 정지 (페이드아웃 후 해제)
   */
  stopRifeBeats() {
    if (this.rifeBeatsGain && this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        this.rifeBeatsGain.gain.cancelScheduledValues(now);
        this.rifeBeatsGain.gain.setValueAtTime(0.0001, now);
      } catch(e) {}
    }
    const oscL = this.rifeBeatsOscL;
    const oscR = this.rifeBeatsOscR;
    const merger = this.rifeBeatsMerger;
    this.rifeBeatsOscL = null;
    this.rifeBeatsOscR = null;
    this.rifeBeatsMerger = null;
    
    if (oscL) {
      try { oscL.stop(); } catch(e) {}
      try { oscL.disconnect(); } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== oscL);
    }
    if (oscR) {
      try { oscR.stop(); } catch(e) {}
      try { oscR.disconnect(); } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== oscR);
    }
    if (merger) {
      try { merger.disconnect(); } catch(e) {}
    }
  }

  /**
   * [개선] VIP 전용 저주파 바이노럴 비트 발진기 가동 (216Hz 안정 힐링 캐리어 기반)
   */
  startVipBeats(carrier = 216, beat = 7.83) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const safeCarrier = 216.0;
    const targetBeat = Math.max(0.1, parseFloat(beat) || 7.83);
    
    if (!this.vipBeatsOscL || !this.vipBeatsOscR) {
      this.stopVipBeats();
      
      this.vipBeatsOscL = this.audioCtx.createOscillator();
      this.vipBeatsOscL.type = 'sine';
      this.vipBeatsOscL.frequency.setValueAtTime(safeCarrier, now);
      
      this.vipBeatsOscR = this.audioCtx.createOscillator();
      this.vipBeatsOscR.type = 'sine';
      this.vipBeatsOscR.frequency.setValueAtTime(safeCarrier + targetBeat, now);
      
      this.vipBeatsMerger = this.audioCtx.createChannelMerger(2);
      this.vipBeatsOscL.connect(this.vipBeatsMerger, 0, 0);
      this.vipBeatsOscR.connect(this.vipBeatsMerger, 0, 1);
      if (this.vipBeatsGain) this.vipBeatsMerger.connect(this.vipBeatsGain);
      
      this.activeNodes.push(this.vipBeatsOscL);
      this.activeNodes.push(this.vipBeatsOscR);
      this.vipBeatsOscL.start(now);
      this.vipBeatsOscR.start(now);
    } else {
      try {
        this.vipBeatsOscL.frequency.cancelScheduledValues(now);
        this.vipBeatsOscL.frequency.setTargetAtTime(safeCarrier, now, 0.1);
        
        this.vipBeatsOscR.frequency.cancelScheduledValues(now);
        this.vipBeatsOscR.frequency.setTargetAtTime(safeCarrier + targetBeat, now, 0.35);
      } catch(e) {}
    }
  }

  /**
   * [개선] VIP 전용 저주파 바이노럴 비트 발진기 정지 (페이드아웃 후 해제)
   */
  stopVipBeats() {
    if (this.vipBeatsGain && this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        this.vipBeatsGain.gain.cancelScheduledValues(now);
        this.vipBeatsGain.gain.setValueAtTime(0.0001, now);
      } catch(e) {}
    }
    const oscL = this.vipBeatsOscL;
    const oscR = this.vipBeatsOscR;
    const merger = this.vipBeatsMerger;
    this.vipBeatsOscL = null;
    this.vipBeatsOscR = null;
    this.vipBeatsMerger = null;
    
    if (oscL) {
      try { oscL.stop(); } catch(e) {}
      try { oscL.disconnect(); } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== oscL);
    }
    if (oscR) {
      try { oscR.stop(); } catch(e) {}
      try { oscR.disconnect(); } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== oscR);
    }
    if (merger) {
      try { merger.disconnect(); } catch(e) {}
    }
  }

  /**
   * 일반 Rife 주파수 전환 간격(초) 설정
   */
  setRifeSweepInterval(seconds) {
    const sec = Math.max(5.0, Math.min(1800.0, parseFloat(seconds) || 8.0));
    this.rifeSweepInterval = sec;
    if (this.isPlaying && this.isRifeActive && !this.isRifeHold) {
      if (this.rifeSweepTimer) {
        clearInterval(this.rifeSweepTimer);
        this.rifeSweepTimer = setInterval(() => {
          if (this.triggerNextRifeFrequency) this.triggerNextRifeFrequency();
        }, this.rifeSweepInterval * 1000);
      }
    }
  }

  /**
   * 일반 Rife 주파수 고정(Hold) 모드 설정
   */
  setRifeHold(isHold) {
    const prevHold = this.isRifeHold;
    this.isRifeHold = !!isHold;
    if (this.isRifeHold) {
      if (this.rifeSweepTimer) {
        clearInterval(this.rifeSweepTimer);
        this.rifeSweepTimer = null;
      }
    } else {
      if (prevHold && this.rifeFreqs && this.rifeFreqs.length > 0) {
        this.rifeCycleIndex = (this.rifeCycleIndex + 1) % this.rifeFreqs.length;
      }
      if (this.isPlaying && this.isRifeActive && !this.rifeSweepTimer) {
        this.rifeSweepTimer = setInterval(() => {
          if (this.triggerNextRifeFrequency) this.triggerNextRifeFrequency();
        }, (this.rifeSweepInterval || 8.0) * 1000);
      }
    }
  }

  /**
   * VIP Rife 주파수 전환 간격(초) 설정
   */
  setVipSweepInterval(seconds) {
    const sec = Math.max(5.0, Math.min(1800.0, parseFloat(seconds) || 8.0));
    this.vipSweepInterval = sec;
    if (this.isPlaying && this.isVipActive && !this.isVipHold) {
      if (this.vipSweepTimer) {
        clearInterval(this.vipSweepTimer);
        this.vipSweepTimer = setInterval(() => {
          if (this.triggerNextVipFrequency) this.triggerNextVipFrequency();
        }, this.vipSweepInterval * 1000);
      }
    }
  }

  /**
   * VIP Rife 주파수 고정(Hold) 모드 설정
   */
  setVipHold(isHold) {
    const prevHold = this.isVipHold;
    this.isVipHold = !!isHold;
    if (this.isVipHold) {
      if (this.vipSweepTimer) {
        clearInterval(this.vipSweepTimer);
        this.vipSweepTimer = null;
      }
    } else {
      if (prevHold && this.vipFreqs && this.vipFreqs.length > 0) {
        this.vipCycleIndex = (this.vipCycleIndex + 1) % this.vipFreqs.length;
      }
      if (this.isPlaying && this.isVipActive && !this.vipSweepTimer) {
        this.vipSweepTimer = setInterval(() => {
          if (this.triggerNextVipFrequency) this.triggerNextVipFrequency();
        }, (this.vipSweepInterval || 8.0) * 1000);
      }
    }
  }

  /**
   * 사용자 맞춤 생성기 (Custom Studio) 주파수 전환 간격(초) 설정
   */
  setCustomSweepInterval(seconds) {
    const sec = Math.max(5.0, Math.min(1800.0, parseFloat(seconds) || 180.0));
    this.customSweepInterval = sec;
    if (this.isPlaying && this.isCustomActive && !this.isCustomHold) {
      if (this.customSweepTimer) {
        clearInterval(this.customSweepTimer);
        this.customSweepTimer = setInterval(() => {
          if (this.triggerNextCustomFrequency) this.triggerNextCustomFrequency();
        }, this.customSweepInterval * 1000);
      }
    }
  }

  /**
   * 사용자 맞춤 생성기 (Custom Studio) 주파수 고정(Hold) 모드 설정
   */
  setCustomHold(isHold) {
    const prevHold = this.isCustomHold;
    this.isCustomHold = !!isHold;
    if (this.isCustomHold) {
      if (this.customSweepTimer) {
        clearInterval(this.customSweepTimer);
        this.customSweepTimer = null;
      }
    } else {
      if (prevHold && this.customFreqs && this.customFreqs.length > 0) {
        this.customCycleIndex = (this.customCycleIndex + 1) % this.customFreqs.length;
      }
      if (this.isPlaying && this.isCustomActive && !this.customSweepTimer) {
        this.customSweepTimer = setInterval(() => {
          if (this.triggerNextCustomFrequency) this.triggerNextCustomFrequency();
        }, (this.customSweepInterval || 180.0) * 1000);
      }
    }
  }

  /**
   * 일반 솔라브르 주파수 크로스페이드 순환 루프 기동 (A/B 듀얼 채널 True Ping-Pong Crossfader)
   */
  startRifeFrequencySweep(startIndex = null) {
    if (this.rifeSweepTimer) {
      clearInterval(this.rifeSweepTimer);
      this.rifeSweepTimer = null;
    }
    this.stopRifeOscillators();
    
    if (startIndex !== null && typeof startIndex === 'number' && startIndex >= 0) {
      this.rifeCycleIndex = startIndex;
    } else {
      this.rifeCycleIndex = 0;
    }
    this.rifeActiveChannel = 'A';
    
    if (this.rifeGainA && this.audioCtx) this.rifeGainA.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    if (this.rifeGainB && this.audioCtx) this.rifeGainB.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    
    this.triggerNextRifeFrequency = () => {
      if (!this.isPlaying || !this.isRifeActive) return;
      if (!this.rifeFreqs || this.rifeFreqs.length === 0) return;
      if (!this.audioCtx) return;
      
      const now = this.audioCtx.currentTime;
      const targetFreq = parseFloat(this.rifeFreqs[this.rifeCycleIndex]);
      const crossfadeDuration = Math.min(3.0, (this.rifeSweepInterval || 8.0) * 0.35);
      const targetGain = this.computePerceptualGain(targetFreq);
      
      const nextChan = (this.rifeActiveChannel === 'A') ? 'B' : 'A';
      const activeGainNode = (nextChan === 'A') ? this.rifeGainA : this.rifeGainB;
      const inactiveGainNode = (nextChan === 'A') ? this.rifeGainB : this.rifeGainA;
      
      // 4단계 지능형 음향 합성 엔진을 통해 전 대역 완벽 가청 보이스 생성
      const voiceGraph = this.createSynthesisVoiceNodes(this.audioCtx, targetFreq, activeGainNode, now);
      const newNodes = voiceGraph.allNodes;
      voiceGraph.activeNodes.forEach(node => this.activeNodes.push(node));
      
      if (nextChan === 'A') this.rifeNodesA = newNodes;
      else this.rifeNodesB = newNodes;
      
      activeGainNode.gain.cancelScheduledValues(now);
      activeGainNode.gain.setValueAtTime(0.0001, now);
      activeGainNode.gain.linearRampToValueAtTime(targetGain, now + crossfadeDuration);
      
      inactiveGainNode.gain.cancelScheduledValues(now);
      inactiveGainNode.gain.setValueAtTime(Math.max(0.0001, inactiveGainNode.gain.value), now);
      inactiveGainNode.gain.linearRampToValueAtTime(0.0001, now + crossfadeDuration);
      
      const oldNodes = (nextChan === 'A') ? this.rifeNodesB : this.rifeNodesA;
      setTimeout(() => {
        if (oldNodes && oldNodes.length > 0) {
          oldNodes.forEach(node => {
            try { if (node.stop) node.stop(); } catch(e) {}
            try { node.disconnect(); } catch(e) {}
            this.activeNodes = this.activeNodes.filter(n => n !== node);
          });
        }
      }, (crossfadeDuration + 0.5) * 1000);
      
      if (nextChan === 'A') this.rifeNodesB = [];
      else this.rifeNodesA = [];
      
      this.rifeActiveChannel = nextChan;
      
      if (this.onRifeFrequencyChange) {
        try { this.onRifeFrequencyChange(this.rifeCycleIndex, targetFreq); } catch(e) {}
      }
      if (this.onFrequencyChange) {
        try { this.onFrequencyChange(this.rifeCycleIndex, targetFreq); } catch(e) {}
      }
      
      if (!this.isRifeHold) {
        this.rifeCycleIndex = (this.rifeCycleIndex + 1) % this.rifeFreqs.length;
      }
    };
    
    this.triggerNextRifeFrequency();
    if (!this.isRifeHold) {
      this.rifeSweepTimer = setInterval(() => {
        if (this.triggerNextRifeFrequency) this.triggerNextRifeFrequency();
      }, (this.rifeSweepInterval || 8.0) * 1000);
    }
  }

  /**
   * VIP 솔라브르 주파수 스윕 루프 기동 (A/B 듀얼 채널 True Ping-Pong Crossfader)
   */
  startVipFrequencySweep(startIndex = null) {
    if (this.vipSweepTimer) {
      clearInterval(this.vipSweepTimer);
      this.vipSweepTimer = null;
    }
    this.stopVipOscillators();
    
    if (startIndex !== null && typeof startIndex === 'number' && startIndex >= 0) {
      this.vipCycleIndex = startIndex;
    } else {
      this.vipCycleIndex = 0;
    }
    this.vipActiveChannel = 'A';
    
    if (this.vipGainA && this.audioCtx) this.vipGainA.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    if (this.vipGainB && this.audioCtx) this.vipGainB.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    
    this.triggerNextVipFrequency = () => {
      if (!this.isPlaying || !this.isVipActive) return;
      if (!this.vipFreqs || this.vipFreqs.length === 0) return;
      if (!this.audioCtx) return;
      
      const now = this.audioCtx.currentTime;
      const targetFreq = parseFloat(this.vipFreqs[this.vipCycleIndex]);
      const crossfadeDuration = Math.min(3.0, (this.vipSweepInterval || 8.0) * 0.35);
      const targetGain = this.computePerceptualGain(targetFreq);
      
      const nextChan = (this.vipActiveChannel === 'A') ? 'B' : 'A';
      const activeGainNode = (nextChan === 'A') ? this.vipGainA : this.vipGainB;
      const inactiveGainNode = (nextChan === 'A') ? this.vipGainB : this.vipGainA;
      
      // 4단계 지능형 음향 합성 엔진을 통해 전 대역 완벽 가청 보이스 생성
      const voiceGraph = this.createSynthesisVoiceNodes(this.audioCtx, targetFreq, activeGainNode, now);
      const newNodes = voiceGraph.allNodes;
      voiceGraph.activeNodes.forEach(node => this.activeNodes.push(node));
      
      if (nextChan === 'A') this.vipNodesA = newNodes;
      else this.vipNodesB = newNodes;
      
      activeGainNode.gain.cancelScheduledValues(now);
      activeGainNode.gain.setValueAtTime(0.0001, now);
      activeGainNode.gain.linearRampToValueAtTime(targetGain, now + crossfadeDuration);
      
      inactiveGainNode.gain.cancelScheduledValues(now);
      inactiveGainNode.gain.setValueAtTime(Math.max(0.0001, inactiveGainNode.gain.value), now);
      inactiveGainNode.gain.linearRampToValueAtTime(0.0001, now + crossfadeDuration);
      
      const oldNodes = (nextChan === 'A') ? this.vipNodesB : this.vipNodesA;
      setTimeout(() => {
        if (oldNodes && oldNodes.length > 0) {
          oldNodes.forEach(node => {
            try { if (node.stop) node.stop(); } catch(e) {}
            try { node.disconnect(); } catch(e) {}
            this.activeNodes = this.activeNodes.filter(n => n !== node);
          });
        }
      }, (crossfadeDuration + 0.5) * 1000);
      
      if (nextChan === 'A') this.vipNodesB = [];
      else this.vipNodesA = [];
      
      this.vipActiveChannel = nextChan;
      
      if (this.onVipFrequencyChange) {
        try { this.onVipFrequencyChange(this.vipCycleIndex, targetFreq); } catch(e) {}
      }
      
      if (!this.isVipHold) {
        this.vipCycleIndex = (this.vipCycleIndex + 1) % this.vipFreqs.length;
      }
    };
    
    this.triggerNextVipFrequency();
    if (!this.isVipHold) {
      this.vipSweepTimer = setInterval(() => {
        if (this.triggerNextVipFrequency) this.triggerNextVipFrequency();
      }, (this.vipSweepInterval || 8.0) * 1000);
    }
  }

  /**
   * 사용자가 [VIP] Rife 타임라인 노드를 클릭했을 때 해당 주파수로 즉시 교차 점프 (클릭 프리 크로스페이드)
   */
  jumpToVipFrequencyIndex(index) {
    if (!this.isPlaying || index < 0 || index >= this.vipFreqs.length) return;
    if (this.vipSweepTimer) {
      clearInterval(this.vipSweepTimer);
      this.vipSweepTimer = null;
    }
    this.startVipFrequencySweep(index);
  }

  /**
   * 사용자가 일반 Rife 타임라인 노드를 클릭했을 때 해당 주파수로 즉시 교차 점프 (클릭 프리 크로스페이드)
   */
  jumpToRifeFrequencyIndex(index) {
    if (!this.isPlaying || index < 0 || index >= this.rifeFreqs.length) return;
    if (this.rifeSweepTimer) {
      clearInterval(this.rifeSweepTimer);
      this.rifeSweepTimer = null;
    }
    this.startRifeFrequencySweep(index);
  }

  /**
   * 사용자 맞춤 생성기 (Custom Studio) 주파수 스윕 루프 기동 (A/B 듀얼 채널 True Ping-Pong Crossfader)
   */
  startCustomFrequencySweep(startIndex = null) {
    if (this.customSweepTimer) {
      clearInterval(this.customSweepTimer);
      this.customSweepTimer = null;
    }
    this.stopCustomOscillators();
    
    if (startIndex !== null && typeof startIndex === 'number' && startIndex >= 0) {
      this.customCycleIndex = startIndex;
    } else {
      this.customCycleIndex = 0;
    }
    this.customActiveChannel = 'A';
    
    if (this.customGainA && this.audioCtx) this.customGainA.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    if (this.customGainB && this.audioCtx) this.customGainB.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    
    this.triggerNextCustomFrequency = () => {
      if (!this.isPlaying || !this.isCustomActive) return;
      if (!this.customFreqs || this.customFreqs.length === 0) return;
      if (!this.audioCtx) return;
      
      const now = this.audioCtx.currentTime;
      const targetFreq = parseFloat(this.customFreqs[this.customCycleIndex]);
      const crossfadeDuration = Math.min(3.0, (this.customSweepInterval || 180.0) * 0.35);
      const targetGain = this.computePerceptualGain(targetFreq);
      
      const nextChan = (this.customActiveChannel === 'A') ? 'B' : 'A';
      const activeGainNode = (nextChan === 'A') ? this.customGainA : this.customGainB;
      const inactiveGainNode = (nextChan === 'A') ? this.customGainB : this.customGainA;
      
      // 4단계 지능형 음향 합성 엔진을 통해 전 대역 완벽 가청 보이스 생성
      const voiceGraph = this.createSynthesisVoiceNodes(this.audioCtx, targetFreq, activeGainNode, now);
      const newNodes = voiceGraph.allNodes;
      voiceGraph.activeNodes.forEach(node => this.activeNodes.push(node));
      
      if (nextChan === 'A') this.customNodesA = newNodes;
      else this.customNodesB = newNodes;
      
      activeGainNode.gain.cancelScheduledValues(now);
      activeGainNode.gain.setValueAtTime(0.0001, now);
      activeGainNode.gain.linearRampToValueAtTime(targetGain, now + crossfadeDuration);
      
      inactiveGainNode.gain.cancelScheduledValues(now);
      inactiveGainNode.gain.setValueAtTime(Math.max(0.0001, inactiveGainNode.gain.value), now);
      inactiveGainNode.gain.linearRampToValueAtTime(0.0001, now + crossfadeDuration);
      
      const oldNodes = (nextChan === 'A') ? this.customNodesB : this.customNodesA;
      setTimeout(() => {
        if (oldNodes && oldNodes.length > 0) {
          oldNodes.forEach(node => {
            try { if (node.stop) node.stop(); } catch(e) {}
            try { node.disconnect(); } catch(e) {}
            this.activeNodes = this.activeNodes.filter(n => n !== node);
          });
        }
      }, (crossfadeDuration + 0.5) * 1000);
      
      if (nextChan === 'A') this.customNodesB = [];
      else this.customNodesA = [];
      
      this.customActiveChannel = nextChan;
      
      if (this.onCustomFrequencyChange) {
        try { this.onCustomFrequencyChange(this.customCycleIndex, targetFreq); } catch(e) {}
      }
      
      if (!this.isCustomHold) {
        this.customCycleIndex = (this.customCycleIndex + 1) % this.customFreqs.length;
      }
    };
    
    this.triggerNextCustomFrequency();
    if (!this.isCustomHold) {
      this.customSweepTimer = setInterval(() => {
        if (this.triggerNextCustomFrequency) this.triggerNextCustomFrequency();
      }, (this.customSweepInterval || 180.0) * 1000);
    }
  }

  /**
   * 사용자가 [Custom] 타임라인 노드를 클릭했을 때 해당 주파수로 즉시 교차 점프 (클릭 프리 크로스페이드)
   */
  jumpToCustomFrequencyIndex(index) {
    if (!this.isPlaying || index < 0 || index >= this.customFreqs.length) return;
    if (this.customSweepTimer) {
      clearInterval(this.customSweepTimer);
      this.customSweepTimer = null;
    }
    this.startCustomFrequencySweep(index);
  }

  /**
   * 단일 주파수 즉시 미리듣기 (1.8초 단기 트리거)
   */
  previewSingleFrequency(freq, duration = 1.8) {
    this.init();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    const f = parseFloat(freq);
    if (isNaN(f) || f <= 0 || !this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const prevGain = this.audioCtx.createGain();
    prevGain.gain.setValueAtTime(0.0001, now);
    prevGain.gain.linearRampToValueAtTime(0.35 * this.computePerceptualGain(f), now + 0.1);
    prevGain.gain.setValueAtTime(0.35 * this.computePerceptualGain(f), now + duration - 0.2);
    prevGain.gain.linearRampToValueAtTime(0.0001, now + duration);
    prevGain.connect(this.masterGain || this.audioCtx.destination);
    
    const voice = this.createSynthesisVoiceNodes(this.audioCtx, f, prevGain, now, now + duration);
    setTimeout(() => {
      try {
        if (voice && voice.allNodes) {
          voice.allNodes.forEach(n => {
            try { if (n.stop) n.stop(); } catch(e) {}
            try { n.disconnect(); } catch(e) {}
          });
        }
        prevGain.disconnect();
      } catch(e) {}
    }, (duration + 0.3) * 1000);
  }

  /**
   * 구동 중인 소스 노드 정리
   */
  /* Rain Sound Management Methods */
  getOrCreateRainAudio(trackId) {
    if (!this.rainAudioElements) this.rainAudioElements = {};
    if (!this.rainAudioElements[trackId]) {
      const fileName = this.rainFiles[trackId];
      if (!fileName) return null;
      const audio = new Audio(`./sounds/rain/${fileName}`);
      audio.loop = true;
      audio.preload = 'auto';
      this.rainAudioElements[trackId] = audio;
    }
    return this.rainAudioElements[trackId];
  }

  preloadRainBuffers() {
    if (!this.rainTracks) return;
    for (const trackId of this.rainTracks) {
      this.getOrCreateRainAudio(trackId);
    }
  }

  updateRainTrackVolume(trackId) {
    if (!this.rainAudioElements) return;
    const audio = this.rainAudioElements[trackId];
    if (!audio) return;
    if (this.isMuted) {
      audio.volume = 0;
      return;
    }
    const individualVol = (this.rainVolumeSettings && this.rainVolumeSettings[trackId]) ? this.rainVolumeSettings[trackId] : 0;
    const effective = Math.max(0, Math.min(1, individualVol * (this.natureMasterVolume || 1.0) * (this.masterVolume || 1.0)));
    audio.volume = effective;
  }

  updateAllRainVolumes() {
    if (!this.rainTracks) return;
    for (const trackId of this.rainTracks) {
      this.updateRainTrackVolume(trackId);
    }
  }

  startRainTrack(trackId) {
    const vol = (this.rainVolumeSettings && this.rainVolumeSettings[trackId]) ? this.rainVolumeSettings[trackId] : 0;
    if (vol <= 0.001) return;
    if (!this.isPlaying || !this.isNatureActive) return;

    const audio = this.getOrCreateRainAudio(trackId);
    if (!audio) return;

    this.updateRainTrackVolume(trackId);
    if (audio.paused) {
      const p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    }
  }

  stopRainTrack(trackId) {
    if (!this.rainAudioElements) return;
    const audio = this.rainAudioElements[trackId];
    if (audio && !audio.paused) {
      audio.pause();
    }
  }

  setRainTrackVolume(trackId, val) {
    if (!this.rainVolumeSettings) this.rainVolumeSettings = {};
    this.rainVolumeSettings[trackId] = val;

    if (val <= 0.001) {
      this.stopRainTrack(trackId);
    } else {
      if (this.isPlaying && this.isNatureActive) {
        this.startRainTrack(trackId);
      }
      this.updateRainTrackVolume(trackId);
    }
  }

  stopNoiseSources() {
    for (const key in this.natureSources) {
      if (this.natureSources[key]) {
        try { this.natureSources[key].stop(); } catch(e) {}
        this.natureSources[key].disconnect();
        this.natureSources[key] = null;
      }
    }
    this.natureSources = {};
    if (this.rainTracks) {
      for (const trackId of this.rainTracks) {
        this.stopRainTrack(trackId);
      }
    }
  }

  /**
   * 갈매기소리 주기적 자동 트리거 루프 (한 번 울릴 때 3번 연속 울도록 핫픽스 적용)
   */
  triggerSeagullLoop() {
    const playSeagull = () => {
      // 재생 중이 아니거나 자연음 믹서가 비활성화 상태이면 스킵
      if (!this.isPlaying || !this.isNatureActive) return;
      const currentVol = this.natureGains.seagull.gain.value;
      if (currentVol <= 0.01) return;
      
      const now = this.audioCtx.currentTime;
      const baseFreq = 800 + Math.random() * 150; // 기본 주파수 랜덤 기복
      
      // 3번 연속으로 시차를 두고 울도록 호출 (0초, 0.45초, 0.95초)
      this.playSingleCawRife(baseFreq, currentVol, now);
      this.playSingleCawRife(baseFreq * 0.95, currentVol, now + 0.45);
      this.playSingleCawRife(baseFreq * 0.9, currentVol, now + 0.95);
    };
    
    this.seagullTimer = setInterval(() => {
      if (Math.random() > 0.4) playSeagull();
    }, 8000);
  }

  /**
   * Rife 엔진용 갈매기 1회 울음소리 합성 및 재생
   */
  playSingleCawRife(frequency, volume, startTime) {
    if (!this.audioCtx) return;
    
    const osc = this.audioCtx.createOscillator();
    osc.type = 'triangle';
    
    const volumeNode = this.audioCtx.createGain();
    volumeNode.gain.setValueAtTime(0, startTime);
    volumeNode.gain.linearRampToValueAtTime(volume * 1.0, startTime + 0.08); 
    volumeNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
    
    osc.frequency.setValueAtTime(frequency, startTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, startTime + 0.12);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.1, startTime + 0.35);
    
    osc.connect(volumeNode);
    volumeNode.connect(this.natureGains.seagull);
    
    osc.start(startTime);
    osc.stop(startTime + 0.4);

    // 가비지 컬렉션(GC)을 위한 연결 해제 예약
    osc.onended = () => {
      try { osc.disconnect(); } catch(e) {}
      try { volumeNode.disconnect(); } catch(e) {}
    };
  }

  /**
   * 싱잉볼 타격 및 공명 오버톤 루프
   */
  triggerSingingBowlLoop() {
    const strikeBowl = () => {
      // 재생 중이 아니거나 자연음 믹서가 비활성화 상태이면 스킵
      if (!this.isPlaying || !this.isNatureActive) return;
      const currentVol = this.natureGains.singingbowl.gain.value;
      if (currentVol <= 0.01) return;
      
      const now = this.audioCtx.currentTime;
      const freqs = [160, 242, 321, 483, 642, 804];
      const gains = [0.8, 0.5, 0.4, 0.25, 0.12, 0.08];
      
      freqs.forEach((freq, index) => {
        const osc = this.audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        const wobble = this.audioCtx.createOscillator();
        wobble.frequency.value = 0.5 + Math.random() * 0.5;
        
        const wobbleGain = this.audioCtx.createGain();
        wobbleGain.gain.value = 1.2;
        wobble.connect(wobbleGain);
        wobbleGain.connect(osc.frequency);
        wobble.start(now);
        wobble.stop(now + 12.0);
        
        const gainNode = this.audioCtx.createGain();
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(gains[index] * currentVol * 1.0, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 10.0);
        
        osc.connect(gainNode);
        gainNode.connect(this.natureGains.singingbowl);
        
        osc.start(now);
        osc.stop(now + 12.0);

        // 가비지 컬렉션(GC)을 위한 연결 해제 예약
        osc.onended = () => {
          try { osc.disconnect(); } catch(e) {}
          try { wobble.disconnect(); } catch(e) {}
          try { wobbleGain.disconnect(); } catch(e) {}
          try { gainNode.disconnect(); } catch(e) {}
        };
      });
    };
    
    strikeBowl();
    this.singingBowlTimer = setInterval(strikeBowl, 13000);
  }

  /**
   * 숲 속의 새소리 주기적 자동 트리거 루프
   */
  triggerForestBirdsLoop() {
    // ══════════════════════════════════════════════════════════════
    // [ASMR] 깊은 숲의 새소리 (Deep Forest Birds)
    //   숲 속의 새소리 + 수면 뻐꾸기 통합 ASMR 업그레이드
    //   1. 짹짹이 (작은새 합창) — 2500~3500Hz 짧은 짹짹
    //   2. 꾀꼬리 — 1800~2200Hz 리드미컬한 노래
    //   3. 박새 — 3500~4000Hz 투명한 찌-찌-찌
    //   4. 딱따구리 — 800~1200Hz 톡톡톡 리듬
    //   5. 물총새 — 2800~3200Hz 날카로운 "찌익"
    //   6. 뻐꾸기 — 500~600Hz "뻐-꾹" (수면 유도)
    //   + 숲 잔향 (딜레이 리버브)
    //   + 나뭇잎 바스락 + 시냇물 배경
    // ══════════════════════════════════════════════════════════════
    
    if (this.forestBirdsTimer) { clearInterval(this.forestBirdsTimer); this.forestBirdsTimer = null; }
    if (this._forestTimers) {
      this._forestTimers.forEach(t => clearTimeout(t));
      this._forestTimers = [];
    }
    
    // ── 숲 잔향 리버브 (딜레이 + 피드백) ──
    if (!this._forestReverbDelay && this.audioCtx) {
      this._forestReverbDelay = this.audioCtx.createDelay(0.8);
      this._forestReverbDelay.delayTime.value = 0.22; // 숲 에코: 0.22초 (산보다 짧음)
      
      this._forestReverbFeedback = this.audioCtx.createGain();
      this._forestReverbFeedback.gain.value = 0.2; // 피드백 20%
      
      this._forestReverbFilter = this.audioCtx.createBiquadFilter();
      this._forestReverbFilter.type = 'lowpass';
      this._forestReverbFilter.frequency.value = 2500; // 숲은 고음이 더 흡수됨
      this._forestReverbFilter.Q.value = 0.4;
      
      this._forestReverbGain = this.audioCtx.createGain();
      this._forestReverbGain.gain.value = 0.25;
      
      this._forestReverbDelay.connect(this._forestReverbFilter);
      this._forestReverbFilter.connect(this._forestReverbFeedback);
      this._forestReverbFeedback.connect(this._forestReverbDelay);
      this._forestReverbFilter.connect(this._forestReverbGain);
      this._forestReverbGain.connect(this.natureGains.forestbirds);
    }
    
    // ── 나뭇잎 + 시냇물 배경 ──
    if (!this._forestBgSource && this.pinkNoiseBuffer) {
      // 나뭇잎 (핑크 노이즈 + 밴드패스)
      const leafSrc = this.audioCtx.createBufferSource();
      leafSrc.buffer = this.pinkNoiseBuffer;
      leafSrc.loop = true;
      
      const leafBpf = this.audioCtx.createBiquadFilter();
      leafBpf.type = 'bandpass';
      leafBpf.frequency.value = 2000;
      leafBpf.Q.value = 0.6;
      
      const leafLfo = this.audioCtx.createOscillator();
      leafLfo.type = 'sine';
      leafLfo.frequency.value = 0.12; // 숲 바람은 산보다 빠름
      
      const leafLfoGain = this.audioCtx.createGain();
      leafLfoGain.gain.value = 0.008;
      
      const leafGain = this.audioCtx.createGain();
      leafGain.gain.value = 0.025; // 나뭇잎 2.5%
      
      leafLfo.connect(leafLfoGain);
      leafLfoGain.connect(leafGain.gain);
      
      leafSrc.connect(leafBpf);
      leafBpf.connect(leafGain);
      leafGain.connect(this.natureGains.forestbirds);
      
      leafSrc.start();
      leafLfo.start();
      
      this._forestBgSource = leafSrc;
      this._forestBgLfo = leafLfo;
      this._forestBgGain = leafGain;
      this._forestBgBpf = leafBpf;
    }
    
    // 시냇물 배경 (브라운 노이즈 + 밴드패스 800~2000Hz)
    if (!this._forestStreamSource && this.brownNoiseBuffer) {
      const streamSrc = this.audioCtx.createBufferSource();
      streamSrc.buffer = this.brownNoiseBuffer;
      streamSrc.loop = true;
      
      const streamBpf = this.audioCtx.createBiquadFilter();
      streamBpf.type = 'bandpass';
      streamBpf.frequency.value = 1400;
      streamBpf.Q.value = 0.5;
      
      const streamGain = this.audioCtx.createGain();
      streamGain.gain.value = 0.015; // 시냇물 1.5% (아주 미세)
      
      streamSrc.connect(streamBpf);
      streamBpf.connect(streamGain);
      streamGain.connect(this.natureGains.forestbirds);
      streamSrc.start();
      
      this._forestStreamSource = streamSrc;
      this._forestStreamGain = streamGain;
      this._forestStreamBpf = streamBpf;
    }
    
    this._forestTimers = [];
    
    // ── 배음 포함 새소리 합성 헬퍼 ──
    const playTone = (startTime, duration, freqStart, freqEnd, pan, volScale, attackRatio = 0.15) => {
      const currentVol = this.natureGains.forestbirds.gain.value;
      if (currentVol <= 0.01) return;
      
      const osc = this.audioCtx.createOscillator();
      osc.type = 'sine';
      
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = 'sine';
      const g2 = this.audioCtx.createGain();
      g2.gain.setValueAtTime(0.25, startTime);
      
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, startTime);
      
      const vol = this.audioCtx.createGain();
      vol.gain.setValueAtTime(0, startTime);
      const peakVol = currentVol * 0.25 * volScale;
      const attackTime = duration * attackRatio;
      vol.gain.linearRampToValueAtTime(peakVol, startTime + attackTime);
      vol.gain.setValueAtTime(peakVol, startTime + duration - 0.03);
      vol.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.frequency.setValueAtTime(freqStart, startTime);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, startTime + duration);
      osc2.frequency.setValueAtTime(freqStart * 2, startTime);
      osc2.frequency.exponentialRampToValueAtTime(freqEnd * 2, startTime + duration);
      
      const mix = this.audioCtx.createGain();
      mix.gain.value = 1.0;
      osc.connect(mix);
      osc2.connect(g2);
      g2.connect(mix);
      mix.connect(panner);
      panner.connect(vol);
      vol.connect(this.natureGains.forestbirds);
      
      // 숲 잔향
      let rs = null;
      if (this._forestReverbDelay) {
        rs = this.audioCtx.createGain();
        rs.gain.value = volScale > 0.6 ? 0.12 : 0.28;
        vol.connect(rs);
        rs.connect(this._forestReverbDelay);
      }
      
      osc.start(startTime);
      osc2.start(startTime);
      osc.stop(startTime + duration + 0.05);
      osc2.stop(startTime + duration + 0.05);

      // GC 자원 해제
      osc.onended = () => {
        try { osc.disconnect(); } catch(e) {}
        try { osc2.disconnect(); } catch(e) {}
        try { g2.disconnect(); } catch(e) {}
        try { mix.disconnect(); } catch(e) {}
        try { panner.disconnect(); } catch(e) {}
        try { vol.disconnect(); } catch(e) {}
        if (rs) { try { rs.disconnect(); } catch(e) {} }
      };
    };
    
    // ── 새 1: 짹짹이 (Chirping Warbler) ──
    // 2500~3500Hz, 빠른 짧은 짹짹 3~5회
    const playChirper = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      if (this.natureVolumeSettings.forestbirds > 0.01) {
        const now = this.audioCtx.currentTime;
        const count = 3 + Math.floor(Math.random() * 3);
        const baseF = 2500 + Math.random() * 1000;
        const pan = -0.6 + Math.random() * 1.2;
        
        for (let i = 0; i < count; i++) {
          const t = now + i * (0.12 + Math.random() * 0.06);
          const dur = 0.06 + Math.random() * 0.04;
          playTone(t, dur, baseF, baseF * (1.1 + Math.random() * 0.3), pan, 0.7, 0.1);
        }
      }
      
      const nextDelay = 3000 + Math.random() * 4000; // 약 5초 평균
      this._forestTimers.push(setTimeout(playChirper, nextDelay));
    };
    
    // ── 새 2: 꾀꼬리 (Forest Oriole) ──
    // 1800~2200Hz, 부드러운 멜로디 하강음
    const playForestOriole = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      if (this.natureVolumeSettings.forestbirds > 0.01) {
        const now = this.audioCtx.currentTime;
        const baseF = 1800 + Math.random() * 400;
        const pan = -0.4 + Math.random() * 0.8;
        const dur = 0.3 + Math.random() * 0.15;
        
        // 트릴 LFO 포함
        const osc = this.audioCtx.createOscillator();
        osc.type = 'sine';
        const lfo = this.audioCtx.createOscillator();
        lfo.frequency.setValueAtTime(12 + Math.random() * 6, now);
        const lfoG = this.audioCtx.createGain();
        lfoG.gain.setValueAtTime(60, now);
        lfo.connect(lfoG);
        lfoG.connect(osc.frequency);
        
        const osc2 = this.audioCtx.createOscillator();
        osc2.type = 'sine';
        const g2 = this.audioCtx.createGain();
        g2.gain.setValueAtTime(0.2, now);
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, now);
        const currentVol = this.natureVolumeSettings.forestbirds;
        const vol = this.audioCtx.createGain();
        vol.gain.setValueAtTime(0, now);
        vol.gain.linearRampToValueAtTime(currentVol * 0.22, now + 0.04);
        vol.gain.setValueAtTime(currentVol * 0.22, now + dur - 0.05);
        vol.gain.exponentialRampToValueAtTime(0.001, now + dur);
        
        osc.frequency.setValueAtTime(baseF, now);
        osc.frequency.linearRampToValueAtTime(baseF * 0.82, now + dur);
        osc2.frequency.setValueAtTime(baseF * 2, now);
        osc2.frequency.linearRampToValueAtTime(baseF * 1.64, now + dur);
        
        const mix = this.audioCtx.createGain();
        mix.gain.value = 1.0;
        osc.connect(mix);
        osc2.connect(g2);
        g2.connect(mix);
        mix.connect(panner);
        panner.connect(vol);
        vol.connect(this.natureGains.forestbirds);
        
        let rs = null;
        if (this._forestReverbDelay) {
          rs = this.audioCtx.createGain();
          rs.gain.value = 0.2;
          vol.connect(rs);
          rs.connect(this._forestReverbDelay);
        }
        lfo.start(now);
        osc.start(now);
        osc2.start(now);
        lfo.stop(now + dur);
        osc.stop(now + dur + 0.05);
        osc2.stop(now + dur + 0.05);

        // GC 자원 해제
        osc.onended = () => {
          try { osc.disconnect(); } catch(e) {}
          try { lfo.disconnect(); } catch(e) {}
          try { lfoG.disconnect(); } catch(e) {}
          try { osc2.disconnect(); } catch(e) {}
          try { g2.disconnect(); } catch(e) {}
          try { mix.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { vol.disconnect(); } catch(e) {}
          if (rs) { try { rs.disconnect(); } catch(e) {} }
        };
      }
      
      const nextDelay = 4000 + Math.random() * 4000; // 약 6초 평균
      this._forestTimers.push(setTimeout(playForestOriole, nextDelay));
    };
    
    // ── 새 3: 박새 (Forest Titmouse) ──
    // 3500~4000Hz, 투명한 찌-찌-찌 3회
    const playForestTitmouse = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      if (this.natureVolumeSettings.forestbirds > 0.01) {
        const now = this.audioCtx.currentTime;
        const baseF = 3500 + Math.random() * 500;
        const pan = 0.3 + Math.random() * 0.6;
        
        for (let j = 0; j < 3; j++) {
          playTone(now + j * 0.1, 0.05, baseF, baseF * 1.06, pan, 0.55, 0.15);
        }
      }
      
      const nextDelay = 3000 + Math.random() * 4000; // 약 5초 평균
      this._forestTimers.push(setTimeout(playForestTitmouse, nextDelay));
    };
    
    // ── 새 4: 딱따구리 (Woodpecker) ──
    // 800~1200Hz, 빠른 톡톡톡 4~6회 드러밍
    const playWoodpecker = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      if (this.natureVolumeSettings.forestbirds > 0.01) {
        const now = this.audioCtx.currentTime;
        const count = 4 + Math.floor(Math.random() * 3);
        const baseF = 800 + Math.random() * 400;
        const pan = -0.7 + Math.random() * 0.4;
        
        for (let j = 0; j < count; j++) {
          const t = now + j * 0.065;
          // 짧고 날카로운 충격음 (급 하강)
          playTone(t, 0.025, baseF * 1.5, baseF * 0.6, pan, 0.35, 0.05);
        }
      }
      
      const nextDelay = 4000 + Math.random() * 3000; // 약 5.5초 평균
      this._forestTimers.push(setTimeout(playWoodpecker, nextDelay));
    };
    
    // ── 새 5: 물총새 (Kingfisher) ──
    // 2800~3200Hz, 날카로운 "찌익" 단발~2발
    const playKingfisher = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      if (this.natureVolumeSettings.forestbirds > 0.01) {
        const now = this.audioCtx.currentTime;
        const shots = 1 + Math.floor(Math.random() * 2);
        const baseF = 2800 + Math.random() * 400;
        const pan = 0.5 + Math.random() * 0.4;
        
        for (let j = 0; j < shots; j++) {
          playTone(now + j * 0.35, 0.12, baseF * 1.2, baseF * 0.85, pan, 0.6, 0.08);
        }
      }
      
      const nextDelay = 3500 + Math.random() * 4000; // 약 5.5초 평균
      this._forestTimers.push(setTimeout(playKingfisher, nextDelay));
    };
    
    // ── 새 6: 뻐꾸기 (Cuckoo — 수면 유도) ──
    // 500~600Hz, "뻐-꾹" 2음 패턴, 2회 반복, 간헐적
    const playCuckoo = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      const currentVol = this.natureVolumeSettings.forestbirds;
      if (currentVol > 0.01) {
        const now = this.audioCtx.currentTime;
        const baseFreq = 520 + Math.random() * 40;
        const pan = -0.2 + Math.random() * 0.4; // 중앙 부근
        
        const playSingleCuckoo = (startTime) => {
          // "뻐" (높은 음)
          const osc1 = this.audioCtx.createOscillator();
          osc1.type = 'sine';
          const h1 = this.audioCtx.createOscillator();
          h1.type = 'sine';
          const hg1 = this.audioCtx.createGain();
          hg1.gain.setValueAtTime(0.15, startTime);
          
          const pan1 = this.audioCtx.createStereoPanner();
          pan1.pan.setValueAtTime(pan, startTime);
          
          const vol1 = this.audioCtx.createGain();
          vol1.gain.setValueAtTime(0, startTime);
          vol1.gain.linearRampToValueAtTime(currentVol * 0.6, startTime + 0.06);
          vol1.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
          
          osc1.frequency.setValueAtTime(baseFreq * 1.25, startTime);
          osc1.frequency.linearRampToValueAtTime(baseFreq * 1.22, startTime + 0.25);
          h1.frequency.setValueAtTime(baseFreq * 2.5, startTime);
          h1.frequency.linearRampToValueAtTime(baseFreq * 2.44, startTime + 0.25);
          
          const mix1 = this.audioCtx.createGain();
          mix1.gain.value = 1.0;
          osc1.connect(mix1);
          h1.connect(hg1);
          hg1.connect(mix1);
          mix1.connect(pan1);
          pan1.connect(vol1);
          vol1.connect(this.natureGains.forestbirds);
          
          let rs1 = null;
          if (this._forestReverbDelay) {
            rs1 = this.audioCtx.createGain();
            rs1.gain.value = 0.3; // 뻐꾸기는 멀리서 울림
            vol1.connect(rs1);
            rs1.connect(this._forestReverbDelay);
          }
          
          osc1.start(startTime);
          h1.start(startTime);
          osc1.stop(startTime + 0.32);
          h1.stop(startTime + 0.32);

          // GC 자원 해제
          osc1.onended = () => {
            try { osc1.disconnect(); } catch(e) {}
            try { h1.disconnect(); } catch(e) {}
            try { hg1.disconnect(); } catch(e) {}
            try { mix1.disconnect(); } catch(e) {}
            try { pan1.disconnect(); } catch(e) {}
            try { vol1.disconnect(); } catch(e) {}
            if (rs1) { try { rs1.disconnect(); } catch(e) {} }
          };
          
          // "꾹" (낮은 음)
          const start2 = startTime + 0.3;
          const osc2 = this.audioCtx.createOscillator();
          osc2.type = 'sine';
          const h2 = this.audioCtx.createOscillator();
          h2.type = 'sine';
          const hg2 = this.audioCtx.createGain();
          hg2.gain.setValueAtTime(0.12, start2);
          
          const pan2 = this.audioCtx.createStereoPanner();
          pan2.pan.setValueAtTime(pan, start2);
          
          const vol2 = this.audioCtx.createGain();
          vol2.gain.setValueAtTime(0, start2);
          vol2.gain.linearRampToValueAtTime(currentVol * 0.5, start2 + 0.08);
          vol2.gain.exponentialRampToValueAtTime(0.001, start2 + 0.45);
          
          osc2.frequency.setValueAtTime(baseFreq, start2);
          osc2.frequency.linearRampToValueAtTime(baseFreq * 0.96, start2 + 0.4);
          h2.frequency.setValueAtTime(baseFreq * 2, start2);
          h2.frequency.linearRampToValueAtTime(baseFreq * 1.92, start2 + 0.4);
          
          const mix2 = this.audioCtx.createGain();
          mix2.gain.value = 1.0;
          osc2.connect(mix2);
          h2.connect(hg2);
          hg2.connect(mix2);
          mix2.connect(pan2);
          pan2.connect(vol2);
          vol2.connect(this.natureGains.forestbirds);
          
          let rs2 = null;
          if (this._forestReverbDelay) {
            rs2 = this.audioCtx.createGain();
            rs2.gain.value = 0.3;
            vol2.connect(rs2);
            rs2.connect(this._forestReverbDelay);
          }
          
          osc2.start(start2);
          h2.start(start2);
          osc2.stop(start2 + 0.5);
          h2.stop(start2 + 0.5);

          // GC 자원 해제
          osc2.onended = () => {
            try { osc2.disconnect(); } catch(e) {}
            try { h2.disconnect(); } catch(e) {}
            try { hg2.disconnect(); } catch(e) {}
            try { mix2.disconnect(); } catch(e) {}
            try { pan2.disconnect(); } catch(e) {}
            try { vol2.disconnect(); } catch(e) {}
            if (rs2) { try { rs2.disconnect(); } catch(e) {} }
          };
        };
        
        // 뻐-꾹 2회 반복
        playSingleCuckoo(now);
        playSingleCuckoo(now + 1.8);
      }
      
      const nextDelay = 4000 + Math.random() * 5000; // 약 6.5초 평균
      this._forestTimers.push(setTimeout(playCuckoo, nextDelay));
    };
    
    // 6종 새 시간차 시작
    playChirper();
    this._forestTimers.push(setTimeout(playForestOriole, 1500 + Math.random() * 2000));
    this._forestTimers.push(setTimeout(playForestTitmouse, 3000 + Math.random() * 2000));
    this._forestTimers.push(setTimeout(playWoodpecker, 5000 + Math.random() * 3000));
    this._forestTimers.push(setTimeout(playKingfisher, 7000 + Math.random() * 3000));
    this._forestTimers.push(setTimeout(playCuckoo, 2000 + Math.random() * 3000));
    
    this.forestBirdsTimer = setInterval(() => {
      if (!this.isPlaying || !this.isNatureActive) return;
      if (this.natureGains.forestbirds.gain.value <= 0.01) return;
    }, 5000);
  }

  /**
   * [호환] triggerCuckooSleepLoop — forestbirds에 통합됨. 하위 호환용 빈 함수.
   */
  triggerCuckooSleepLoop() {
    // cuckoosleep은 forestbirds에 통합되었습니다.
    // 이 함수는 기존 호출 호환성을 위해 빈 상태로 유지합니다.
  }

  /**
   * 밤의 풀벌레 소리 — ASMR 자연음 합성 오케스트라
   * 핵심 기술: 노이즈원 → 공명 밴드패스 필터 → AM 변조 → 엔벨로프
   * (오실레이터 순음 절대 사용 금지 — 자연 벌레는 날개 마찰 노이즈)
   */
  triggerCricketsLoop() {
    this._cricketsActive = true;
    if (this.cricketsTimer) { clearInterval(this.cricketsTimer); this.cricketsTimer = null; }
    if (this._cricketTimers) {
      this._cricketTimers.forEach(t => clearTimeout(t));
      this._cricketTimers = [];
    }
    
    // 밤 대기 배경 노이즈 (브라운 노이즈 → 로우패스 500Hz)
    if (!this._nightAtmoSource && this.brownNoiseBuffer) {
      const src = this.audioCtx.createBufferSource();
      src.buffer = this.brownNoiseBuffer;
      src.loop = true;
      const lpf = this.audioCtx.createBiquadFilter();
      lpf.type = 'lowpass'; lpf.frequency.value = 500; lpf.Q.value = 0.7;
      const atmoGain = this.audioCtx.createGain();
      atmoGain.gain.value = 0.03;
      src.connect(lpf); lpf.connect(atmoGain);
      atmoGain.connect(this.natureGains.crickets);
      src.start();
      this._nightAtmoSource = src;
      this._nightAtmoFilter = lpf;
      this._nightAtmoGain = atmoGain;
    }
    
    this._cricketTimers = [];
    
    // 엔진 동작 중이면 true (볼륨 무관 — 타이머 유지용)
    const isCricketActive = () => {
      if (!this._cricketsActive) return false;
      if (!this.isPlaying || !this.isNatureActive) return false;
      return true;
    };
    // 볼륨 0이면 소리만 건너뛰고 타이머는 계속 유지
    const shouldMakeSound = () => this.natureVolumeSettings.crickets > 0.005;
    const pushTimer = (tid) => { if (this._cricketTimers) this._cricketTimers.push(tid); };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 1: 귀뚜라미 — "찌르르르르~"
    //   핑크노이즈 → 좁은 밴드패스(3000~3400Hz, Q=18~26)
    //   → AM 변조(38~50Hz, 날개마찰 트릴) → 엔벨로프
    // ═══════════════════════════════════════════════════════════
    const playTreeCricket = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playTreeCricket(panBase), 2000 + Math.random() * 3000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const dur = 1.5 + Math.random() * 2.5;
      const freq = 2100 + Math.random() * 300; // 포근한 중주파 영역으로 하향 조정
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.3 - 0.15));
      
      const noise = this.audioCtx.createBufferSource();
      noise.buffer = this.pinkNoiseBuffer;
      noise.loop = true;
      
      const bpf = this.audioCtx.createBiquadFilter();
      bpf.type = 'bandpass';
      bpf.frequency.setValueAtTime(freq, now);
      bpf.frequency.linearRampToValueAtTime(freq + Math.random() * 80 - 40, now + dur);
      bpf.Q.value = 32 + Math.random() * 5; // 더 부드럽고 동글동글한 날개 마찰음
      
      const lfo = this.audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(38 + Math.random() * 12, now);
      const amGain = this.audioCtx.createGain();
      amGain.gain.setValueAtTime(0.5, now);
      const amDepth = this.audioCtx.createGain();
      amDepth.gain.setValueAtTime(0.45, now);
      lfo.connect(amDepth); amDepth.connect(amGain.gain);
      
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, now);
      const env = this.audioCtx.createGain();
      const pk = 0.22 + Math.random() * 0.08; // 수면 이완 유도를 위한 볼륨 최적 하향
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(pk, now + 0.08);
      env.gain.setValueAtTime(pk, now + dur - 0.12);
      env.gain.exponentialRampToValueAtTime(0.001, now + dur);
      
      noise.connect(bpf); bpf.connect(amGain);
      amGain.connect(panner); panner.connect(env);
      env.connect(this.natureGains.crickets);
      lfo.start(now); noise.start(now);
      lfo.stop(now + dur); noise.stop(now + dur);

      // GC 자원 회수
      noise.onended = () => {
        try { noise.disconnect(); } catch(e) {}
        try { lfo.disconnect(); } catch(e) {}
        try { bpf.disconnect(); } catch(e) {}
        try { amGain.disconnect(); } catch(e) {}
        try { amDepth.disconnect(); } catch(e) {}
        try { panner.disconnect(); } catch(e) {}
        try { env.disconnect(); } catch(e) {}
      };
      
      pushTimer(setTimeout(() => playTreeCricket(panBase + Math.random() * 0.2 - 0.1), 2000 + Math.random() * 3000));
    };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 2: 여치 — "쯔르르르~" (거친 질감)
    //   핑크노이즈 → 넓은 밴드패스(4200~4800Hz, Q=8~13)
    //   → 빠른 AM(55~75Hz) → 엔벨로프
    // ═══════════════════════════════════════════════════════════
    const playKatydid = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playKatydid(panBase), 3000 + Math.random() * 4000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const dur = 2.0 + Math.random() * 2.5;
      const freq = 3100 + Math.random() * 300; // 고주파 자극을 차단하고 3kHz 대역으로 낮춤
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.2 - 0.1));
      
      const noise = this.audioCtx.createBufferSource();
      noise.buffer = this.pinkNoiseBuffer;
      noise.loop = true;
      
      const bpf = this.audioCtx.createBiquadFilter();
      bpf.type = 'bandpass';
      bpf.frequency.setValueAtTime(freq, now);
      bpf.Q.value = 35 + Math.random() * 5; // 날카로운 노이즈 질감을 청아하게 가다듬음
      
      const lfo = this.audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(55 + Math.random() * 20, now);
      const amGain = this.audioCtx.createGain();
      amGain.gain.setValueAtTime(0.5, now);
      const amDepth = this.audioCtx.createGain();
      amDepth.gain.setValueAtTime(0.48, now);
      lfo.connect(amDepth); amDepth.connect(amGain.gain);
      
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, now);
      const env = this.audioCtx.createGain();
      const pk = 0.07 + Math.random() * 0.03; // 수면을 방해하지 않는 작은 배경음으로 볼륨 대폭 인하
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(pk, now + 0.15);
      env.gain.setValueAtTime(pk, now + dur - 0.2);
      env.gain.exponentialRampToValueAtTime(0.001, now + dur);
      
      noise.connect(bpf); bpf.connect(amGain);
      amGain.connect(panner); panner.connect(env);
      env.connect(this.natureGains.crickets);
      lfo.start(now); noise.start(now);
      lfo.stop(now + dur); noise.stop(now + dur);

      // GC 자원 회수
      noise.onended = () => {
        try { noise.disconnect(); } catch(e) {}
        try { lfo.disconnect(); } catch(e) {}
        try { bpf.disconnect(); } catch(e) {}
        try { amGain.disconnect(); } catch(e) {}
        try { amDepth.disconnect(); } catch(e) {}
        try { panner.disconnect(); } catch(e) {}
        try { env.disconnect(); } catch(e) {}
      };
      
      pushTimer(setTimeout(() => playKatydid(panBase + Math.random() * 0.2 - 0.1), 3000 + Math.random() * 4000));
    };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 3: 땅강아지 — "우우우우~" (저음 웅웅 안정감 향상)
    //   브라운노이즈 → 밴드패스(700~900Hz, Q=20~25로 좁혀 웅웅거리는 잡음 감소)
    //   → 느린 AM(5~10Hz) → 엔벨로프 (배경 음량 감쇄)
    // ═══════════════════════════════════════════════════════════
    const playMoleCricket = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playMoleCricket(panBase), 3000 + Math.random() * 4000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const dur = 3.0 + Math.random() * 3.0;
      const freq = 750 + Math.random() * 150; // 저주파 대역으로 조율해 차분한 기저음 유도
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.2 - 0.1));
      
      const noise = this.audioCtx.createBufferSource();
      noise.buffer = this.brownNoiseBuffer;
      noise.loop = true;
      
      const bpf = this.audioCtx.createBiquadFilter();
      bpf.type = 'bandpass';
      bpf.frequency.setValueAtTime(freq, now);
      bpf.Q.value = 20 + Math.random() * 5; // Q값을 높여 더 깨끗하고 부드러운 패드음 형성
      
      const lfo = this.audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(5 + Math.random() * 5, now);
      const amGain = this.audioCtx.createGain();
      amGain.gain.setValueAtTime(0.5, now);
      const amDepth = this.audioCtx.createGain();
      amDepth.gain.setValueAtTime(0.4, now);
      lfo.connect(amDepth); amDepth.connect(amGain.gain);
      
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, now);
      const env = this.audioCtx.createGain();
      const pk = 0.4 + Math.random() * 0.15; // 스피커 기저음 출력을 위해 볼륨 인상
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(pk, now + 0.3);
      env.gain.setValueAtTime(pk, now + dur - 0.4);
      env.gain.exponentialRampToValueAtTime(0.001, now + dur);
      
      noise.connect(bpf); bpf.connect(amGain);
      amGain.connect(panner); panner.connect(env);
      env.connect(this.natureGains.crickets);
      lfo.start(now); noise.start(now);
      lfo.stop(now + dur); noise.stop(now + dur);

      // GC 자원 회수
      noise.onended = () => {
        try { noise.disconnect(); } catch(e) {}
        try { lfo.disconnect(); } catch(e) {}
        try { bpf.disconnect(); } catch(e) {}
        try { amGain.disconnect(); } catch(e) {}
        try { amDepth.disconnect(); } catch(e) {}
        try { panner.disconnect(); } catch(e) {}
        try { env.disconnect(); } catch(e) {}
      };
      
      pushTimer(setTimeout(() => playMoleCricket(panBase + Math.random() * 0.3 - 0.15), 3000 + Math.random() * 4000));
    };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 4: 개구리 — "개굴개굴~" (수면 유도를 위해 원거리 감쇄 적용)
    //   브라운노이즈 → 밴드패스(350~650Hz, 주파수 하강 스윕)
    //   → 엔벨로프 (음량을 복구하되 아늑함을 유지하도록 필터 보강)
    // ═══════════════════════════════════════════════════════════
    const playFrog = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playFrog(panBase), 5000 + Math.random() * 6000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const count = 2 + Math.floor(Math.random() * 3);
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.2 - 0.1));
      
      for (let c = 0; c < count; c++) {
        const t = now + c * (0.5 + Math.random() * 0.3);
        const d = 0.25 + Math.random() * 0.15;
        const f = 350 + Math.random() * 300;
        
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = this.brownNoiseBuffer;
        noise.loop = true;
        
        const bpf = this.audioCtx.createBiquadFilter();
        bpf.type = 'bandpass';
        bpf.frequency.setValueAtTime(f * 1.6, t);
        bpf.frequency.exponentialRampToValueAtTime(f * 0.6, t + d);
        bpf.Q.value = 7 + Math.random() * 3; // 개구리 소리의 고주파 노이즈 필터링 강화
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, t);
        const env = this.audioCtx.createGain();
        const pk = 0.2 + Math.random() * 0.1; // 스피커 청취를 위한 볼륨 감도 인상
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(pk, t + 0.01);
        env.gain.setValueAtTime(pk * 0.7, t + d * 0.5);
        env.gain.exponentialRampToValueAtTime(0.001, t + d);
        
        noise.connect(bpf); bpf.connect(panner);
        panner.connect(env); env.connect(this.natureGains.crickets);
        noise.start(t); noise.stop(t + d + 0.05);

        // 개별 울음 끝날 때 GC 자원 회수
        noise.onended = () => {
          try { noise.disconnect(); } catch(e) {}
          try { bpf.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { env.disconnect(); } catch(e) {}
        };
      }
      pushTimer(setTimeout(() => playFrog(panBase + Math.random() * 0.3 - 0.15), 5000 + Math.random() * 6000));
    };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 5: 베짱이 — "찍찍찍" (날카로운 초단 노이즈 감쇄)
    //   핑크노이즈 → 밴드패스(2500~3000Hz, Q=15~23)
    //   → 초짧은 엔벨로프(30~50ms), 3~6회 연타 (볼륨 스피커 최적화)
    // ═══════════════════════════════════════════════════════════
    const playFieldCricket = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playFieldCricket(panBase), 2000 + Math.random() * 3000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const count = 3 + Math.floor(Math.random() * 4);
      const freq = 2500 + Math.random() * 500;
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.2 - 0.1));
      
      for (let b = 0; b < count; b++) {
        const t = now + b * (0.08 + Math.random() * 0.05);
        const d = 0.03 + Math.random() * 0.02;
        
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = this.pinkNoiseBuffer;
        noise.loop = true;
        
        const bpf = this.audioCtx.createBiquadFilter();
        bpf.type = 'bandpass';
        bpf.frequency.value = freq + Math.random() * 200;
        bpf.Q.value = 22 + Math.random() * 6; // Q값을 높여 날카로운 클릭 노이즈 방지
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, t);
        const env = this.audioCtx.createGain();
        const pk = 0.25 + Math.random() * 0.1; // 스피커 볼륨 감도 인상
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(pk, t + 0.003);
        env.gain.exponentialRampToValueAtTime(0.001, t + d);
        
        noise.connect(bpf); bpf.connect(panner);
        panner.connect(env); env.connect(this.natureGains.crickets);
        noise.start(t); noise.stop(t + d + 0.01);

        // 개별 소리 완료 시 GC 자원 회수
        noise.onended = () => {
          try { noise.disconnect(); } catch(e) {}
          try { bpf.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { env.disconnect(); } catch(e) {}
        };
      }
      pushTimer(setTimeout(() => playFieldCricket(panBase + Math.random() * 0.2 - 0.1), 2000 + Math.random() * 3000));
    };
    
    // ═══════════════════════════════════════════════════════════
    // ASMR 벌레 6: 방울벌레 — "링~링~링~" (맑은 고음 공명 웰니스 강화)
    //   핑크노이즈 → 극좁 밴드패스(4500~5300Hz, Q=40~48로 상향하여 오실레이터 순음에 가까운 맑은 링링 소리 생성)
    //   → 초고속 어택 + 자연 감쇠, 3~7회 (스피커 메인 노출 볼륨)
    // ═══════════════════════════════════════════════════════════
    const playBellCricket = (panBase) => {
      if (!isCricketActive()) return;
      if (!shouldMakeSound()) {
        pushTimer(setTimeout(() => playBellCricket(panBase), 3000 + Math.random() * 4000));
        return;
      }
      const now = this.audioCtx.currentTime;
      const count = 3 + Math.floor(Math.random() * 4);
      const freq = 3700 + Math.random() * 300; // 은방울 톤의 포근한 대역으로 하향 조정
      const pan = Math.max(-1, Math.min(1, panBase + Math.random() * 0.2 - 0.1));
      
      for (let r = 0; r < count; r++) {
        const t = now + r * (0.18 + Math.random() * 0.08);
        const d = 0.1 + Math.random() * 0.08;
        
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = this.pinkNoiseBuffer;
        noise.loop = true;
        
        const bpf = this.audioCtx.createBiquadFilter();
        bpf.type = 'bandpass';
        bpf.frequency.setValueAtTime(freq, t);
        bpf.frequency.exponentialRampToValueAtTime(freq * 0.95, t + d);
        bpf.Q.value = 45 + Math.random() * 5; // 고주파 잡음을 걸러서 영롱함만 강조
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, t);
        const env = this.audioCtx.createGain();
        const pk = 0.18 + Math.random() * 0.07; // 맑고 은은한 수준으로 볼륨 감쇄
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(pk, t + 0.002);
        env.gain.exponentialRampToValueAtTime(0.001, t + d);
        
        noise.connect(bpf); bpf.connect(panner);
        panner.connect(env); env.connect(this.natureGains.crickets);
        noise.start(t); noise.stop(t + d + 0.02);

        // 개별 소리 완료 시 GC 자원 회수
        noise.onended = () => {
          try { noise.disconnect(); } catch(e) {}
          try { bpf.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { env.disconnect(); } catch(e) {}
        };
      }
      pushTimer(setTimeout(() => playBellCricket(panBase + Math.random() * 0.3 - 0.15), 3000 + Math.random() * 4000));
    };
    
    // ═══ ASMR 오케스트라 배치: 6종 × 2마리 = 12마리 ═══
    playTreeCricket(-0.6);
    playTreeCricket(0.7);
    playKatydid(0.5);
    playKatydid(-0.4);
    playMoleCricket(0.0);
    playMoleCricket(-0.6);
    playFrog(-0.3);
    playFrog(-0.8);
    playFieldCricket(0.3);
    playFieldCricket(-0.3);
    playBellCricket(0.6);
    playBellCricket(-0.5);
    
    this.cricketsTimer = setInterval(() => {
      if (!this.isPlaying || !this.isNatureActive) return;
    }, 5000);
  }


  /**
   * 깊은 산속 새소리 주기적 자동 트리거 루프
   */
  triggerMountainBirdsLoop() {
    // ══════════════════════════════════════════════════════════════
    // [ASMR] 깊은 산속 새소리 12종 앙상블 + 산 잔향 + 나뭇잎 배경
    // ══════════════════════════════════════════════════════════════
    
    if (this.mountainBirdsTimer) { clearTimeout(this.mountainBirdsTimer); this.mountainBirdsTimer = null; }
    
    // ── 산 잔향 리버브 노드 (딜레이 + 피드백) ──
    if (!this._mtReverbDelay && this.audioCtx) {
      this._mtReverbDelay = this.audioCtx.createDelay(1.0);
      this._mtReverbDelay.delayTime.value = 0.35; // 산 에코: 0.35초
      
      this._mtReverbFeedback = this.audioCtx.createGain();
      this._mtReverbFeedback.gain.value = 0.33; // 피드백 33%로 상향 (산맥 사이로 깊게 반사되는 에코)
      
      this._mtReverbFilter = this.audioCtx.createBiquadFilter();
      this._mtReverbFilter.type = 'lowpass';
      this._mtReverbFilter.frequency.value = 2600; // 컷오프 주파수를 다듬어 에코의 고음역 자극 방지
      this._mtReverbFilter.Q.value = 0.5;
      
      this._mtReverbGain = this.audioCtx.createGain();
      this._mtReverbGain.gain.value = 0.3; // 리버브 30% 혼합
      
      // 피드백 루프: delay → filter → feedback → delay
      this._mtReverbDelay.connect(this._mtReverbFilter);
      this._mtReverbFilter.connect(this._mtReverbFeedback);
      this._mtReverbFeedback.connect(this._mtReverbDelay);
      this._mtReverbFilter.connect(this._mtReverbGain);
      this._mtReverbGain.connect(this.natureGains.mountainbirds);
    }
    
    // ── 나뭇잎 바스락 배경 (핑크 노이즈 + 밴드패스 + LFO) ──
    if (!this._mtLeavesSource && this.pinkNoiseBuffer) {
      const src = this.audioCtx.createBufferSource();
      src.buffer = this.pinkNoiseBuffer;
      src.loop = true;
      
      const bpf = this.audioCtx.createBiquadFilter();
      bpf.type = 'bandpass';
      bpf.frequency.value = 2500;
      bpf.Q.value = 0.8;
      
      // 바람 LFO (나뭇잎 살랑거림)
      const lfo = this.audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.08; // 매우 느린 바람
      
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.value = 0.01;
      
      const baseGain = this.audioCtx.createGain();
      baseGain.gain.value = 0.02; // 나뭇잎 기본 2%
      
      lfo.connect(lfoGain);
      lfoGain.connect(baseGain.gain);
      
      src.connect(bpf);
      bpf.connect(baseGain);
      baseGain.connect(this.natureGains.mountainbirds);
      
      src.start();
      lfo.start();
      
      this._mtLeavesSource = src;
      this._mtLeavesLfo = lfo;
      this._mtLeavesGain = baseGain;
      this._mtLeavesBpf = bpf;
    }
    
    const playMountainBirdPhrase = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      const currentVol = this.natureVolumeSettings.mountainbirds;
      if (currentVol <= 0.01) return;
      
      const now = this.audioCtx.currentTime;

      // ── 배음 포함 새소리 합성 (기본 + 2배음 + 3배음) ──
      const playHarmonicTone = (startTime, duration, freqStart, freqEnd, pan, volScale, attackRatio = 0.15) => {
        // 기본음
        const osc = this.audioCtx.createOscillator();
        osc.type = 'sine';
        
        // 2배음 (15% 수준으로 감쇄하여 맑은 배음 확보)
        const osc2 = this.audioCtx.createOscillator();
        osc2.type = 'sine';
        const gain2 = this.audioCtx.createGain();
        gain2.gain.setValueAtTime(0.15, startTime);
        
        // 3배음 (2% 수준으로 극최소화하여 금속성 쇳소리 방지)
        const osc3 = this.audioCtx.createOscillator();
        osc3.type = 'sine';
        const gain3 = this.audioCtx.createGain();
        gain3.gain.setValueAtTime(0.02, startTime);
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, startTime);
        
        const vol = this.audioCtx.createGain();
        vol.gain.setValueAtTime(0, startTime);
        const peakVol = currentVol * 0.22 * volScale;
        const attackTime = duration * attackRatio;
        vol.gain.linearRampToValueAtTime(peakVol, startTime + attackTime);
        vol.gain.setValueAtTime(peakVol, startTime + duration - 0.03);
        vol.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.frequency.setValueAtTime(freqStart, startTime);
        osc.frequency.exponentialRampToValueAtTime(freqEnd, startTime + duration);
        osc2.frequency.setValueAtTime(freqStart * 2, startTime);
        osc2.frequency.exponentialRampToValueAtTime(freqEnd * 2, startTime + duration);
        osc3.frequency.setValueAtTime(freqStart * 3, startTime);
        osc3.frequency.exponentialRampToValueAtTime(freqEnd * 3, startTime + duration);
        
        // 드라이 경로
        const mix = this.audioCtx.createGain();
        mix.gain.value = 1.0;
        osc.connect(mix);
        osc2.connect(gain2);
        gain2.connect(mix);
        osc3.connect(gain3);
        gain3.connect(mix);
        mix.connect(panner);
        panner.connect(vol);
        vol.connect(this.natureGains.mountainbirds);
        
        // 리버브 경로 (산 잔향)
        let rs = null;
        if (this._mtReverbDelay) {
          rs = this.audioCtx.createGain();
          rs.gain.value = volScale > 0.6 ? 0.15 : 0.35; // 가까운 새: 리버브 적음, 먼 새: 많음
          vol.connect(rs);
          rs.connect(this._mtReverbDelay);
        }
        
        osc.start(startTime);
        osc2.start(startTime);
        osc3.start(startTime);
        osc.stop(startTime + duration + 0.05);
        osc2.stop(startTime + duration + 0.05);
        osc3.stop(startTime + duration + 0.05);

        // GC 자원 해제
        osc.onended = () => {
          try { osc.disconnect(); } catch(e) {}
          try { osc2.disconnect(); } catch(e) {}
          try { gain2.disconnect(); } catch(e) {}
          try { osc3.disconnect(); } catch(e) {}
          try { gain3.disconnect(); } catch(e) {}
          try { mix.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { vol.disconnect(); } catch(e) {}
          if (rs) { try { rs.disconnect(); } catch(e) {} }
        };
      };

      // 비브라토/트릴 (배음 포함)
      const playHarmonicTrill = (startTime, duration, baseFreq, freqEnd, pan, lfoFreq, volScale) => {
        const osc = this.audioCtx.createOscillator();
        osc.type = 'sine';
        
        const osc2 = this.audioCtx.createOscillator();
        osc2.type = 'sine';
        const g2 = this.audioCtx.createGain();
        g2.gain.setValueAtTime(0.12, startTime); // 배음 성분 축소로 촉촉한 트릴음 연출
        
        const lfo = this.audioCtx.createOscillator();
        lfo.frequency.setValueAtTime(lfoFreq, startTime);
        const lfoGain = this.audioCtx.createGain();
        lfoGain.gain.setValueAtTime(80, startTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        const lfoGain2 = this.audioCtx.createGain();
        lfoGain2.gain.setValueAtTime(160, startTime);
        lfo.connect(lfoGain2);
        lfoGain2.connect(osc2.frequency);
        
        const panner = this.audioCtx.createStereoPanner();
        panner.pan.setValueAtTime(pan, startTime);
        
        const vol = this.audioCtx.createGain();
        vol.gain.setValueAtTime(0, startTime);
        const peakVol = currentVol * 0.20 * volScale;
        vol.gain.linearRampToValueAtTime(peakVol, startTime + 0.035);
        vol.gain.setValueAtTime(peakVol, startTime + duration - 0.04);
        vol.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.frequency.setValueAtTime(baseFreq, startTime);
        osc.frequency.linearRampToValueAtTime(freqEnd, startTime + duration);
        osc2.frequency.setValueAtTime(baseFreq * 2, startTime);
        osc2.frequency.linearRampToValueAtTime(freqEnd * 2, startTime + duration);
        
        const mix = this.audioCtx.createGain();
        mix.gain.value = 1.0;
        osc.connect(mix);
        osc2.connect(g2);
        g2.connect(mix);
        mix.connect(panner);
        panner.connect(vol);
        vol.connect(this.natureGains.mountainbirds);
        
        let rs = null;
        if (this._mtReverbDelay) {
          rs = this.audioCtx.createGain();
          rs.gain.value = volScale > 0.6 ? 0.15 : 0.35;
          vol.connect(rs);
          rs.connect(this._mtReverbDelay);
        }
        
        lfo.start(startTime);
        osc.start(startTime);
        osc2.start(startTime);
        lfo.stop(startTime + duration);
        osc.stop(startTime + duration + 0.05);
        osc2.stop(startTime + duration + 0.05);

        // GC 자원 해제
        osc.onended = () => {
          try { osc.disconnect(); } catch(e) {}
          try { osc2.disconnect(); } catch(e) {}
          try { g2.disconnect(); } catch(e) {}
          try { lfo.disconnect(); } catch(e) {}
          try { lfoGain.disconnect(); } catch(e) {}
          try { lfoGain2.disconnect(); } catch(e) {}
          try { mix.disconnect(); } catch(e) {}
          try { panner.disconnect(); } catch(e) {}
          try { vol.disconnect(); } catch(e) {}
          if (rs) { try { rs.disconnect(); } catch(e) {} }
        };
      };

      // ══════════════════════════════════════════════
      // 12종 새소리 개별 연주 함수
      // ══════════════════════════════════════════════
      
      // 기존 8종 (배음 추가로 업그레이드)
      const playSparrow = (t, pan, vol) => {
        const count = 2 + Math.floor(Math.random() * 2);
        const baseF = 2900 + Math.random() * 200;
        for (let j = 0; j < count; j++) {
          playHarmonicTone(t + j * 0.11, 0.05, baseF, baseF * 1.15, pan, vol * 0.9, 0.1);
        }
      };

      const playOriole = (t, pan, vol) => {
        const dur = 0.24 + Math.random() * 0.1;
        const baseF = 1950 + Math.random() * 150;
        playHarmonicTrill(t, dur, baseF, baseF * 0.85, pan, 14, vol * 1.1);
      };

      const playTitmouse = (t, pan, vol) => {
        const baseF = 3700 + Math.random() * 150;
        for (let j = 0; j < 3; j++) {
          playHarmonicTone(t + j * 0.09, 0.055, baseF, baseF * 1.05, pan, vol * 0.7, 0.15);
        }
      };

      const playWarbler = (t, pan, vol) => {
        const dur = 0.32 + Math.random() * 0.08;
        const baseF = 2100 + Math.random() * 100;
        playHarmonicTone(t, dur, baseF, baseF * 1.45, pan, vol * 1.0, 0.3);
      };

      const playLark = (t, pan, vol) => {
        const dur = 0.5 + Math.random() * 0.15;
        const baseF = 2400 + Math.random() * 200;
        playHarmonicTrill(t, dur, baseF, baseF * 0.95, pan, 24, vol * 0.8);
      };

      const playRedstart = (t, pan, vol) => {
        const count = 3 + Math.floor(Math.random() * 2);
        const baseF = 2200 + Math.random() * 80;
        for (let j = 0; j < count; j++) {
          playHarmonicTone(t + j * 0.13, 0.045, baseF, baseF * 1.08, pan, vol * 0.28, 0.1);
        }
      };

      const playNuthatch = (t, pan, vol) => {
        const baseF = 2750 + Math.random() * 100;
        for (let j = 0; j < 4; j++) {
          playHarmonicTone(t + j * 0.11, 0.07, baseF, baseF * 0.98, pan, vol * 0.85, 0.15);
        }
      };

      const playDistCanopy = (t, pan, vol) => {
        const dur = 0.6 + Math.random() * 0.2;
        const baseF = 3850 + Math.random() * 150;
        playHarmonicTrill(t, dur, baseF, baseF, pan, 28, vol * 0.35);
      };

      // 🆕 새 9: 뱁새/개개비 (Reed Warbler) — "삐쭈삐쭈" 반복
      const playReedWarbler = (t, pan, vol) => {
        const repeats = 3 + Math.floor(Math.random() * 2);
        for (let j = 0; j < repeats; j++) {
          const baseF = 1800 + Math.random() * 400;
          const upDur = 0.06;
          const downDur = 0.08;
          const gap = j * 0.22;
          playHarmonicTone(t + gap, upDur, baseF, baseF * 1.35, pan, vol * 0.5, 0.1);
          playHarmonicTone(t + gap + upDur + 0.02, downDur, baseF * 1.3, baseF * 0.9, pan, vol * 0.4, 0.1);
        }
      };

      // 🆕 새 10: 소쩍새 (Scops Owl) — "쏙... 독..." 2음 반복 (수면용 둥근 순음화 튜닝)
      const playScopsOwl = (t, pan, vol) => {
        const baseF = 950 + Math.random() * 150;
        // "쏙" (상승)
        playHarmonicTone(t, 0.18, baseF, baseF * 1.08, pan, vol * 0.8, 0.2);
        // "독" (하강) — 0.7초 간격
        playHarmonicTone(t + 0.7, 0.15, baseF * 0.95, baseF * 0.85, pan, vol * 0.7, 0.15);
      };

      // 🆕 새 11: 큰부리까마귀 (Jungle Crow) — "까악" 저음 단발 (볼륨을 75% 이상 낮춰 원경에 배치)
      const playJungleCrow = (t, pan, vol) => {
        const baseF = 650 + Math.random() * 150;
        const dur = 0.2 + Math.random() * 0.1;
        playHarmonicTone(t, dur, baseF * 1.2, baseF * 0.7, pan, vol * 0.12, 0.05);
      };

      // 🆕 새 12: 물까마귀 (Dipper) — "찌르르" 맑은 트릴 (부드러운 볼륨 감쇄)
      const playDipper = (t, pan, vol) => {
        const dur = 0.35 + Math.random() * 0.15;
        const baseF = 1500 + Math.random() * 300;
        playHarmonicTrill(t, dur, baseF, baseF * 1.15, pan, 18, vol * 0.5);
      };

      // 확률적 오케스트라 스케줄링 (12종)
      const birdPool = [
        playSparrow, playOriole, playTitmouse, playWarbler,
        playLark, playRedstart, playNuthatch, playDistCanopy,
        playReedWarbler, playScopsOwl, playJungleCrow, playDipper
      ];
      const shuffled = [...birdPool].sort(() => Math.random() - 0.5);
      const activeBirdsCount = 4 + Math.floor(Math.random() * 4); // 4~7마리
      const phraseLen = 3.5 + Math.random() * 1.5; // 3.5~5초에 걸쳐 분배
      const slotWidth = phraseLen / activeBirdsCount;
      
      for (let i = 0; i < activeBirdsCount; i++) {
        const eventDelay = i * slotWidth + Math.random() * (slotWidth * 0.5);
        const stTime = now + eventDelay;
        const panVal = -0.9 + Math.random() * 1.8;
        const volVal = 0.4 + Math.random() * 0.6;
        const birdFunc = shuffled[i % shuffled.length];
        birdFunc(stTime, panVal, volVal);
      }
    };
    
    // ── 재귀적 setTimeout 스케줄러 기동 (매 턴마다 동적 난수 주기 생성으로 기계음 느낌 차단) ──
    const scheduleNext = () => {
      if (!this.isPlaying || !this.isNatureActive) return;
      
      // 볼륨이 유효할 때만 소리를 합성하고, 타이머 루프는 항상 유지하여 끊김 방지
      playMountainBirdPhrase();
      
      const nextDelay = 3200 + Math.random() * 2400; // 3.2초 ~ 5.6초 사이의 불규칙한 시간차
      this.mountainBirdsTimer = setTimeout(scheduleNext, nextDelay);
    };
    
    scheduleNext(); // 최초 즉시 기동
  }

  /**
   * [신규] 4대 파트별 활성화 토글 스위치 비즈니스 로직
   */
  toggleBeats(forceVal) {
    this.isBeatsActive = (forceVal !== undefined) ? forceVal : !this.isBeatsActive;
    if (this.isBeatsActive) {
      if (!this.isPlaying) {
        this.start();
      } else {
        this.startBeats();
      }
    } else {
      if (this.oscL) { try { this.oscL.stop(); } catch(e) {} this.oscL.disconnect(); this.oscL = null; }
      if (this.oscR) { try { this.oscR.stop(); } catch(e) {} this.oscR.disconnect(); this.oscR = null; }
      // Rife, VIP, 솔페지오, 자연음 등 모든 사운드가 꺼졌다면 리소스 정지
      if (!this.isRifeActive && !this.isVipActive && !this.isSolfeggioActive && !this.isNatureActive) {
        this.stop();
      }
    }
    return this.isBeatsActive;
  }

  toggleSolfeggio(forceVal) {
    this.isSolfeggioActive = (forceVal !== undefined) ? forceVal : !this.isSolfeggioActive;
    if (this.isSolfeggioActive) {
      if (!this.isPlaying) {
        this.start();
      } else {
        this.startSolfeggio();
      }
    } else {
      if (this.solfeggioOsc) { try { this.solfeggioOsc.stop(); } catch(e) {} this.solfeggioOsc.disconnect(); this.solfeggioOsc = null; }
      if (!this.isBeatsActive && !this.isRifeActive && !this.isVipActive && !this.isNatureActive) {
        this.stop();
      }
    }
    return this.isSolfeggioActive;
  }

  toggleRife(forceVal) {
    this.isRifeActive = (forceVal !== undefined) ? forceVal : !this.isRifeActive;
    if (this.isRifeActive) {
      if (this.rifeGain && this.audioCtx) {
        this.rifeGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.rifeGain.gain.setTargetAtTime(this.rifeVolume, this.audioCtx.currentTime, 0.02);
      }
      if (!this.isPlaying) {
        this.start();
      } else {
        this.startRifeFrequencySweep();
      }
    } else {
      if (this.rifeSweepTimer) {
        clearInterval(this.rifeSweepTimer);
        this.rifeSweepTimer = null;
      }
      if (this.audioCtx) {
        const now = this.audioCtx.currentTime;
        if (this.rifeGainA) { try { this.rifeGainA.gain.cancelScheduledValues(now); this.rifeGainA.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.rifeGainB) { try { this.rifeGainB.gain.cancelScheduledValues(now); this.rifeGainB.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.rifeBeatsGain) { try { this.rifeBeatsGain.gain.cancelScheduledValues(now); this.rifeBeatsGain.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.rifeGain) { try { this.rifeGain.gain.cancelScheduledValues(now); this.rifeGain.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
      }
      setTimeout(() => {
        if (!this.isRifeActive) {
          this.stopRifeOscillators();
        }
      }, 50);
      
      if (!this.isBeatsActive && !this.isVipActive && !this.isSolfeggioActive && !this.isNatureActive) {
        this.stop();
      }
    }
    return this.isRifeActive;
  }

  toggleVip(forceVal) {
    this.isVipActive = (forceVal !== undefined) ? forceVal : !this.isVipActive;
    if (this.isVipActive) {
      if (this.vipGain && this.audioCtx) {
        this.vipGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.vipGain.gain.setTargetAtTime(this.vipVolume, this.audioCtx.currentTime, 0.02);
      }
      if (!this.isPlaying) {
        this.start();
      } else {
        this.startVipFrequencySweep();
      }
    } else {
      if (this.vipSweepTimer) {
        clearInterval(this.vipSweepTimer);
        this.vipSweepTimer = null;
      }
      if (this.audioCtx) {
        const now = this.audioCtx.currentTime;
        if (this.vipGainA) { try { this.vipGainA.gain.cancelScheduledValues(now); this.vipGainA.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.vipGainB) { try { this.vipGainB.gain.cancelScheduledValues(now); this.vipGainB.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.vipBeatsGain) { try { this.vipBeatsGain.gain.cancelScheduledValues(now); this.vipBeatsGain.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.vipGain) { try { this.vipGain.gain.cancelScheduledValues(now); this.vipGain.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
      }
      setTimeout(() => {
        if (!this.isVipActive) {
          this.stopVipOscillators();
        }
      }, 50);
      
      if (!this.isBeatsActive && !this.isRifeActive && !this.isSolfeggioActive && !this.isNatureActive) {
        this.stop();
      }
    }
    return this.isVipActive;
  }

  toggleCustom(forceVal) {
    this.isCustomActive = (forceVal !== undefined) ? forceVal : !this.isCustomActive;
    if (this.isCustomActive) {
      if (this.customGain && this.audioCtx) {
        this.customGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
        this.customGain.gain.setTargetAtTime(this.customVolume, this.audioCtx.currentTime, 0.02);
      }
      if (!this.isPlaying) {
        this.start();
      } else {
        this.startCustomFrequencySweep();
      }
    } else {
      if (this.customSweepTimer) {
        clearInterval(this.customSweepTimer);
        this.customSweepTimer = null;
      }
      if (this.audioCtx) {
        const now = this.audioCtx.currentTime;
        if (this.customGainA) { try { this.customGainA.gain.cancelScheduledValues(now); this.customGainA.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.customGainB) { try { this.customGainB.gain.cancelScheduledValues(now); this.customGainB.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
        if (this.customGain) { try { this.customGain.gain.cancelScheduledValues(now); this.customGain.gain.setTargetAtTime(0.0001, now, 0.015); } catch(e) {} }
      }
      setTimeout(() => {
        if (!this.isCustomActive) {
          this.stopCustomOscillators();
        }
      }, 50);
      
      if (!this.isBeatsActive && !this.isRifeActive && !this.isVipActive && !this.isSolfeggioActive && !this.isNatureActive) {
        this.stop();
      }
    }
    return this.isCustomActive;
  }

  toggleNature(forceVal) {
    this.isNatureActive = (forceVal !== undefined) ? forceVal : !this.isNatureActive;
    if (this.isPlaying) {
      if (this.isNatureActive) {
        this.startNatureMixer();
      } else {
        if (this.seagullTimer) { clearInterval(this.seagullTimer); this.seagullTimer = null; }
        if (this.singingBowlTimer) { clearInterval(this.singingBowlTimer); this.singingBowlTimer = null; }
        this.stopNoiseSources();
        if (this.rainTracks) {
          for (const trackId of this.rainTracks) {
            this.stopRainTrack(trackId);
          }
        }
        if (this.waveLfo) { try { this.waveLfo.stop(); } catch(e) {} this.waveLfo.disconnect(); this.waveLfo = null; }
        if (this.windLfo) { try { this.windLfo.stop(); } catch(e) {} this.windLfo.disconnect(); this.windLfo = null; }
      }
    }
    return this.isNatureActive;
  }

  /**
   * 마스터 볼륨 전체 통제 (0.0 ~ 1.0)
   */
  setMasterVolume(val) {
    this.masterVolume = val;
    if (this.masterGain && this.audioCtx && !this.isMuted) {
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.setTargetAtTime(val, now, 0.015);
    }
    this.updateAllRainVolumes();
  }

  /**
   * 앱 전체 소리 ON/OFF 음소거(Mute) 스위칭 제어
   */
  toggleMute() {
    if (!this.masterGain) {
      this.isMuted = !this.isMuted;
      this.updateAllRainVolumes();
      return this.isMuted;
    }
    
    if (!this.isMuted) {
      this.lastUnmutedVolume = this.masterVolume;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioCtx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.0, this.audioCtx.currentTime + 0.15);
      this.isMuted = true;
    } else {
      this.masterGain.gain.setValueAtTime(0.0, this.audioCtx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(this.lastUnmutedVolume, this.audioCtx.currentTime + 0.15);
      this.isMuted = false;
    }
    this.updateAllRainVolumes();
    return this.isMuted;
  }

  /**
   * 바이노럴 비트 개별 볼륨 설정 (100% 볼륨 및 믹스 시 클리핑/잡음 방지 헤드룸 스케일링)
   */
  setBeatsVolume(val) {
    this.beatsVolume = val;
    if (this.beatsGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      let finalVol = val * 0.45; // 최대 100% 볼륨 시 -7dBFS 헤드룸 유지
      if (this.carrierFreq < 160) {
        const boost = 1.0 + Math.min(0.25, (160 - this.carrierFreq) / 200);
        finalVol = Math.min(0.50, finalVol * boost);
      }
      this.beatsGain.gain.setTargetAtTime(finalVol, now, 0.02);
    }
  }

  /**
   * 바이노럴 비트 주파수 설정 (팝노이즈 없는 부드러운 주파수 글라이딩)
   */
  setBeatsFrequency(carrier, beat) {
    this.carrierFreq = parseFloat(carrier);
    this.beatFreq = parseFloat(beat);
    if (this.audioCtx) {
      const now = this.audioCtx.currentTime;
      if (this.oscL) {
        this.oscL.frequency.cancelScheduledValues(now);
        this.oscL.frequency.setTargetAtTime(this.carrierFreq, now, 0.02);
      }
      if (this.oscR) {
        this.oscR.frequency.cancelScheduledValues(now);
        this.oscR.frequency.setTargetAtTime(this.carrierFreq + this.beatFreq, now, 0.02);
      }
    }
    
    // 캐리어 주파수 변경에 따른 등감쇄 볼륨 보정 업데이트
    if (this.beatsGain && this.isBeatsActive && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      let finalVol = this.beatsVolume * 0.45;
      if (this.carrierFreq < 160) {
        const boost = 1.0 + Math.min(0.25, (160 - this.carrierFreq) / 200);
        finalVol = Math.min(0.50, finalVol * boost);
      }
      this.beatsGain.gain.setTargetAtTime(finalVol, now, 0.02);
    }
  }

  /**
   * 솔페지오 개별 볼륨 설정 (100% 볼륨 및 믹스 시 배음 찌그러짐/잡음 방지 헤드룸 스케일링)
   */
  setSolfeggioVolume(val) {
    this.solfeggioVolume = val;
    const scaledVol = val * 0.50; // 최대 100% 볼륨 시 -6dBFS 헤드룸 유지로 왜곡/잡음 원천 차단
    if (this.solfeggioGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.solfeggioGain.gain.setTargetAtTime(scaledVol, now, 0.02);
    }
    if (val > 0.001) {
      this.isSolfeggioActive = true;
      if (this.isPlaying && !this.solfeggioOsc && !this.solfeggioOscL) {
        this.startSolfeggio();
      }
    } else {
      if (this.audioCtx) {
        setTimeout(() => {
          if (this.solfeggioVolume <= 0.001) {
            this.clearSolfeggioOscillators();
          }
        }, 60);
      }
    }
  }

  /**
   * 솔페지오 주파수 설정 (바이노럴 문자열 핫픽스 파싱 연동)
   */
  setSolfeggioFrequency(freq) {
    this.solfeggioFreqStr = freq.toString();
    if (this.solfeggioFreqStr.includes('_')) {
      const parts = this.solfeggioFreqStr.split('_');
      this.solfeggioFreqL = parseFloat(parts[0]);
      this.solfeggioFreqR = parseFloat(parts[1]);
      this.isSolfeggioBinaural = true;
    } else {
      const numFreq = parseFloat(freq);
      this.solfeggioFreq = numFreq;
      // [바이노럴 비트 기법 핫픽스] 80Hz 미만의 저주파(7.83Hz, 40Hz, 3.5Hz 등)는
      // 스피커/이어폰에서 가청 가능한 200Hz를 캐리어로 삼아 좌측 200Hz, 우측 200+Hz 바이노럴 비트로 자동 구동
      if (numFreq < 80 && numFreq > 0) {
        const carrier = 200.0;
        this.solfeggioFreqL = carrier;
        this.solfeggioFreqR = Math.round((carrier + numFreq) * 100) / 100;
        this.isSolfeggioBinaural = true;
      } else {
        this.isSolfeggioBinaural = false;
        this.solfeggioFreqL = undefined;
        this.solfeggioFreqR = undefined;
      }
    }
    
    this.isSolfeggioActive = true; 
    if (this.isPlaying) {
      // 오실레이터 전면 재조정 기동 (모노 <-> 바이노럴 전환 완벽 지원)
      this.startSolfeggio();
    }
  }

  /**
   * 솔라브르 테라피 개별 볼륨 설정 (안전 게이트 핫픽스)
   */
  setRifeVolume(val) {
    this.rifeVolume = val;
    if (this.rifeGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.rifeGain.gain.setTargetAtTime(this.isRifeActive ? val : 0.001, now, 0.015);
    }
  }

  /**
   * VIP 솔라브르 테라피 개별 볼륨 설정 (안전 게이트 핫픽스)
   */
  setVipVolume(val) {
    this.vipVolume = val;
    if (this.vipGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.vipGain.gain.setTargetAtTime(this.isVipActive ? val : 0.001, now, 0.015);
    }
  }

  /**
   * 솔라브르 테라피 12종 코드 주파수 리스트 업데이트 (스윕 루프 재구동)
   */
  setRifeFrequencyRecipe(freqArray) {
    this.rifeFreqs = freqArray;
    if (this.isPlaying && this.isRifeActive) {
      this.startRifeFrequencySweep();
    }
  }

  /**
   * VIP 솔라브르 테라피 주파수 리스트 업데이트 (스윕 루프 재구동)
   */
  setVipFrequencyRecipe(freqArray) {
    this.vipFreqs = freqArray;
    if (this.isPlaying && this.isVipActive) {
      this.startVipFrequencySweep();
    }
  }

  /**
   * 사용자 맞춤 생성기 (Custom Studio) 개별 볼륨 설정
   */
  setCustomVolume(val) {
    this.customVolume = val;
    if (this.customGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.customGain.gain.setTargetAtTime(this.isCustomActive ? val : 0.001, now, 0.015);
    }
  }

  /**
   * 사용자 맞춤 생성기 (Custom Studio) 주파수 리스트 업데이트 (스윕 루프 재구동)
   */
  setCustomFrequencyRecipe(freqArray) {
    if (Array.isArray(freqArray) && freqArray.length > 0) {
      this.customFreqs = freqArray.map(f => parseFloat(f)).filter(f => !isNaN(f) && f > 0);
    }
    if (this.isPlaying && this.isCustomActive) {
      this.startCustomFrequencySweep();
    }
  }

  /**
   * 자연음 전체 파트 마스터 볼륨 설정
   */
  setNatureMasterVolume(val) {
    this.natureMasterVolume = val;
    if (this.natureMasterGain && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.natureMasterGain.gain.setTargetAtTime(val, now, 0.015);
    }
    this.updateAllRainVolumes();
  }

  /**
   * 자연음 7종의 각 슬라이더 개별 제어
   */
  /**
   * 자연음 7종의 각 슬라이더 개별 제어 및 동적 재생/소멸 핫픽스
   */
  setNatureVolume(key, val) {
    if (this.rainTracks && this.rainTracks.indexOf(key) !== -1) {
      this.setRainTrackVolume(key, val);
      return;
    }
    this.natureVolumeSettings[key] = val;
    if (this.audioCtx && this.natureGains[key]) {
      const now = this.audioCtx.currentTime;
      if (val <= 0.001) {
        // 0%: 즉시 무음 (잔음 방지)
        this.natureGains[key].gain.cancelScheduledValues(now);
        this.natureGains[key].gain.setValueAtTime(0, now);
        this.natureGains[key].gain.value = 0;
      } else {
        this.natureGains[key].gain.setTargetAtTime(val, now, 0.015);
        this.natureGains[key].gain.value = val;
      }
    }

    // 1) [동적 재생 기동] 슬라이더 볼륨을 올렸을 때, 엔진이 돌고 있다면 즉시 기동합니다.
    if (val > 0.001 && this.isPlaying && this.isNatureActive) {
      // 빗소리 (Rain) 동적 켜기
      if (key === 'rain' && !this.natureSources.rain) {
        this.natureSources.rain = this.audioCtx.createBufferSource();
        this.natureSources.rain.buffer = this.rainBuffer;
        this.natureSources.rain.loop = true;
        this.natureSources.rain.connect(this.natureGains.rain);
        this.activeNodes.push(this.natureSources.rain);
        this.natureSources.rain.start();
      }
      // 파도소리 (Waves) 동적 켜기
      if (key === 'waves' && !this.natureSources.waves) {
        this.natureSources.waves = this.audioCtx.createBufferSource();
        this.natureSources.waves.buffer = this.brownNoiseBuffer;
        this.natureSources.waves.loop = true;
        this.activeNodes.push(this.natureSources.waves);
        
        const wavesFilter = this.audioCtx.createBiquadFilter();
        wavesFilter.type = 'lowpass';
        wavesFilter.frequency.value = 350;
        
        this.waveLfo = this.audioCtx.createOscillator();
        this.waveLfo.frequency.value = 0.06;
        this.activeNodes.push(this.waveLfo);
        
        this.waveLfoGain = this.audioCtx.createGain();
        this.waveLfoGain.gain.value = 0.45; 
        
        const wavesModulatorGain = this.audioCtx.createGain();
        wavesModulatorGain.gain.value = 0.75; 
        
        this.waveLfo.connect(this.waveLfoGain);
        this.waveLfoGain.connect(wavesModulatorGain.gain);
        
        this.natureSources.waves.connect(wavesFilter);
        wavesFilter.connect(wavesModulatorGain);
        wavesModulatorGain.connect(this.natureGains.waves);
        
        this.waveLfo.start();
        this.natureSources.waves.start();
      }
      // 바람소리 (Wind) 동적 켜기
      if (key === 'wind' && !this.natureSources.wind) {
        this.natureSources.wind = this.audioCtx.createBufferSource();
        this.natureSources.wind.buffer = this.pinkNoiseBuffer;
        this.natureSources.wind.loop = true;
        this.activeNodes.push(this.natureSources.wind);
        
        this.windFilter = this.audioCtx.createBiquadFilter();
        this.windFilter.type = 'bandpass';
        this.windFilter.frequency.value = 600;
        this.windFilter.Q.value = 1.8; 
        
        this.windLfo = this.audioCtx.createOscillator();
        this.windLfo.frequency.value = 0.13;
        this.activeNodes.push(this.windLfo);
        
        this.windLfoGain = this.audioCtx.createGain();
        this.windLfoGain.gain.value = 300; 
        
        const windAmplifier = this.audioCtx.createGain();
        windAmplifier.gain.value = 2.0; 
        
        this.windLfo.connect(this.windLfoGain);
        this.windLfoGain.connect(this.windFilter.frequency);
        
        this.natureSources.wind.connect(this.windFilter);
        this.windFilter.connect(windAmplifier);
        windAmplifier.connect(this.natureGains.wind);
        
        this.windLfo.start();
        this.natureSources.wind.start();
      }
      // 갈대 바람소리 (Reed Wind) 동적 켜기
      if (key === 'reedwind' && !this.natureSources.reedwind) {
        this.natureSources.reedwind = this.audioCtx.createBufferSource();
        this.natureSources.reedwind.buffer = this.pinkNoiseBuffer;
        this.natureSources.reedwind.loop = true;
        this.activeNodes.push(this.natureSources.reedwind);
        
        const reedFilter = this.audioCtx.createBiquadFilter();
        reedFilter.type = 'bandpass';
        reedFilter.frequency.value = 1100;
        reedFilter.Q.value = 1.5;
        
        this.reedWindLfo = this.audioCtx.createOscillator();
        this.reedWindLfo.frequency.value = 0.07;
        this.activeNodes.push(this.reedWindLfo);
        
        const reedLfoGain = this.audioCtx.createGain();
        reedLfoGain.gain.value = 350;
        
        this.reedWindLfo.connect(reedLfoGain);
        reedLfoGain.connect(reedFilter.frequency);
        
        this.reedWindLfo2 = this.audioCtx.createOscillator();
        this.reedWindLfo2.frequency.value = 0.11;
        this.activeNodes.push(this.reedWindLfo2);
        
        const reedVolumeGain = this.audioCtx.createGain();
        reedVolumeGain.gain.value = 0.4;
        
        const reedAmp = this.audioCtx.createGain();
        reedAmp.gain.value = 0.7;
        
        this.reedWindLfo2.connect(reedVolumeGain);
        reedVolumeGain.connect(reedAmp.gain);
        
        this.natureSources.reedwind.connect(reedFilter);
        reedFilter.connect(reedAmp);
        reedAmp.connect(this.natureGains.reedwind);
        
        this.reedWindLfo.start();
        this.reedWindLfo2.start();
        this.natureSources.reedwind.start();
      }
      // 모닥불소리 (Campfire) 동적 켜기
      if (key === 'campfire' && !this.natureSources.campfire) {
        this.natureSources.campfire = this.audioCtx.createBufferSource();
        this.natureSources.campfire.buffer = this.campfireBuffer;
        this.natureSources.campfire.loop = true;
        this.natureSources.campfire.connect(this.natureGains.campfire);
        this.activeNodes.push(this.natureSources.campfire);
        this.natureSources.campfire.start();
      }
      // 계곡물 흐르는 소리 (Stream) 동적 켜기
      if (key === 'stream' && !this.natureSources.stream) {
        this.natureSources.stream = this.audioCtx.createBufferSource();
        this.natureSources.stream.buffer = this.streamBuffer;
        this.natureSources.stream.loop = true;
        this.natureSources.stream.connect(this.natureGains.stream);
        this.activeNodes.push(this.natureSources.stream);
        this.natureSources.stream.start();
      }
      // 대나무숲 바람소리 (BambooWind) 동적 켜기
      if (key === 'bamboowind' && !this.natureSources.bamboowind) {
        const bambooGraph = this.startBambooWind(this.audioCtx, this.natureGains.bamboowind, false);
        this.natureSources.bamboowind = bambooGraph.masterNode;
        bambooGraph.nodes.forEach(node => this.activeNodes.push(node));
      }
      // 낮은 앰비언트 패드 (AmbientPad) 동적 켜기
      if (key === 'ambientpad' && !this.natureSources.ambientpad) {
        this.natureSources.ambientpad = this.audioCtx.createBufferSource();
        this.natureSources.ambientpad.buffer = this.ambientpadBuffer;
        this.natureSources.ambientpad.loop = true;
        this.natureSources.ambientpad.connect(this.natureGains.ambientpad);
        this.activeNodes.push(this.natureSources.ambientpad);
        this.natureSources.ambientpad.start();
      }
      // 깊은 숲의 새소리 (Deep Forest Birds) 동적 켜기
      if (key === 'forestbirds' && !this.forestBirdsTimer) {
        this.triggerForestBirdsLoop();
      }
      // 밤의 풀벌레소리 (Crickets) 동적 켜기
      if (key === 'crickets' && !this.cricketsTimer) {
        this.triggerCricketsLoop();
      }
      // 싱잉볼 (Singing Bowl) 동적 켜기
      if (key === 'singingbowl' && !this.singingBowlTimer) {
        this.triggerSingingBowlLoop();
      }
      // 수면 유도 뻐꾸기소리 (Cuckoo) 동적 켜기
      if (key === 'cuckoo' && !this.cuckooTimer) {
        this.triggerCuckooSleepLoop();
      }
      // 갈매기소리 (Seagull) 동적 켜기
      if (key === 'seagull' && !this.seagullTimer) {
        this.triggerSeagullLoop();
      }
      // 깊은 산속 새소리 앙상블 (Mountain Birds) 동적 켜기
      if (key === 'mountainbirds' && !this.mountainBirdsTimer) {
        this.triggerMountainBirdsLoop();
      }
    }

    // 2) [동적 리소스 파괴] 슬라이더 볼륨을 0으로 내렸을 때 노드 파괴 및 메모리 회수
    if (val <= 0.001) {
      if (this.natureSources[key]) {
        try { this.natureSources[key].stop(); } catch(e) {}
        this.natureSources[key].disconnect();
        this.natureSources[key] = null;
      }
      // 바람소리 LFO 정리
      if (key === 'wind') {
        if (this.windLfo) { try { this.windLfo.stop(); } catch(e) {} this.windLfo.disconnect(); this.windLfo = null; }
      }
      // 갈대 바람소리 LFO 정리
      if (key === 'reedwind') {
        if (this.reedWindLfo) { try { this.reedWindLfo.stop(); } catch(e) {} this.reedWindLfo.disconnect(); this.reedWindLfo = null; }
        if (this.reedWindLfo2) { try { this.reedWindLfo2.stop(); } catch(e) {} this.reedWindLfo2.disconnect(); this.reedWindLfo2 = null; }
      }
      // 파도소리 LFO 정리
      if (key === 'waves') {
        if (this.waveLfo) { try { this.waveLfo.stop(); } catch(e) {} this.waveLfo.disconnect(); this.waveLfo = null; }
      }
      // 깊은 숲의 새소리 타이머 및 ASMR 리소스 정리
      if (key === 'forestbirds') {
        if (this.forestBirdsTimer) { clearInterval(this.forestBirdsTimer); this.forestBirdsTimer = null; }
        if (this._forestTimers) { this._forestTimers.forEach(t => clearTimeout(t)); this._forestTimers = []; }
        // 숲 잔향 리버브 정리
        if (this._forestReverbDelay) { this._forestReverbDelay.disconnect(); this._forestReverbDelay = null; }
        if (this._forestReverbFeedback) { this._forestReverbFeedback.disconnect(); this._forestReverbFeedback = null; }
        if (this._forestReverbFilter) { this._forestReverbFilter.disconnect(); this._forestReverbFilter = null; }
        if (this._forestReverbGain) { this._forestReverbGain.disconnect(); this._forestReverbGain = null; }
        // 나맇잎 배경 정리
        if (this._forestBgSource) { try { this._forestBgSource.stop(); } catch(e) {} this._forestBgSource.disconnect(); this._forestBgSource = null; }
        if (this._forestBgLfo) { try { this._forestBgLfo.stop(); } catch(e) {} this._forestBgLfo.disconnect(); this._forestBgLfo = null; }
        if (this._forestBgGain) { this._forestBgGain.disconnect(); this._forestBgGain = null; }
        if (this._forestBgBpf) { this._forestBgBpf.disconnect(); this._forestBgBpf = null; }
        // 시냇물 배경 정리
        if (this._forestStreamSource) { try { this._forestStreamSource.stop(); } catch(e) {} this._forestStreamSource.disconnect(); this._forestStreamSource = null; }
        if (this._forestStreamGain) { this._forestStreamGain.disconnect(); this._forestStreamGain = null; }
        if (this._forestStreamBpf) { this._forestStreamBpf.disconnect(); this._forestStreamBpf = null; }
      }
      // 밤의 풀벌레소리 타이머 및 ASMR 리소스 정리
      if (key === 'crickets') {
        this._cricketsActive = false; // 활성 플래그 해제 (레이스 컨디션 방지)
        if (this.cricketsTimer) { clearInterval(this.cricketsTimer); this.cricketsTimer = null; }
        if (this._cricketTimers) { this._cricketTimers.forEach(t => clearTimeout(t)); this._cricketTimers = []; }
        if (this._nightAtmoSource) { try { this._nightAtmoSource.stop(); } catch(e) {} this._nightAtmoSource.disconnect(); this._nightAtmoSource = null; }
        if (this._nightAtmoFilter) { this._nightAtmoFilter.disconnect(); this._nightAtmoFilter = null; }
        if (this._nightAtmoGain) { this._nightAtmoGain.disconnect(); this._nightAtmoGain = null; }
      }
      // 깊은 산속 새소리 타이머 및 ASMR 리소스 정리
      if (key === 'mountainbirds') {
        if (this.mountainBirdsTimer) { clearTimeout(this.mountainBirdsTimer); this.mountainBirdsTimer = null; }
        // 리버브 노드 정리
        if (this._mtReverbDelay) { this._mtReverbDelay.disconnect(); this._mtReverbDelay = null; }
        if (this._mtReverbFeedback) { this._mtReverbFeedback.disconnect(); this._mtReverbFeedback = null; }
        if (this._mtReverbFilter) { this._mtReverbFilter.disconnect(); this._mtReverbFilter = null; }
        if (this._mtReverbGain) { this._mtReverbGain.disconnect(); this._mtReverbGain = null; }
        // 나뭇잎 배경 정리
        if (this._mtLeavesSource) { try { this._mtLeavesSource.stop(); } catch(e) {} this._mtLeavesSource.disconnect(); this._mtLeavesSource = null; }
        if (this._mtLeavesLfo) { try { this._mtLeavesLfo.stop(); } catch(e) {} this._mtLeavesLfo.disconnect(); this._mtLeavesLfo = null; }
        if (this._mtLeavesGain) { this._mtLeavesGain.disconnect(); this._mtLeavesGain = null; }
        if (this._mtLeavesBpf) { this._mtLeavesBpf.disconnect(); this._mtLeavesBpf = null; }
      }
      // 싱잉볼 타이머 정리
      if (key === 'singingbowl') {
        if (this.singingBowlTimer) { clearInterval(this.singingBowlTimer); this.singingBowlTimer = null; }
      }
      // 수면 유도 뻐꾸기 타이머 정리
      if (key === 'cuckoo') {
        if (this.cuckooTimer) { clearInterval(this.cuckooTimer); this.cuckooTimer = null; }
      }
      // 갈매기 타이머 정리
      if (key === 'seagull') {
        if (this.seagullTimer) { clearTimeout(this.seagullTimer); this.seagullTimer = null; }
      }
    }
  }

  /**
   * ==========================================================================
   * 유튜브 BGM 내보내기 (OfflineAudioContext 세그먼트 분할 렌더링)
   * 8초 간격 크로스페이드 및 초저주파 바이노럴 비트 매핑 타임라인 예약 렌더러 탑재.
   * 브라우저의 메모리 한계를 극복하기 위해 5분 단위 세그먼트 순환 렌더링을 적용합니다.
   * ==========================================================================
   */
  /**
   * ==========================================================================
   * ?좏뒠釉?BGM & 留욎땄 ?뚯썝 ?대낫?닿린 (OfflineAudioContext ?멸렇癒쇳듃 遺꾪븷 ?뚮뜑留?
   * 8珥?媛꾧꺽 ?щ줈?ㅽ럹?대뱶 諛?珥덉?二쇳뙆 諛붿씠?몃윺 鍮꾪듃 留ㅽ븨 ??꾨씪???덉빟 ?뚮뜑???묒옱.
   * 釉뚮씪?곗???硫붾え由??쒓퀎瑜?洹밸났?섍린 ?꾪빐 ?멸렇癒쇳듃 ?쒗솚 ?뚮뜑留곸쓣 ?곸슜?⑸땲??
   * ==========================================================================
   */
  async exportAudio(
    durationSeconds = 60,
    progressCallback = null,
    recipeType = 'all',
    customBgmTrack = null,
    customBgmVol = 0.5,
    customMasterVol = null
  ) {
    this.init();

    durationSeconds = Math.max(1, parseInt(durationSeconds) || 60);

    /* 9?쒓컙 ?댁긽 珥덉옣?쒓컙? 11025Hz 紐⑤끂濡?蹂??*/
    const isUltraLong = durationSeconds >= 32400;
    const sampleRate = isUltraLong ? 11025 : 44100;
    const numChannels = isUltraLong ? 1 : 2;
    const bitDepth = 16;
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;

    const SEGMENT_SECONDS = 1800;
    const numSegments = Math.ceil(durationSeconds / SEGMENT_SECONDS);
    const totalBytes = durationSeconds * sampleRate * blockAlign;

    /* WAV ?ㅻ뜑 ?앹꽦 (44諛붿씠?? */
    const headerBuffer = new ArrayBuffer(44);
    const view = new DataView(headerBuffer);
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + totalBytes, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);
    this.writeString(view, 36, 'data');
    view.setUint32(40, totalBytes, true);

    const blobs = [headerBuffer];
    if (progressCallback) progressCallback(0);

    /* ?좏슚??蹂쇰ⅷ ?곗텧 ?덉쟾 ?ы띁 */
    const safeNum = (v, def = 0.0) => {
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : def;
    };

    const getOfflineVolume = (key) => {
      if (recipeType === 'custom') {
        if (!customBgmTrack || customBgmTrack === 'off' || customBgmTrack === 'none') {
          return 0.0;
        }
        if (customBgmTrack === key) {
          return safeNum(customBgmVol, 0.4);
        }
        if (customBgmTrack === 'rain' && (key === 'rain' || (this.rainTracks && this.rainTracks.indexOf(key) !== -1))) {
          return safeNum(customBgmVol, 0.4);
        }
        return 0.0;
      }
      if (key === 'rain') {
        let rVol = (this.natureVolumeSettings && this.natureVolumeSettings.rain !== undefined) ? safeNum(this.natureVolumeSettings.rain, 0.0) : 0.0;
        if (this.rainTracks && this.rainVolumeSettings) {
          let sumR = 0;
          for (const rk of this.rainTracks) {
            const rv = safeNum(this.rainVolumeSettings[rk], 0.0);
            if (rv > 0) sumR += rv;
          }
          if (sumR > 0) rVol = Math.max(rVol, Math.min(1.0, sumR));
        }
        return rVol;
      }
      if (!this.natureVolumeSettings || this.natureVolumeSettings[key] === undefined) {
        return 0.0;
      }
      return safeNum(this.natureVolumeSettings[key], 0.0);
    };

    for (let seg = 0; seg < numSegments; seg++) {
      const segStart = seg * SEGMENT_SECONDS;
      const segEnd = Math.min(segStart + SEGMENT_SECONDS, durationSeconds);
      const segDur = segEnd - segStart;

      try {
        const offlineCtx = new OfflineAudioContext(numChannels, Math.ceil(sampleRate * segDur), sampleRate);

        /* ?ㅽ봽?쇱씤 留덉뒪??寃뚯씤 ?몃뱶 */
        const offlineMasterGain = offlineCtx.createGain();
        const effectiveMasterVol = (recipeType === 'custom')
          ? (Number.isFinite(customMasterVol) ? safeNum(customMasterVol, 0.8) : 0.8)
          : safeNum(this.masterVolume, 0.8);
        offlineMasterGain.gain.setValueAtTime(effectiveMasterVol, 0);
        offlineMasterGain.connect(offlineCtx.destination);

        /* ?뚰듃 1: 諛붿씠?몃윺 鍮꾪듃 */
        const isBeatsOn = (recipeType !== 'custom') && this.isBeatsActive && (safeNum(this.beatsVolume, 0) > 0.001);
        if (isBeatsOn) {
          const offBeatsGain = offlineCtx.createGain();
          let offBeatsVol = safeNum(this.beatsVolume, 0.4) * 0.45;
          const carrier = safeNum(this.carrierFreq, 216);
          const beat = safeNum(this.beatFreq, 7.83);
          if (carrier < 160) {
            const boost = 1.0 + Math.min(0.25, (160 - carrier) / 200);
            offBeatsVol = Math.min(0.50, offBeatsVol * boost);
          }
          offBeatsGain.gain.setValueAtTime(offBeatsVol, 0);
          offBeatsGain.connect(offlineMasterGain);

          const oscL = offlineCtx.createOscillator();
          oscL.type = 'sine';
          oscL.frequency.setValueAtTime(carrier, 0);

          const oscR = offlineCtx.createOscillator();
          oscR.type = 'sine';
          oscR.frequency.setValueAtTime(carrier + beat, 0);

          if (numChannels === 2) {
            const offBeatsMerger = offlineCtx.createChannelMerger(2);
            oscL.connect(offBeatsMerger, 0, 0);
            oscR.connect(offBeatsMerger, 0, 1);
            offBeatsMerger.connect(offBeatsGain);
          } else {
            oscL.connect(offBeatsGain);
            oscR.connect(offBeatsGain);
          }
          oscL.start(0);
          oscR.start(0);
          oscL.stop(segDur);
          oscR.stop(segDur);
        }

        /* ?뚰듃 2: ?뷀럹吏??二쇳뙆??*/
        const isSolfeggioOn = (recipeType !== 'custom') && this.isSolfeggioActive && (safeNum(this.solfeggioVolume, 0) > 0.001);
        if (isSolfeggioOn) {
          const offSolfeggioGain = offlineCtx.createGain();
          if (numChannels === 2) {
            offSolfeggioGain.channelCount = 2;
            offSolfeggioGain.channelCountMode = 'explicit';
          }
          const finalSolfeggioVol = safeNum(this.solfeggioVolume, 0.5) * 0.50;
          offSolfeggioGain.gain.setValueAtTime(finalSolfeggioVol, 0);
          offSolfeggioGain.connect(offlineMasterGain);

          const freqL = safeNum(this.solfeggioFreqL !== undefined ? this.solfeggioFreqL : this.solfeggioFreq, 528);
          const freqR = safeNum(this.solfeggioFreqR !== undefined ? this.solfeggioFreqR : this.solfeggioFreq, 528);

          if (this.isSolfeggioBinaural && freqL !== freqR && numChannels === 2) {
            const solOscL = offlineCtx.createOscillator();
            solOscL.type = 'sine';
            solOscL.frequency.setValueAtTime(freqL, 0);

            const solOscR = offlineCtx.createOscillator();
            solOscR.type = 'sine';
            solOscR.frequency.setValueAtTime(freqR, 0);

            const offSolfeggioMerger = offlineCtx.createChannelMerger(2);
            solOscL.connect(offSolfeggioMerger, 0, 0);
            solOscR.connect(offSolfeggioMerger, 0, 1);
            offSolfeggioMerger.connect(offSolfeggioGain);
            solOscL.start(0);
            solOscR.start(0);
            solOscL.stop(segDur);
            solOscR.stop(segDur);
          } else {
            const solOsc = offlineCtx.createOscillator();
            solOsc.type = 'sine';
            solOsc.frequency.setValueAtTime(freqL, 0);
            solOsc.connect(offSolfeggioGain);
            solOsc.start(0);
            solOsc.stop(segDur);
          }
        }

        /* ?뚰듃 3-1: Rife 二쇳뙆???덉떆??*/
        const isRifeOn = (recipeType === 'rife' || (recipeType === 'all' && this.isRifeActive)) && (safeNum(this.rifeVolume, 0) > 0.001) && this.rifeFreqs && this.rifeFreqs.length > 0;
        if (isRifeOn) {
          const offRifeGain = offlineCtx.createGain();
          const finalRifeVol = safeNum(this.rifeVolume, 0.8);
          offRifeGain.gain.setValueAtTime(finalRifeVol, 0);
          offRifeGain.connect(offlineMasterGain);

          if (this.isRifeHold) {
            const targetFreq = safeNum(this.rifeFreqs[this.rifeCycleIndex || 0], 528);
            const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);
            const cycleGain = offlineCtx.createGain();
            cycleGain.gain.setValueAtTime(targetGain, 0);
            cycleGain.connect(offRifeGain);
            this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, 0, segDur, true, numChannels);
          } else {
            const rifeInterval = safeNum(this.rifeSweepInterval, 8.0);
            const crossfadeTime = Math.min(3.0, rifeInterval * 0.35);
            const totalRifeCycles = Math.ceil(durationSeconds / rifeInterval);

            for (let i = 0; i < totalRifeCycles; i++) {
              const absStartTime = i * rifeInterval;
              const absEndTime = absStartTime + rifeInterval + crossfadeTime;
              if (absStartTime >= durationSeconds) break;
              if (absEndTime <= segStart) continue;
              if (absStartTime >= segEnd) break;

              const targetFreq = safeNum(this.rifeFreqs[i % this.rifeFreqs.length], 528);
              const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);

              const oscStart = Math.max(0, absStartTime - segStart);
              const oscStop = Math.min(segDur, absEndTime - segStart);

              if (oscStop > oscStart) {
                const cycleGain = offlineCtx.createGain();
                cycleGain.connect(offRifeGain);

                const t1 = absStartTime + crossfadeTime - segStart;
                const t2 = absStartTime + rifeInterval - segStart;
                const t3 = absStartTime + rifeInterval + crossfadeTime - segStart;

                const computeGainAtAbsTime = (absT) => {
                  if (absT <= absStartTime) return 0.0001;
                  if (absT <= absStartTime + crossfadeTime) {
                    return 0.0001 + (targetGain - 0.0001) * ((absT - absStartTime) / crossfadeTime);
                  }
                  if (absT <= absStartTime + rifeInterval) return targetGain;
                  if (absT <= absStartTime + rifeInterval + crossfadeTime) {
                    return targetGain - (targetGain - 0.0001) * ((absT - (absStartTime + rifeInterval)) / crossfadeTime);
                  }
                  return 0.0001;
                };

                const startGainVal = safeNum(computeGainAtAbsTime(oscStart + segStart), 0.0001);
                cycleGain.gain.setValueAtTime(startGainVal, oscStart);

                if (t1 > oscStart && t1 < segDur) cycleGain.gain.linearRampToValueAtTime(targetGain, t1);
                if (t2 > oscStart && t2 < segDur) cycleGain.gain.setValueAtTime(targetGain, t2);
                if (t3 > oscStart && t3 <= segDur) {
                  cycleGain.gain.linearRampToValueAtTime(0.0001, t3);
                } else if (t3 > segDur && t2 < segDur) {
                  const endGainVal = safeNum(computeGainAtAbsTime(segEnd), 0.0001);
                  cycleGain.gain.linearRampToValueAtTime(endGainVal, segDur);
                }
                this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, oscStart, oscStop, true, numChannels);
              }
            }
          }
        }

        /* ?뚰듃 3-2: VIP 二쇳뙆???덉떆??*/
        const isVipOn = (recipeType === 'vip' || (recipeType === 'all' && this.isVipActive)) && (safeNum(this.vipVolume, 0) > 0.001) && this.vipFreqs && this.vipFreqs.length > 0;
        if (isVipOn) {
          const offVipGain = offlineCtx.createGain();
          const finalVipVol = safeNum(this.vipVolume, 0.8);
          offVipGain.gain.setValueAtTime(finalVipVol, 0);
          offVipGain.connect(offlineMasterGain);

          if (this.isVipHold) {
            const targetFreq = safeNum(this.vipFreqs[this.vipCycleIndex || 0], 528);
            const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);
            const cycleGain = offlineCtx.createGain();
            cycleGain.gain.setValueAtTime(targetGain, 0);
            cycleGain.connect(offVipGain);
            this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, 0, segDur, true, numChannels);
          } else {
            const vipInterval = safeNum(this.vipSweepInterval, 8.0);
            const crossfadeTime = Math.min(3.0, vipInterval * 0.35);
            const totalVipCycles = Math.ceil(durationSeconds / vipInterval);

            for (let i = 0; i < totalVipCycles; i++) {
              const absStartTime = i * vipInterval;
              const absEndTime = absStartTime + vipInterval + crossfadeTime;
              if (absStartTime >= durationSeconds) break;
              if (absEndTime <= segStart) continue;
              if (absStartTime >= segEnd) break;

              const targetFreq = safeNum(this.vipFreqs[i % this.vipFreqs.length], 528);
              const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);

              const oscStart = Math.max(0, absStartTime - segStart);
              const oscStop = Math.min(segDur, absEndTime - segStart);

              if (oscStop > oscStart) {
                const cycleGain = offlineCtx.createGain();
                cycleGain.connect(offVipGain);

                const t1 = absStartTime + crossfadeTime - segStart;
                const t2 = absStartTime + vipInterval - segStart;
                const t3 = absStartTime + vipInterval + crossfadeTime - segStart;

                const computeGainAtAbsTime = (absT) => {
                  if (absT <= absStartTime) return 0.0001;
                  if (absT <= absStartTime + crossfadeTime) {
                    return 0.0001 + (targetGain - 0.0001) * ((absT - absStartTime) / crossfadeTime);
                  }
                  if (absT <= absStartTime + vipInterval) return targetGain;
                  if (absT <= absStartTime + vipInterval + crossfadeTime) {
                    return targetGain - (targetGain - 0.0001) * ((absT - (absStartTime + vipInterval)) / crossfadeTime);
                  }
                  return 0.0001;
                };

                const startGainVal = safeNum(computeGainAtAbsTime(oscStart + segStart), 0.0001);
                cycleGain.gain.setValueAtTime(startGainVal, oscStart);

                if (t1 > oscStart && t1 < segDur) cycleGain.gain.linearRampToValueAtTime(targetGain, t1);
                if (t2 > oscStart && t2 < segDur) cycleGain.gain.setValueAtTime(targetGain, t2);
                if (t3 > oscStart && t3 <= segDur) {
                  cycleGain.gain.linearRampToValueAtTime(0.0001, t3);
                } else if (t3 > segDur && t2 < segDur) {
                  const endGainVal = safeNum(computeGainAtAbsTime(segEnd), 0.0001);
                  cycleGain.gain.linearRampToValueAtTime(endGainVal, segDur);
                }
                this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, oscStart, oscStop, true, numChannels);
              }
            }
          }
        }

        /* ?뚰듃 3-3: Custom Studio 留욎땄 二쇳뙆???덉떆??*/
        const isCustomOn = (recipeType === 'custom' || (recipeType === 'all' && this.isCustomActive)) && this.customFreqs && this.customFreqs.length > 0;
        if (isCustomOn) {
          const offCustomGain = offlineCtx.createGain();
          const finalCustomVol = (recipeType === 'custom') ? 0.85 : safeNum(this.customVolume, 0.8);
          offCustomGain.gain.setValueAtTime(finalCustomVol, 0);
          offCustomGain.connect(offlineMasterGain);

          if (this.isCustomHold) {
            const targetFreq = safeNum(this.customFreqs[this.customCycleIndex || 0], 528);
            const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);
            const cycleGain = offlineCtx.createGain();
            cycleGain.gain.setValueAtTime(targetGain, 0);
            cycleGain.connect(offCustomGain);
            this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, 0, segDur, true, numChannels);
          } else {
            const customInterval = safeNum(this.customSweepInterval, 180.0);
            const crossfadeTime = Math.min(3.0, customInterval * 0.35);
            const totalCustomCycles = Math.ceil(durationSeconds / customInterval);

            for (let i = 0; i < totalCustomCycles; i++) {
              const absStartTime = i * customInterval;
              const absEndTime = absStartTime + customInterval + crossfadeTime;
              if (absStartTime >= durationSeconds) break;
              if (absEndTime <= segStart) continue;
              if (absStartTime >= segEnd) break;

              const targetFreq = safeNum(this.customFreqs[i % this.customFreqs.length], 528);
              const targetGain = safeNum(this.computePerceptualGain(targetFreq), 0.3);

              const oscStart = Math.max(0, absStartTime - segStart);
              const oscStop = Math.min(segDur, absEndTime - segStart);

              if (oscStop > oscStart) {
                const cycleGain = offlineCtx.createGain();
                cycleGain.connect(offCustomGain);

                const t1 = absStartTime + crossfadeTime - segStart;
                const t2 = absStartTime + customInterval - segStart;
                const t3 = absStartTime + customInterval + crossfadeTime - segStart;

                const computeGainAtAbsTime = (absT) => {
                  if (absT <= absStartTime) return 0.0001;
                  if (absT <= absStartTime + crossfadeTime) {
                    return 0.0001 + (targetGain - 0.0001) * ((absT - absStartTime) / crossfadeTime);
                  }
                  if (absT <= absStartTime + customInterval) return targetGain;
                  if (absT <= absStartTime + customInterval + crossfadeTime) {
                    return targetGain - (targetGain - 0.0001) * ((absT - (absStartTime + customInterval)) / crossfadeTime);
                  }
                  return 0.0001;
                };

                const startGainVal = safeNum(computeGainAtAbsTime(oscStart + segStart), 0.0001);
                cycleGain.gain.setValueAtTime(startGainVal, oscStart);

                if (t1 > oscStart && t1 < segDur) cycleGain.gain.linearRampToValueAtTime(targetGain, t1);
                if (t2 > oscStart && t2 < segDur) cycleGain.gain.setValueAtTime(targetGain, t2);
                if (t3 > oscStart && t3 <= segDur) {
                  cycleGain.gain.linearRampToValueAtTime(0.0001, t3);
                } else if (t3 > segDur && t2 < segDur) {
                  const endGainVal = safeNum(computeGainAtAbsTime(segEnd), 0.0001);
                  cycleGain.gain.linearRampToValueAtTime(endGainVal, segDur);
                }
                this.createSynthesisVoiceNodes(offlineCtx, targetFreq, cycleGain, oscStart, oscStop, true, numChannels);
              }
            }
          }
        }

        /* ?뚰듃 4: ?먯뿰??& BGM 誘뱀꽌 */
        const isNatureOn = (recipeType === 'custom') ? (customBgmTrack && customBgmTrack !== 'off' && customBgmTrack !== 'none') : this.isNatureActive;
        if (isNatureOn) {
          const offNatureMasterGain = offlineCtx.createGain();
          const natureMasterVol = (recipeType === 'custom') ? 1.0 : safeNum(this.natureMasterVolume, 0.8);
          offNatureMasterGain.gain.setValueAtTime(natureMasterVol, 0);
          offNatureMasterGain.connect(offlineMasterGain);

          const setupOfflineBuffer = (buffer, key) => {
            const vol = getOfflineVolume(key);
            if (vol <= 0.001 || !buffer) return;
            const gNode = offlineCtx.createGain();
            gNode.gain.setValueAtTime(vol, 0);
            gNode.connect(offNatureMasterGain);

            const src = offlineCtx.createBufferSource();
            src.buffer = buffer;
            src.loop = true;
            src.connect(gNode);
            src.start(0);
            src.stop(segDur);
          };

          setupOfflineBuffer(this.rainBuffer, 'rain');
          setupOfflineBuffer(this.campfireBuffer, 'campfire');
          setupOfflineBuffer(this.streamBuffer, 'stream');
          setupOfflineBuffer(this.ambientpadBuffer, 'ambientpad');

          /* ?뚮룄?뚮━ */
          const wavesVol = getOfflineVolume('waves');
          if (wavesVol > 0.001 && this.brownNoiseBuffer) {
            const offWavesGain = offlineCtx.createGain();
            offWavesGain.gain.setValueAtTime(wavesVol, 0);
            offWavesGain.connect(offNatureMasterGain);

            const wavesFilter = offlineCtx.createBiquadFilter();
            wavesFilter.type = 'lowpass';
            wavesFilter.frequency.setValueAtTime(350, 0);

            const offWavesSource = offlineCtx.createBufferSource();
            offWavesSource.buffer = this.brownNoiseBuffer;
            offWavesSource.loop = true;

            const wavesModulatorGain = offlineCtx.createGain();
            wavesModulatorGain.gain.setValueAtTime(0.75, 0);

            offWavesSource.connect(wavesFilter);
            wavesFilter.connect(wavesModulatorGain);
            wavesModulatorGain.connect(offWavesGain);

            const numWaveCycles = Math.ceil(durationSeconds / 8);
            for (let i = 0; i < numWaveCycles; i++) {
              const absTime = i * 8;
              if (absTime >= segEnd) break;
              if (absTime < segStart) continue;
              const t = absTime - segStart;
              const targetGainVal = (i % 2 === 0) ? 1.2 : 0.25;
              wavesModulatorGain.gain.linearRampToValueAtTime(targetGainVal, t);
            }
            offWavesSource.start(0);
            offWavesSource.stop(segDur);
          }

          /* ?대깽??湲곕컲 ?먯뿰??*/
          if (!isUltraLong) {
            const seagullVol = getOfflineVolume('seagull');
            if (seagullVol > 0.01) {
              const offSeagullGain = offlineCtx.createGain();
              offSeagullGain.gain.setValueAtTime(seagullVol, 0);
              offSeagullGain.connect(offNatureMasterGain);

              const seagullInterval = 12;
              const numGulls = Math.floor(durationSeconds / seagullInterval);
              for (let i = 0; i < numGulls; i++) {
                const absBaseTime = 2 + i * seagullInterval + Math.random() * 4;
                if (absBaseTime >= segEnd) break;
                if (absBaseTime < segStart) continue;
                const time = absBaseTime - segStart;
                if (time >= 0 && time + 0.8 < segDur) {
                  const osc = offlineCtx.createOscillator();
                  osc.type = 'triangle';
                  const vNode = offlineCtx.createGain();
                  vNode.gain.setValueAtTime(0, time);
                  vNode.gain.linearRampToValueAtTime(seagullVol * 1.0, time + 0.1);
                  vNode.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
                  osc.frequency.setValueAtTime(750, time);
                  osc.frequency.exponentialRampToValueAtTime(1150, time + 0.15);
                  osc.frequency.exponentialRampToValueAtTime(550, time + 0.5);
                  osc.connect(vNode);
                  vNode.connect(offSeagullGain);
                  osc.start(time);
                  osc.stop(time + 0.8);
                }
              }
            }

            const bowlVol = getOfflineVolume('singingbowl');
            if (bowlVol > 0.01) {
              const offSingingBowlGain = offlineCtx.createGain();
              offSingingBowlGain.gain.setValueAtTime(bowlVol, 0);
              offSingingBowlGain.connect(offNatureMasterGain);

              const bowlInterval = 14;
              const numStrikes = Math.floor(durationSeconds / bowlInterval);
              const freqs = [160, 242, 321, 483, 642, 804];
              const gains = [0.8, 0.5, 0.4, 0.25, 0.12, 0.08];

              for (let i = 0; i < numStrikes; i++) {
                const absTime = i * bowlInterval;
                if (absTime >= segEnd) break;
                if (absTime < segStart) continue;
                const time = absTime - segStart;
                if (time + 10.0 < segDur) {
                  freqs.forEach((freq, idx) => {
                    const osc = offlineCtx.createOscillator();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, time);

                    const wobble = offlineCtx.createOscillator();
                    wobble.frequency.setValueAtTime(0.7, time);
                    const wobbleGain = offlineCtx.createGain();
                    wobbleGain.gain.setValueAtTime(1.2, time);
                    wobble.connect(wobbleGain);
                    wobbleGain.connect(osc.frequency);

                    const gNode = offlineCtx.createGain();
                    gNode.gain.setValueAtTime(0, time);
                    gNode.gain.linearRampToValueAtTime(gains[idx] * bowlVol * 1.0, time + 0.02);
                    gNode.gain.exponentialRampToValueAtTime(0.001, time + 9.0);

                    osc.connect(gNode);
                    gNode.connect(offSingingBowlGain);
                    wobble.start(time);
                    osc.start(time);
                    wobble.stop(time + 10.0);
                    osc.stop(time + 10.0);
                  });
                }
              }
            }

            const fbVol = getOfflineVolume('forestbirds');
            if (fbVol > 0.01) {
              const offForestBirdsGain = offlineCtx.createGain();
              offForestBirdsGain.gain.setValueAtTime(fbVol, 0);
              offForestBirdsGain.connect(offNatureMasterGain);

              const fbInterval = 8;
              const numBirds = Math.floor(durationSeconds / fbInterval);
              for (let i = 0; i < numBirds; i++) {
                const absStartTime = 1 + i * fbInterval + Math.random() * 3;
                if (absStartTime >= segEnd) break;
                if (absStartTime < segStart) continue;
                const startTime = absStartTime - segStart;
                if (startTime >= 0 && startTime < segDur) {
                  const count = 3 + Math.floor(Math.random() * 3);
                  const baseFreq = 2000 + Math.random() * 500;
                  for (let j = 0; j < count; j++) {
                    const time = startTime + j * 0.15 + Math.random() * 0.05;
                    const duration = 0.08 + Math.random() * 0.04;
                    if (time + duration < segDur) {
                      const osc = offlineCtx.createOscillator();
                      osc.type = 'sine';
                      const vNode = offlineCtx.createGain();
                      vNode.gain.setValueAtTime(0, time);
                      vNode.gain.linearRampToValueAtTime(fbVol * 0.8, time + 0.01);
                      vNode.gain.exponentialRampToValueAtTime(0.001, time + duration);
                      osc.frequency.setValueAtTime(baseFreq, time);
                      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, time + duration * 0.4);
                      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, time + duration);
                      osc.connect(vNode);
                      vNode.connect(offForestBirdsGain);
                      osc.start(time);
                      osc.stop(time + duration + 0.02);
                    }
                  }
                }
              }
            }

            const mbVol = getOfflineVolume('mountainbirds');
            if (mbVol > 0.01) {
              const offMountainBirdsGain = offlineCtx.createGain();
              offMountainBirdsGain.gain.setValueAtTime(mbVol, 0);
              offMountainBirdsGain.connect(offNatureMasterGain);

              const mbInterval = 4.0;
              const numPhrases = Math.floor(durationSeconds / mbInterval);
              for (let i = 0; i < numPhrases; i++) {
                const absTime = 1.5 + i * mbInterval + Math.random() * 2;
                if (absTime >= segEnd) break;
                if (absTime < segStart) continue;
                const time = absTime - segStart;
                if (time >= 0 && time + 0.6 < segDur) {
                  const osc = offlineCtx.createOscillator();
                  osc.type = 'sine';
                  const vNode = offlineCtx.createGain();
                  vNode.gain.setValueAtTime(0, time);
                  vNode.gain.linearRampToValueAtTime(mbVol * 0.5, time + 0.03);
                  vNode.gain.exponentialRampToValueAtTime(0.001, time + 0.55);
                  osc.frequency.setValueAtTime(3200 + Math.random() * 600, time);
                  osc.frequency.exponentialRampToValueAtTime(1800, time + 0.5);
                  osc.connect(vNode);
                  vNode.connect(offMountainBirdsGain);
                  osc.start(time);
                  osc.stop(time + 0.6);
                }
              }
            }
          }
        }

        /* ?ㅼ젣 ?ㅽ봽?쇱씤 ?뚮뜑留??ㅽ뻾 */
        const renderedBuffer = await offlineCtx.startRendering();

        /* WAV ?곗씠??泥?겕 蹂??*/
        const chunkBlobs = this.bufferToWavChunks(renderedBuffer, blockAlign, numChannels);
        chunkBlobs.forEach(b => blobs.push(b));

        const percent = Math.min(Math.round(((seg + 1) / numSegments) * 99), 99);
        if (progressCallback) progressCallback(percent);

      } catch (err) {
        console.error(`[SolavreSound] ?멸렇癒쇳듃 ${seg + 1}/${numSegments} ?뚮뜑留??ㅽ뙣:`, err);
        throw err;
      }
    }

    if (progressCallback) progressCallback(100);
    return new Blob(blobs, { type: 'audio/wav' });
  }
  bufferToWavChunks(buffer, blockAlign, numOfChan) {
    const totalFrames = buffer.length;
    const blobs = [];
    const chunkSize = 1000000; // 1,000,000 프레임씩 분할 가공
    const chanDataL = buffer.getChannelData(0);
    const chanDataR = numOfChan === 2 ? buffer.getChannelData(1) : null;
    
    for (let offset = 0; offset < totalFrames; offset += chunkSize) {
      const end = Math.min(offset + chunkSize, totalFrames);
      const framesInChunk = end - offset;
      
      // DataView 오버헤드를 극복하기 위해 Int16Array 직접 메모리 기입 방식 도입 (10배 이상 고속화)
      const int16Array = new Int16Array(framesInChunk * numOfChan);
      
      let writeIdx = 0;
      if (numOfChan === 2) {
        for (let i = offset; i < end; i++) {
          // Math.max / Math.min 함수 호출 오버헤드를 삼항연산자로 리팩토링하여 CPU 연산량 대폭 절감
          let sL = chanDataL[i];
          if (isNaN(sL)) sL = 0;
          sL = sL > 1 ? 1 : (sL < -1 ? -1 : sL);
          int16Array[writeIdx++] = sL < 0 ? sL * 0x8000 : sL * 0x7FFF;
          
          let sR = chanDataR[i];
          if (isNaN(sR)) sR = 0;
          sR = sR > 1 ? 1 : (sR < -1 ? -1 : sR);
          int16Array[writeIdx++] = sR < 0 ? sR * 0x8000 : sR * 0x7FFF;
        }
      } else {
        for (let i = offset; i < end; i++) {
          let sL = chanDataL[i];
          if (isNaN(sL)) sL = 0;
          sL = sL > 1 ? 1 : (sL < -1 ? -1 : sL);
          int16Array[writeIdx++] = sL < 0 ? sL * 0x8000 : sL * 0x7FFF;
        }
      }
      
      blobs.push(int16Array.buffer);
    }
    return blobs;
  }

  /**
   * 문자열을 바이트 뷰에 적절히 기입해주는 헬퍼 함수입니다.
   */
  writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  /**
   * Rife 주파수에 따른 볼륨 부스트 감쇄율을 반환합니다. (등청감 게인 연동)
   */
  getRifeBoost(freq) {
    return this.computePerceptualGain(freq);
  }

  /**
   * Rife 주파수 크로스페이드 인 시간을 반환합니다. (2.5초 안정 크로스페이드)
   */
  getRifeFadeInTime(freq, isLowToAudible) {
    return 2.5;
  }

  /**
   * [신규] 갈매기 1회성 테스트 재생 API (볼륨 조절 피드백용)
   */
  playSeagullOnce(volume = 0.5) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    
    const osc = this.audioCtx.createOscillator();
    osc.type = 'triangle';
    
    const vNode = this.audioCtx.createGain();
    vNode.gain.setValueAtTime(0, now);
    vNode.gain.linearRampToValueAtTime(volume * 0.8, now + 0.1);
    vNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(1150, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(550, now + 0.5);
    
    osc.connect(vNode);
    vNode.connect(this.natureMasterGain);
    
    osc.start(now);
    osc.stop(now + 0.8);
    this.activeNodes.push(osc);
    setTimeout(() => {
      try { osc.disconnect(); } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== osc);
    }, 1000);
  }

  /**
   * [신규] 숲속 새소리 1회성 테스트 재생 API (볼륨 조절 피드백용)
   */
  playForestBirdsOnce(volume = 0.5) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    const count = 3;
    const baseFreq = 2000 + Math.random() * 500;
    
    for (let j = 0; j < count; j++) {
      const time = now + j * 0.15 + Math.random() * 0.05;
      const duration = 0.08 + Math.random() * 0.04;
      
      const osc = this.audioCtx.createOscillator();
      osc.type = 'sine';
      
      const vNode = this.audioCtx.createGain();
      vNode.gain.setValueAtTime(0, time);
      vNode.gain.linearRampToValueAtTime(volume * 0.7, time + 0.01);
      vNode.gain.exponentialRampToValueAtTime(0.001, time + duration);
      
      osc.frequency.setValueAtTime(baseFreq, time);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, time + duration * 0.4);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, time + duration);
      
      osc.connect(vNode);
      vNode.connect(this.natureMasterGain);
      
      osc.start(time);
      osc.stop(time + duration + 0.02);
      this.activeNodes.push(osc);
      
      const targetOsc = osc;
      setTimeout(() => {
        try { targetOsc.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== targetOsc);
      }, (duration + 0.5) * 1000);
    }
  }

  /**
   * [신규] 수면 뻐꾸기 1회성 테스트 재생 API (볼륨 조절 피드백용)
   */
  playCuckooSleepOnce(volume = 0.5) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    const baseFreq = 520 + Math.random() * 40;
    
    const playCuck = (time) => {
      const osc1 = this.audioCtx.createOscillator();
      osc1.type = 'sine';
      const v1 = this.audioCtx.createGain();
      v1.gain.setValueAtTime(0, time);
      v1.gain.linearRampToValueAtTime(volume * 0.7, time + 0.06);
      v1.gain.exponentialRampToValueAtTime(0.001, time + 0.28);
      osc1.frequency.setValueAtTime(baseFreq * 1.25, time);
      osc1.frequency.linearRampToValueAtTime(baseFreq * 1.22, time + 0.25);
      
      osc1.connect(v1);
      v1.connect(this.natureMasterGain);
      osc1.start(time);
      osc1.stop(time + 0.3);
      this.activeNodes.push(osc1);
      
      const start2 = time + 0.28;
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = 'sine';
      const v2 = this.audioCtx.createGain();
      v2.gain.setValueAtTime(0, start2);
      v2.gain.linearRampToValueAtTime(volume * 0.6, start2 + 0.08);
      v2.gain.exponentialRampToValueAtTime(0.001, start2 + 0.45);
      osc2.frequency.setValueAtTime(baseFreq, start2);
      osc2.frequency.linearRampToValueAtTime(baseFreq * 0.96, start2 + 0.4);
      
      osc2.connect(v2);
      v2.connect(this.natureMasterGain);
      osc2.start(start2);
      osc2.stop(start2 + 0.5);
      this.activeNodes.push(osc2);
      
      setTimeout(() => {
        try { osc1.disconnect(); osc2.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== osc1 && n !== osc2);
      }, 1000);
    };
    
    playCuck(now);
  }

  /**
   * [신규] 풀벌레 1회성 테스트 재생 API (볼륨 조절 피드백용)
   */
  playCricketOnce(volume = 0.5) {
    return;
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    const duration = 2.0;
    
    const carrier = this.audioCtx.createOscillator();
    carrier.type = 'sine';
    carrier.frequency.setValueAtTime(4200 + Math.random() * 200, now);
    
    const fastAmLfo = this.audioCtx.createOscillator();
    fastAmLfo.type = 'sine';
    fastAmLfo.frequency.setValueAtTime(35 + Math.random() * 5, now);
    
    const fastAmGain = this.audioCtx.createGain();
    fastAmGain.gain.setValueAtTime(0.5, now);
    
    const fastLfoDepth = this.audioCtx.createGain();
    fastLfoDepth.gain.setValueAtTime(0.45, now);
    
    fastAmLfo.connect(fastLfoDepth);
    fastLfoDepth.connect(fastAmGain.gain);
    
    const slowAmLfo = this.audioCtx.createOscillator();
    slowAmLfo.type = 'sine';
    slowAmLfo.frequency.setValueAtTime(4.2, now);
    
    const slowAmGain = this.audioCtx.createGain();
    slowAmGain.gain.setValueAtTime(0.5, now);
    
    const slowLfoDepth = this.audioCtx.createGain();
    slowLfoDepth.gain.setValueAtTime(0.5, now);
    
    slowAmLfo.connect(slowLfoDepth);
    slowLfoDepth.connect(slowAmGain.gain);
    
    const mainGain = this.audioCtx.createGain();
    mainGain.gain.setValueAtTime(0, now);
    mainGain.gain.linearRampToValueAtTime(volume * 0.15, now + 0.15);
    mainGain.gain.setValueAtTime(volume * 0.15, now + duration - 0.2);
    mainGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    carrier.connect(fastAmGain);
    fastAmGain.connect(slowAmGain);
    slowAmGain.connect(mainGain);
    mainGain.connect(this.natureMasterGain);
    
    fastAmLfo.start(now);
    slowAmLfo.start(now);
    carrier.start(now);
    
    fastAmLfo.stop(now + duration);
    slowAmLfo.stop(now + duration);
    carrier.stop(now + duration);
    
    this.activeNodes.push(carrier, fastAmLfo, slowAmLfo);
    setTimeout(() => {
      try {
        carrier.disconnect();
        fastAmLfo.disconnect();
        slowAmLfo.disconnect();
      } catch(e) {}
      this.activeNodes = this.activeNodes.filter(n => n !== carrier && n !== fastAmLfo && n !== slowAmLfo);
    }, (duration + 0.5) * 1000);
  }

  /**
   * [신규] 깊은 산속 새소리 1회성 테스트 재생 API (볼륨 조절 피드백용)
   */
  playMountainBirdsOnce(volume = 0.5) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;
    
    const playSine = (t, dur, fStart, fEnd, pan, volScale) => {
      const osc = this.audioCtx.createOscillator();
      osc.type = 'sine';
      const volNode = this.audioCtx.createGain();
      volNode.gain.setValueAtTime(0, t);
      volNode.gain.linearRampToValueAtTime(volume * 0.28 * volScale, t + dur * 0.15);
      volNode.gain.setValueAtTime(volume * 0.28 * volScale, t + dur - 0.03);
      volNode.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.frequency.setValueAtTime(fStart, t);
      osc.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
      
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, t);
      
      osc.connect(panner);
      panner.connect(volNode);
      volNode.connect(this.natureMasterGain);
      osc.start(t);
      osc.stop(t + dur + 0.05);
      this.activeNodes.push(osc);
      setTimeout(() => {
        try { osc.disconnect(); panner.disconnect(); } catch(e) {}
        this.activeNodes = this.activeNodes.filter(n => n !== osc);
      }, (dur + 0.5) * 1000);
    };

    const count = 2;
    const baseF = 2900 + Math.random() * 200;
    for (let j = 0; j < count; j++) {
      playSine(now + j * 0.11, 0.05, baseF, baseF * 1.15, -0.2, 0.9);
    }
  }
}


