/* ============================================================
   ЛАЙТБОКС — открытие фото по клику
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg || !closeBtn) return;

  const images = document.querySelectorAll(
    '.case-interview-photo img, .case-process__item img, .case-compare__item img, .case-screen__phone img'
  );

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt || 'Просмотр';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function () {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});


/* ============================================================
   БУРГЕР-МЕНЮ для мобильной версии
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow =
      mobileMenu.classList.contains('is-open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
});