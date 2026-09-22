// Plain script (not a module) so the card-opening animation works even if app.js or its imports
// ever fail — the RSVP form is independent of this.
(function () {
  var cover = document.getElementById('cover');
  var inside = document.getElementById('inside');
  var opened = false;

  function openCard() {
    if (opened) return;
    opened = true;
    cover.classList.add('opening');
    setTimeout(function () {
      cover.hidden = true;
      inside.hidden = false;
      requestAnimationFrame(function () { inside.classList.add('shown'); });
    }, 450);
  }

  cover.addEventListener('click', openCard);
  document.getElementById('openBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    openCard();
  });
})();
