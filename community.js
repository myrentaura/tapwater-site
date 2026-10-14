// The everyone-total of plastic bottles skipped, from the app's anonymous counts.
// Hidden until there's a number worth showing.
(function () {
  var URL = 'https://fdnypkbjbdewlkaunhqr.supabase.co/rest/v1/rpc/community_total';
  var KEY = 'sb_publishable_udNLCAk5cmVM-Purm5J4oQ_nd8we8I5';
  var els = document.querySelectorAll('[data-community]');
  if (!els.length) return;
  function round(n) {
    if (n >= 10000) return Math.floor(n / 1000).toLocaleString() + ',000+';
    if (n >= 1000) return (Math.floor(n / 100) * 100).toLocaleString() + '+';
    return (Math.floor(n / 10) * 10).toLocaleString() + '+';
  }
  fetch(URL, { method: 'POST', headers: { apikey: KEY, 'Content-Type': 'application/json' }, body: '{}' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rows) {
      var t = rows && rows[0];
      if (!t || Number(t.bottles) < 100) return;
      els.forEach(function (el) {
        el.querySelector('[data-bottles]').textContent = round(Number(t.bottles));
        el.hidden = false;
      });
    })
    .catch(function () {});
})();
