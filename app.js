import { rsvpEndpoint } from './rsvp-config.js';

const form = document.getElementById('rsvpForm');
const status = document.getElementById('rsvpStatus');
const submitBtn = document.getElementById('submitBtn');
const configured = !rsvpEndpoint.startsWith('PASTE');

if (!configured) {
  status.textContent = 'La confirmación aún no está activada. (Ver README.md: falta configurar rsvp-config.js.)';
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!configured) return;
  if (form.elements['_gotcha'].value) return; // spam bot filled the honeypot field
  submitBtn.disabled = true;
  status.textContent = 'Enviando…';
  try {
    const res = await fetch(rsvpEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    if (!res.ok) throw new Error('bad status');
    document.getElementById('thanks').hidden = false;
    form.hidden = true;
  } catch {
    status.textContent = 'No se pudo enviar. Por favor intenta de nuevo.';
    submitBtn.disabled = false;
  }
});
