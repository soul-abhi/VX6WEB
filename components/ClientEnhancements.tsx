'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    let observer: IntersectionObserver | null = null;

    if (revealElements.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -20px 0px' },
      );

      revealElements.forEach((el) => observer?.observe(el));
    }

    const form = document.getElementById('contact-form') as HTMLFormElement | null;

    const onSubmit = (event: Event) => {
      event.preventDefault();
      const button = form?.querySelector<HTMLButtonElement>('.form-submit');

      if (!button) {
        return;
      }

      const originalText = button.textContent;
      button.textContent = 'Sent.';
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form?.reset();
      }, 3000);
    };

    if (form) {
      form.addEventListener('submit', onSubmit);
    }

    return () => {
      observer?.disconnect();
      if (form) {
        form.removeEventListener('submit', onSubmit);
      }
    };
  }, [pathname]);

  return null;
}
