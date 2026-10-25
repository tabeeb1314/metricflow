/**
 * MetricFlow — Interactive Utility & Standalone Scripts
 * Handles accessible accordion interactions, billing discount calculation, and smooth scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Accessible FAQ Accordions
  const faqButtons = document.querySelectorAll('[data-faq-trigger]');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      const targetId = btn.getAttribute('aria-controls');
      const targetEl = document.getElementById(targetId || '');
      if (targetEl) {
        targetEl.hidden = isExpanded;
      }
    });
  });

  // Annual Billing Toggle Calculation (20% discount engine)
  const billingToggle = document.getElementById('billing-toggle');
  if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
      const isAnnual = e.target.checked;
      document.querySelectorAll('[data-plan-price]').forEach((el) => {
        const monthly = el.getAttribute('data-price-monthly');
        const annual = el.getAttribute('data-price-annual');
        el.textContent = isAnnual ? annual : monthly;
      });
    });
  }
});
