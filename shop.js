// Sticker packs. Paste each pack's Stripe payment link and price here once the Stripe account is set up.
// Turn on "Allow promotion codes" on each payment link so referral codes work at checkout.
var PACKS = [
// Prices include shipping.
  { name: 'Strawberry Milk pack', blurb: '3 NFC stickers in pink', main: '#F7B6C8', pop: '#FFE7A3', deep: '#6B1F43', art: ['strawberry-milk', 'strawberry-milk', 'strawberry-milk'], price: '$15', link: '' },
  { name: 'Sea Glass pack', blurb: '3 NFC stickers in aqua', main: '#9ED9E8', pop: '#FFD6A8', deep: '#15485C', art: ['sea-glass', 'sea-glass', 'sea-glass'], price: '$15', link: '' },
  { name: 'Squad pack', blurb: '6 NFC stickers to share with your people', main: '#F7B6C8', pop: '#9ED9E8', deep: '#6B1F43', art: ['strawberry-milk', 'sea-glass', 'strawberry-milk'], price: '$24', link: '', gives: 2 },
];
// The store listings, once the app is live.
var PLAY_URL = '';
var APP_STORE_URL = '';

function stk(bg, inner) { return '<span class="stk" style="background:' + bg + '">' + inner + '</span>'; }
var drop = '<svg viewBox="0 0 10 14"><path fill="#2E9BE0" d="M5 0C5 0 0 6.2 0 9a5 5 0 0 0 10 0C10 6.2 5 0 5 0Z"/></svg>';

(function () {
  var shop = document.getElementById('shop');
  PACKS.forEach(function (p) {
    var ready = !!p.link;
    var card = document.createElement('div');
    card.className = 'card pack';
    card.innerHTML =
      '<div class="art" style="background:linear-gradient(160deg,' + p.main + ',' + p.pop + ')">' +
      p.art.map(function (a, i) { return '<img src="img/sticker-' + a + '.png" alt="" style="--r:' + [-8, 4, 10][i] + 'deg">'; }).join('') + '</div>' +
      '<h3></h3><p></p>' +
      '<div class="price">' + (p.price || 'Coming soon') + '</div>' +
      '<a class="btn"' + (ready ? ' href="' + p.link + '"' : ' aria-disabled="true"') + '>' + (ready ? 'Buy now' : 'Opening soon') + '</a>' +
      '<p class="gives">' + (p.gives === 2 ? '$2 from this pack' : '$1 from every pack') + ' goes to clean water. <a href="giving.html">See our receipts.</a></p>';
    card.querySelector('h3').textContent = p.name;
    card.querySelector('p').textContent = p.blurb;
    shop.appendChild(card);
  });
  var get = document.getElementById('get');
  var iphone = /iPhone|iPad/i.test(navigator.userAgent);
  var store = iphone ? APP_STORE_URL : PLAY_URL;
  if (get && store) {
    get.href = store;
    get.removeAttribute('aria-disabled');
    get.textContent = iphone ? 'Download on the App Store' : 'Get it on Google Play';
  }
})();
