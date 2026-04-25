/* =====================================================
   VX6 — script.js
   Active nav, scroll-reveal, contact form
   ===================================================== */

(function () {
  'use strict';

  /* --- Active nav link --- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (href === 'index.html' && page === '')) {
      link.classList.add('active');
    }
  });

  /* --- Scroll reveal (simple fade) --- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* --- Contact form --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Sent.';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  }

})();
