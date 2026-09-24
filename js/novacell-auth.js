(function () {
  "use strict";

  const cfg = window.NOVACELL_AUTH_CONFIG || {};
  const storageKey = cfg.sessionStorageKey || "novacell-auth-session-v1";

  function configured() {
    return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(cfg.supabaseUrl || "") &&
      /^(?!YOUR_).{20,}$/.test(cfg.supabaseAnonKey || "");
  }

  function headers(token) {
    const value = { "Content-Type": "application/json", apikey: cfg.supabaseAnonKey || "" };
    if (token) value.Authorization = `Bearer ${token}`;
    return value;
  }

  async function request(path, options = {}) {
    if (!configured()) throw new Error("AUTH_NOT_CONFIGURED");
    const response = await fetch(`${cfg.supabaseUrl}${path}`, {
      ...options,
      headers: { ...headers(options.token), ...(options.headers || {}) }
    });
    let data = null;
    try { data = await response.json(); } catch (_) { data = null; }
    if (!response.ok) {
      const error = new Error(data?.msg || data?.message || data?.error_description || "요청을 처리하지 못했습니다.");
      error.status = response.status;
      error.data = data;
      throw error;
    }
    return data;
  }

  function readSession() {
    try { return JSON.parse(localStorage.getItem(storageKey) || "null"); }
    catch (_) { return null; }
  }

  function writeSession(session) {
    if (!session) {
      localStorage.removeItem(storageKey);
      window.dispatchEvent(new CustomEvent("novacell-auth-change", { detail: null }));
      return null;
    }
    const normalized = {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600),
      token_type: session.token_type || "bearer",
      user: session.user || null
    };
    localStorage.setItem(storageKey, JSON.stringify(normalized));
    window.dispatchEvent(new CustomEvent("novacell-auth-change", { detail: normalized }));
    return normalized;
  }

  async function refreshSession(session) {
    if (!session?.refresh_token) return null;
    try {
      const data = await request("/auth/v1/token?grant_type=refresh_token", {
        method: "POST",
        body: JSON.stringify({ refresh_token: session.refresh_token })
      });
      return writeSession(data);
    } catch (_) {
      writeSession(null);
      return null;
    }
  }

  async function getSession() {
    const session = readSession();
    if (!session?.access_token) return null;
    if (Number(session.expires_at || 0) <= Math.floor(Date.now() / 1000) + 90) {
      return refreshSession(session);
    }
    return session;
  }

  async function signUp({ email, password, fullName, redirectTo }) {
    const query = redirectTo ? `?redirect_to=${encodeURIComponent(redirectTo)}` : "";
    return request(`/auth/v1/signup${query}`, {
      method: "POST",
      body: JSON.stringify({ email, password, data: { full_name: fullName || "" } })
    });
  }

  async function signIn({ email, password }) {
    const data = await request("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    return writeSession(data);
  }

  async function signOut() {
    const session = readSession();
    try {
      if (session?.access_token) await request("/auth/v1/logout", { method: "POST", token: session.access_token });
    } catch (_) { /* 로컬 세션은 항상 삭제 */ }
    writeSession(null);
  }

  async function sendPasswordReset(email, redirectTo) {
    return request("/auth/v1/recover", {
      method: "POST",
      body: JSON.stringify({ email, redirect_to: redirectTo })
    });
  }

  async function updatePassword(password) {
    const session = await getSession();
    if (!session) throw new Error("LOGIN_REQUIRED");
    return request("/auth/v1/user", {
      method: "PUT",
      token: session.access_token,
      body: JSON.stringify({ password })
    });
  }

  async function getUser() {
    const session = await getSession();
    if (!session) return null;
    try {
      const user = await request("/auth/v1/user", { method: "GET", token: session.access_token });
      const updated = { ...session, user };
      writeSession(updated);
      return user;
    } catch (error) {
      if (error.status === 401) writeSession(null);
      return null;
    }
  }

  async function getEntitlements() {
    const session = await getSession();
    if (!session) return [];
    const rows = await request("/rest/v1/entitlements?select=product_code,status,starts_at,expires_at,source&order=expires_at.desc", {
      method: "GET",
      token: session.access_token,
      headers: { Accept: "application/json" }
    });
    const now = Date.now();
    return (Array.isArray(rows) ? rows : []).map((row) => ({
      ...row,
      active: row.status === "active" && (!row.starts_at || Date.parse(row.starts_at) <= now) && (!row.expires_at || Date.parse(row.expires_at) > now)
    }));
  }

  async function hasEntitlement(productCode) {
    const items = await getEntitlements();
    return items.some((item) => item.product_code === productCode && item.active);
  }

  function consumeAuthHash() {
    if (!location.hash.includes("access_token=")) return null;
    const hash = new URLSearchParams(location.hash.slice(1));
    const session = writeSession({
      access_token: hash.get("access_token"),
      refresh_token: hash.get("refresh_token"),
      expires_in: Number(hash.get("expires_in") || 3600),
      token_type: hash.get("token_type") || "bearer",
      user: null
    });
    const type = hash.get("type") || "";
    history.replaceState(null, document.title, `${location.pathname}${location.search}`);
    return { session, type };
  }

  function safeReturnUrl(value, fallback) {
    if (!value) return fallback;
    try {
      const url = new URL(value, location.origin);
      if (url.protocol !== "https:" && url.hostname !== "localhost") return fallback;
      const allowed = url.hostname === "novacell.kr" || url.hostname.endsWith(".novacell.kr") || url.hostname === "localhost";
      return allowed ? url.href : fallback;
    } catch (_) { return fallback; }
  }

  window.NovaCellAuth = Object.freeze({
    config: cfg,
    configured,
    getSession,
    getUser,
    getEntitlements,
    hasEntitlement,
    signUp,
    signIn,
    signOut,
    sendPasswordReset,
    updatePassword,
    consumeAuthHash,
    safeReturnUrl
  });
})();
