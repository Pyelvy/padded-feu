// =========================================================
// Padded — contact.html interactivity
// Feature: client-side form validation with inline errors
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  // Pre-fill the message if arriving from a listing's "Inquire" link
  const params = new URLSearchParams(window.location.search);
  const listingName = params.get('listing');
  if (listingName) {
    const msg = document.getElementById('message');
    const topic = document.getElementById('topic');
    msg.value = `Hi, I'd like to ask about ${decodeURIComponent(listingName)}. Is it still available?`;
    topic.value = 'listing';
  }

  const validators = {
    fullName: value => value.trim().length >= 2,
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    phone: value => /^09\d{9}$/.test(value.replace(/\s|-/g, '')),
    topic: value => value !== '',
    message: value => value.trim().length >= 10,
  };

  function validateField(field) {
    const value = field.value;
    const isValid = validators[field.name] ? validators[field.name](value) : true;
    const row = field.closest('.form-row');
    row.classList.toggle('has-error', !isValid);
    return isValid;
  }

  // Validate as the user leaves each field
  Object.keys(validators).forEach(name => {
    const field = form.elements[name];
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-row').classList.contains('has-error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    let allValid = true;
    Object.keys(validators).forEach(name => {
      const field = form.elements[name];
      if (!validateField(field)) allValid = false;
    });

    status.classList.remove('success', 'error');

    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields above before sending.';
      status.classList.add('error');
      status.style.display = 'block';
      form.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
      return;
    }

    // No backend in this class project — simulate a successful send.
    status.textContent = `Thanks, ${form.elements.fullName.value.trim().split(' ')[0]}! Your message has been noted. We'll reply within 1–2 days.`;
    status.classList.add('success');
    status.style.display = 'block';
    form.reset();
  });
});
