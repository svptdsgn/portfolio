// ===== Лайтбокс (просмотр фото) =====
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg || !closeBtn) return;

  const photos = document.querySelectorAll(
    '.about-more__item, .case__link, .case-compare__item img, .case-gallery__item img, .case-interview-photo img'
  );

  photos.forEach((photo) => {
    photo.addEventListener('click', (e) => {
      e.preventDefault();

      const img = photo.tagName === 'IMG' ? photo : photo.querySelector('img');
      if (!img) return;

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      closeLightbox();
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
});
// ===== Анимация появления фото в «Процесс работы» =====
document.addEventListener('DOMContentLoaded', () => {
  const processItems = document.querySelectorAll('.case-process__item');
  if (!processItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  processItems.forEach((item) => observer.observe(item));
});
// ===== Плавный скролл по якорям =====
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();

  const topOffset = 100;
  const targetTop = target.offsetTop - topOffset;

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth'
  });
});
// ===== Подсветка активного пункта меню при скролле =====
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 150;
    let currentId = '';

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('navbar__link--active');
      const href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('navbar__link--active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
});

