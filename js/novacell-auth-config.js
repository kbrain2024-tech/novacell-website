/*
 * NovaCell 공통 회원 시스템 설정
 * Supabase 프로젝트: https://pemxrfxzkprahhwuhqsi.supabase.co
 * anon/publishable key는 브라우저 공개용 키입니다. service_role 키는 절대 여기에 넣지 마세요.
 */
window.NOVACELL_AUTH_CONFIG = Object.freeze({
  supabaseUrl: "https://pemxrfxzkprahhwuhqsi.supabase.co",
  supabaseAnonKey: "sb_publishable_9PSDP08GzyMYd4kXVn3bCw_Iwfdw7-w",
  mainSiteUrl: "https://novacell.kr",
  reflexAppUrl: "https://guide.novacell.kr",
  healingAppUrl: "https://healing.novacell.kr",
  sessionStorageKey: "novacell-auth-session-v1",
  products: Object.freeze({
    reflex: "reflex_therapy_1y",
    healing: "healing_points_1y"
  })
});
