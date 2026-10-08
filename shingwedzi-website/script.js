// Menu tabs
document.querySelectorAll('.tabs button').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.tabs button').forEach(function (x) {
      x.setAttribute('aria-selected', x === b);
    });
    ['food', 'drinks', 'vip'].forEach(function (id) {
      document.getElementById(id).hidden = (id !== b.dataset.tab);
    });
  });
});

// Event buttons open WhatsApp with the event name pre-filled
document.querySelectorAll('[data-book]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var t = encodeURIComponent("Hi Shingwedzi, I'd like to book for: " + a.dataset.book.replace(/&amp;/g, '&'));
    window.open('https://wa.me/27768354171?text=' + t, '_blank', 'noopener');
  });
});