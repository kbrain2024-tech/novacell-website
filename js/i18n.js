/**
 * NovaCell Therapy language routing
 * Korean and English are separate, stable navigation paths.
 */
(function () {
  'use strict';

  var path = window.location.pathname.replace(/\\/g, '/');
  var isEnglishDirectory = path.indexOf('/en/') !== -1;
  var isKoreanDirectory = path.indexOf('/ko/') !== -1;
  var queryLanguage = new URLSearchParams(window.location.search).get('lang');
  var isKoreanView = isKoreanDirectory || queryLanguage === 'ko';

  var pageMap = {
    'index.html': 'index.html',
    'how-it-works.html': 'how-it-works.html',
    'what-is-voltage.html': 'what-is-voltage.html',
    'system.html': 'system.html',
    'novacell-therapy.html': 'novacell-therapy.html',
    'why-novacell.html': 'why-novacell.html',
    'protocols.html': 'protocols.html',
    'audience-solutions.html': 'audience-solutions.html',
    'chronic-pain.html': 'chronic-pain.html',
    'energy-support.html': 'energy-support.html',
    'nervous-system.html': 'nervous-system.html',
    'inflammation-support.html': 'inflammation-support.html',
    'sleep-support.html': 'sleep-support.html',
    'recovery-support.html': 'recovery-support.html',
    'education.html': 'education.html',
    'events.html': 'events.html',
    'contact.html': 'contact.html',
    'faq.html': 'faq.html',
    'videos.html': 'videos.html',
    'resources.html': 'resources.html'
  };

  function getCurrentFilename() {
    var filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    try { filename = decodeURIComponent(filename); } catch (error) {}
    return filename || 'index.html';
  }

  function koreanTarget(filename) {
    if (filename === 'reflex-guide.html' || filename === 'reflex-therapy-guide.html') {
      return isKoreanDirectory ? 'reflex-therapy-guide.html' : '../ko/reflex-therapy-guide.html';
    }
    var mapped = pageMap[filename] || 'index.html';
    if (isEnglishDirectory && filename === 'index.html') return 'index.html?lang=ko';
    return isKoreanDirectory ? mapped : '../ko/' + mapped;
  }

  function englishTarget(filename) {
    if (filename === 'reflex-therapy-guide.html' || filename === 'reflex-guide.html') {
      return isEnglishDirectory ? 'reflex-guide.html' : '../en/reflex-guide.html';
    }
    var mapped = pageMap[filename] || 'index.html';
    return isEnglishDirectory ? mapped : '../en/' + mapped;
  }

  function rewriteTranslatedHomeLinks() {
    if (!(isEnglishDirectory && isKoreanView)) return;

    document.querySelectorAll('a[href]').forEach(function (link) {
      var raw = link.getAttribute('href');
      if (!raw || raw.charAt(0) === '#' || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(raw)) return;

      var hash = '';
      var hashIndex = raw.indexOf('#');
      if (hashIndex !== -1) {
        hash = raw.substring(hashIndex);
        raw = raw.substring(0, hashIndex);
      }

      var queryIndex = raw.indexOf('?');
      if (queryIndex !== -1) raw = raw.substring(0, queryIndex);
      var filename = raw.substring(raw.lastIndexOf('/') + 1) || 'index.html';

      if (filename === 'reflex-guide.html') {
        link.setAttribute('href', '../ko/reflex-therapy-guide.html' + hash);
      } else if (pageMap[filename]) {
        if (filename === 'index.html') {
          link.setAttribute('href', 'index.html?lang=ko' + hash);
        } else {
          link.setAttribute('href', '../ko/' + pageMap[filename] + hash);
        }
      }
    });
  }

  function renderLanguageSwitch() {
    var filename = getCurrentFilename();
    var wrapper = document.getElementById('langSwitchDropdown');
    var oldButton = document.getElementById('langSwitchBtn');
    if (!wrapper && oldButton) wrapper = oldButton.closest('.lang-switch-dropdown');

    if (!wrapper && isKoreanDirectory && filename !== 'reflex-therapy-guide.html') {
      wrapper = document.createElement('div');
      wrapper.id = 'langSwitchDropdown';
      var host = document.querySelector('.top-bar-right') || document.querySelector('.header-cta-group');
      if (host) host.appendChild(wrapper);
    }

    var directLink = document.getElementById('directLanguageLink');
    if (directLink) directLink.style.display = 'none';
    if (!wrapper) return;

    wrapper.className = 'simple-language-switch';
    wrapper.setAttribute('aria-label', isKoreanView ? '언어 선택' : 'Language selection');
    wrapper.innerHTML =
      '<a class="simple-lang-link' + (isKoreanView ? ' active' : '') + '" href="' + koreanTarget(filename) + '" lang="ko">한국어</a>' +
      '<a class="simple-lang-link' + (!isKoreanView ? ' active' : '') + '" href="' + englishTarget(filename) + '" lang="en">English</a>';
  }

  function initializeLanguageRouting() {
    if (isKoreanView) {
      document.documentElement.lang = 'ko';
      try { window.sessionStorage.setItem('novacell-language', 'ko'); } catch (error) {}
    } else {
      document.documentElement.lang = 'en';
      try { window.sessionStorage.setItem('novacell-language', 'en'); } catch (error) {}
    }
    rewriteTranslatedHomeLinks();
    renderLanguageSwitch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageRouting);
  } else {
    initializeLanguageRouting();
  }
})();
