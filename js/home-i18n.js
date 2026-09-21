(function () {
  'use strict';

  var language = new URLSearchParams(window.location.search).get('lang');
  if (language !== 'ko') return;

  document.documentElement.lang = 'ko';
  document.title = 'NovaCell Therapy | 박창혁 박사의 바이오일렉트릭 전압 의학 시스템';

  var translations = {
    "Global Consultation:": "글로벌 상담:",
    "Book Consultation": "상담 신청",
    "Register Now: NovaCell Master Class": "NovaCell 마스터 클래스 등록",
    "Reflex Therapy Guide": "리플렉스 테라피 가이드",
    "Contact": "문의",
    "Videos": "동영상",
    "Resources": "자료실",
    "Events & Schedule": "행사 및 일정",
    "KR (한국어)": "EN (English)",
    "Bio-electric Voltage Medicine": "바이오일렉트릭 전압 의학",
    "How It Works": "작동 원리",
    "Mechanism Overview": "작동 원리 개요",
    "What is Healing Voltage?": "치유 전압이란?",
    "Neural Signaling": "신경 신호",
    "System": "시스템",
    "NovaCell System Overview": "NovaCell 시스템 개요",
    "Why NovaCell?": "왜 NovaCell인가?",
    "Protocols": "프로토콜",
    "Clinical Protocol Overview": "임상 프로토콜 개요",
    "Support Areas": "적용 분야",
    "Chronic Pain Relief": "만성 통증 관리",
    "Energy & Vitality Recovery": "에너지와 활력 회복",
    "Nervous System Balance": "신경계 균형",
    "Inflammation & Tissue Repair": "염증 및 조직 회복",
    "Sleep & Stress Management": "수면 및 스트레스 관리",
    "Whole-Body Recovery": "전신 회복",
    "Solutions": "맞춤 솔루션",
    "Education": "교육",
    "Master Class": "마스터 클래스",
    "Event Calendar & Seminars": "행사 일정 및 세미나",
    "Support": "고객지원",
    "Contact Us": "문의하기",
    "Video Library": "동영상 자료실",
    "Resources & Downloads": "자료 및 다운로드",
    "Free Consultation": "무료 상담",
    "DR. CHANG-HYUK PARK'S BIO-ELECTRIC SYSTEM": "박창혁 박사의 바이오일렉트릭 시스템",
    "Align Polarity.": "극성을 정렬하고",
    "Restore Voltage.": "전압을 회복하여",
    "Reclaim Vital Health.": "건강한 활력을 되찾습니다.",
    "is a premier bio-electric healing system based on Dr. Chang-Hyuk Park's clinically validated": "는 박창혁 박사의 임상 경험을 바탕으로 개발된 바이오일렉트릭 케어 시스템입니다.",
    "Through real-time biofeedback adaptive microcurrent technology, it restores optimal cellular voltage, eases chronic pain, revitalizes energy, and balances the autonomic nervous system.": "실시간 바이오피드백 기반의 미세전류 기술을 통해 세포 전압과 신경 신호, 에너지 및 자율신경계 균형을 지원합니다.",
    "Cellular Voltage (-50mV) · Neural Signaling · Whole-Body Energy Homeostasis": "세포 전압(-50mV) · 신경 신호 · 전신 에너지 균형",
    "Request Live Demo": "실시간 시연 신청",
    "Explore The Science": "과학적 원리 보기",
    "Explore Reflex Therapy Guide": "리플렉스 테라피 가이드 보기",
    "NovaCell Official Bio-System": "NovaCell 공식 바이오 시스템",
    "NovaCell Digital Learning": "NovaCell 디지털 학습",
    "NovaCell Reflex Therapy Guide": "NovaCell 리플렉스 테라피 가이드",
    "1-Year Pass": "1년 이용권",
    "Learn hand and foot reflexology with clear point maps, guided treatment sequences, eight system-based programs, Academy lessons, quizzes, and practical evaluation tools.": "명확한 손·발 반사점 지도, 단계별 작업 순서, 8개 계통별 프로그램, Academy 학습, 퀴즈와 실기평가 도구를 이용할 수 있습니다.",
    "/ 365 days": "/ 365일 이용",
    "View Reflex Therapy Guide": "리플렉스 테라피 가이드 보기",
    "Hand & Foot Maps": "손·발 반사점 지도",
    "Guided sessions · Academy · Practice evaluation": "Guided Session · Academy · 실기평가",
    "Core Scientific Principle": "핵심 과학 원리",
    "Healing Begins with Electrical Function & Cellular Voltage": "치유는 전기적 기능과 세포 전압에서 시작됩니다",
    "Every cell in the human body operates as a miniature battery powered by cellular voltage. When electrical signaling and polarity are restored, communication between the brain and systemic cells is re-established, triggering profound self-healing capabilities.": "인체의 모든 세포는 세포 전압으로 작동하는 작은 배터리와 같습니다. 전기적 신호와 극성의 균형이 회복되면 뇌와 전신 세포 사이의 소통이 다시 원활해집니다.",
    "01. Neural Communication": "01. 신경 신호 전달",
    "02. Cellular Voltage Restoration": "02. 세포 전압 회복",
    "03. Autonomic Homeostasis": "03. 자율신경 항상성",
    "Consult With Bio-electric Specialists": "바이오일렉트릭 전문가 상담",
    "Unified Integrated Platform": "통합 플랫폼",
    "What Makes the NovaCell System Unique?": "NovaCell 시스템은 무엇이 특별한가요?",
    "Adaptive Biofeedback Technology": "적응형 바이오피드백 기술",
    "NovaCell Therapy Bio-System": "NovaCell Therapy 바이오 시스템",
    "Request Full Device Demonstration": "장비 시연 신청",
    "View Clinical Protocols": "임상 프로토콜 보기",
    "Structured Roadmap": "체계적인 진행 단계",
    "NovaCell's 3-Phase Systematic Healing Protocol": "NovaCell 3단계 체계적 회복 프로토콜",
    "Phase 1: Optimize": "1단계: 최적화",
    "Phase 2: Reset": "2단계: 리셋",
    "Phase 3: Deep Recovery": "3단계: 심층 회복",
    "Schedule Protocol Consultation": "프로토콜 상담 신청",
    "Clinical Applications": "임상 적용 분야",
    "6 Key Health Pillars Supported by NovaCell": "NovaCell이 지원하는 6가지 건강 영역",
    "Low Energy & Chronic Fatigue": "에너지 저하 및 만성 피로",
    "Whole-Body Circulation Support": "전신 순환 지원",
    "Tailored Solutions": "맞춤형 솔루션",
    "Who is NovaCell Therapy Designed For?": "NovaCell Therapy는 누구를 위한 시스템인가요?",
    "Individuals (Home Care)": "개인 및 가정 관리",
    "Clinics & Medical Centers": "의원 및 의료기관",
    "Healthcare Practitioners": "보건의료 전문가",
    "Home Care Consultation": "가정 관리 상담",
    "Clinic Partnership Inquiry": "의료기관 도입 상담",
    "Certification Course Details": "전문가 교육과정 안내",
    "Education & Seminars": "교육 및 세미나",
    "Learn Directly From Dr. Chang-Hyuk Park": "박창혁 박사에게 직접 배우는 교육",
    "Register for Conference": "컨퍼런스 등록",
    "Enroll in Master Class": "마스터 클래스 등록",
    "Reserve Free Seat": "무료 좌석 예약",
    "CONSULTATION & DEMO": "상담 및 시연",
    "Your Journey to Restored Vitality Begins With a Conversation": "활력 회복을 위한 여정은 상담에서 시작됩니다",
    "Learn The Mechanism": "작동 원리 알아보기",
    "Explore & Learn": "둘러보기 및 학습",
    "Global Contact": "글로벌 문의",
    "Global Newsletter": "글로벌 뉴스레터",
    "All rights reserved.": "모든 권리 보유.",
    "Sign In": "로그인",
    "Register": "회원가입",
    "NovaCell Therapy® Consultation & Demo": "NovaCell Therapy® 상담 및 시연",
    "Full Name *": "성명 *",
    "Contact Number / WhatsApp *": "연락처 / WhatsApp *",
    "Consultation Category *": "상담 분야 *",
    "Select Category": "상담 분야 선택",
    "Symptoms or Inquiries (Optional)": "증상 또는 문의 내용(선택)",
    "Submit Consultation Request": "상담 신청 제출"
  };

  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (node) {
    var key = node.nodeValue.replace(/\s+/g, ' ').trim();
    if (translations[key]) node.nodeValue = translations[key];
  });

  var heroTitle = document.querySelector('.hero-content h1');
  var heroLead = document.querySelector('.hero-content .hero-lead');
  var heroBadge = document.querySelector('.hero-content .badge-tag');
  var heroSubtext = document.querySelector('.hero-content .hero-subtext');
  if (heroTitle) heroTitle.innerHTML = '극성을 정렬하고<br>전압을 회복하여<br><span>건강한 활력을 되찾습니다.</span>';
  if (heroLead) heroLead.innerHTML = '<strong>NovaCell Therapy</strong>는 박창혁 박사의 임상 경험을 바탕으로 개발된 바이오일렉트릭 케어 시스템입니다. 실시간 바이오피드백 기반의 미세전류 기술을 통해 세포 전압, 만성 통증, 에너지 및 자율신경계 균형을 지원합니다.';
  if (heroBadge) heroBadge.innerHTML = '<i class="ri-shield-check-fill"></i> 박창혁 박사의 바이오일렉트릭 시스템';
  if (heroSubtext) heroSubtext.innerHTML = '<i class="ri-flashlight-line text-gold"></i> 세포 전압(-50mV) · 신경 신호 · 전신 에너지 균형';

  var reflexTitle = document.querySelector('#reflex-guide h2');
  var reflexDescription = document.querySelector('#reflex-guide .reflex-pass-grid > div:first-child > p');
  var reflexDuration = document.querySelector('#reflex-guide .reflex-pass-price small');
  if (reflexTitle) reflexTitle.innerHTML = 'NovaCell 리플렉스 테라피 가이드<br><span>1년 이용권</span>';
  if (reflexDescription) reflexDescription.textContent = '명확한 손·발 반사점 지도, 단계별 작업 순서, 8개 계통별 프로그램, Academy 학습, 퀴즈와 실기평가 도구를 이용할 수 있습니다.';
  if (reflexDuration) reflexDuration.textContent = '/ 365일 이용';

  var directLink = document.getElementById('directLanguageLink');
  if (directLink) {
    directLink.href = 'index.html';
    directLink.textContent = 'EN (English)';
  }

  document.querySelectorAll('.brand-logo[href="index.html"]').forEach(function (link) {
    link.href = 'index.html?lang=ko';
  });

  document.querySelectorAll('a[href="reflex-guide.html"]').forEach(function (link) {
    link.href = '../ko/reflex-therapy-guide.html';
  });

  var currentText = document.querySelector('.current-lang-text');
  var currentFlag = document.querySelector('.current-lang-flag');
  if (currentText) currentText.textContent = 'KO';
  if (currentFlag) currentFlag.textContent = '🇰🇷';

  document.querySelectorAll('.lang-item').forEach(function (item) {
    item.classList.toggle('active', item.getAttribute('data-lang') === 'ko');
  });
})();
