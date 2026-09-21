/**
 * NovaCell Therapy (노바셀 통치 요법) Official JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Header Scroll Effect
  const header = document.querySelector('.header-main');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const setMobileMenuState = (open) => {
    if (!mobileToggle || !navMenu) return;
    const isOpen = Boolean(open);
    navMenu.classList.toggle('active', isOpen);
    navMenu.setAttribute('aria-hidden', String(!isOpen));
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileToggle.setAttribute(
      'aria-label',
      document.documentElement.lang === 'ko'
        ? (isOpen ? '메뉴 닫기' : '메뉴 열기')
        : (isOpen ? 'Close menu' : 'Open menu')
    );
    document.body.classList.toggle('mobile-menu-open', isOpen);

    const icon = mobileToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('ri-menu-line', !isOpen);
      icon.classList.toggle('ri-close-line', isOpen);
    }

    if (!isOpen) {
      navMenu.querySelectorAll('.nav-item.open').forEach(item => item.classList.remove('open'));
      navMenu.querySelectorAll('.nav-link[aria-expanded]').forEach(link => link.setAttribute('aria-expanded', 'false'));
    }
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      setMobileMenuState(!navMenu.classList.contains('active'));
    });

    // Toggle one mobile submenu at a time.
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (item.querySelector('.dropdown-menu') && link) {
        link.setAttribute('aria-expanded', 'false');
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 1024) {
            e.preventDefault();
            const willOpen = !item.classList.contains('open');
            navItems.forEach(other => {
              if (other !== item) {
                other.classList.remove('open');
                const otherLink = other.querySelector('.nav-link[aria-expanded]');
                if (otherLink) otherLink.setAttribute('aria-expanded', 'false');
              }
            });
            item.classList.toggle('open', willOpen);
            link.setAttribute('aria-expanded', String(willOpen));
          } else {
            // On desktop, if the parent link is a category header (e.g., #support or javascript:void(0)), prevent jumping
            const href = link.getAttribute('href');
            if (href === '#' || href === 'javascript:void(0)' || href.startsWith('#')) {
              e.preventDefault();
            }
          }
        });
      }
    });

    // Close after selecting a real destination, including language links.
    navMenu.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link || window.innerWidth > 1024) return;
      const parentItem = link.closest('.nav-item');
      const isParentTrigger = link.classList.contains('nav-link') && parentItem && parentItem.querySelector('.dropdown-menu');
      if (!isParentTrigger) setMobileMenuState(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) setMobileMenuState(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        setMobileMenuState(false);
        mobileToggle.focus();
      }
    });
  }

  // 3. Consultation / Demo Booking Modal System
  const modalOverlay = document.getElementById('consultationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalBtns = document.querySelectorAll('.open-consultation-modal');

  const openModal = (targetType = 'all') => {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      const typeSelect = document.getElementById('consultationType');
      if (typeSelect && targetType !== 'all') {
        typeSelect.value = targetType;
      }
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetType = btn.getAttribute('data-type') || 'all';
      if (modalOverlay) {
        e.preventDefault();
        openModal(targetType);
      } else {
        const href = btn.getAttribute('href');
        if (!href || href === '#' || href === '#consultation') {
          e.preventDefault();
          const isEnglish = window.location.pathname.replace(/\\/g, '/').indexOf('/en/') !== -1;
          window.location.href = isEnglish ? 'education.html#consultation' : 'education.html#consultation';
        }
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Consultation Form Submission Handler
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const type = document.getElementById('consultationType').value;

      alert(`[상담 신청 완료]\n\n${name}님, 노바셀 통치 요법® 무료 교육 및 데모 상담 예약이 성공적으로 접수되었습니다.\n담당 전문 연구원이 ${phone} 번호로 빠르게 안내드리겠습니다.`);
      consultationForm.reset();
      closeModal();
    });
  }

  // 5. Newsletter Form Submission Handler
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert(`[구독 완료]\n${emailInput.value} 주소로 노바셀 테라피 최신 세미나 및 프로토콜 소식을 발송해 드리겠습니다.`);
        newsletterForm.reset();
      }
    });
  }

  // 6. Smooth Scroll for Anchor Links (드롭다운 상위 메뉴 제외)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // If this anchor is a parent dropdown menu trigger, do NOT scroll down
      if (this.closest('.nav-item') && this.closest('.nav-item').querySelector('.dropdown-menu') && this.classList.contains('nav-link')) {
        return;
      }

      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && document.querySelector(targetId)) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) setMobileMenuState(false);
      }
    });
  });
});
