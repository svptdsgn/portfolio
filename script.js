/* ============================================================
   ЛАЙТБОКС
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg || !closeBtn) return;

  var images = document.querySelectorAll(
    '.case-interview-photo img, ' +
    '.case-process__item img, ' +
    '.case-compare__item img, ' +
    '.case-screen__phone img, ' +
    '.case-schedule__center img, ' +
    '.case-confirm__phone img'
  );

  images.forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt || 'Просмотр';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    close();
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});

/* ============================================================
   БУРГЕР-МЕНЮ
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow =
      mobileMenu.classList.contains('is-open') ? 'hidden' : '';
  });

  /* Закрываем меню при клике по ссылке */
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
});

/* ============================================================
   ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
