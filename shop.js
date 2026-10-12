// Sticker packs. Paste each pack's Stripe payment link and price here once the Stripe account is set up.
// Turn on "Allow promotion codes" on each payment link so referral codes work at checkout.
var PACKS = [
  { name: 'Strawberry Milk pack', blurb: '3 NFC stickers in pink', main: '#F7B6C8', pop: '#FFE7A3', price: '', link: '' },
  { name: 'Sea Glass pack', blurb: '3 NFC stickers in aqua', main: '#9ED9E8', pop: '#FFD6A8', price: '', link: '' },
  { name: 'Mix pack', blurb: 'One in each of 3 colorways', main: '#CDBDF2', pop: '#FFC98F', price: '', link: '' },
];
// The Google Play listing, once the app is live.
var PLAY_URL = '';

(function () {
  var shop = document.getElementById('shop');
  PACKS.forEach(function (p) {
    var ready = !!p.link;
    var card = document.createElement('div');
    card.className = 'card pack';
    card.innerHTML =
      '<div class="art" style="background:linear-gradient(160deg,' + p.main + ',' + p.pop + ')">' +
      '<span style="background:' + p.main + '">💧</span><span style="background:#fff">📲</span><span style="background:' + p.pop + '">✨</span></div>' +
      '<h3></h3><p></p>' +
      '<div class="price">' + (p.price || 'Coming soon') + '</div>' +
      '<a class="btn"' + (ready ? ' href="' + p.link + '"' : ' aria-disabled="true"') + '>' + (ready ? 'Buy now' : 'Opening soon') + '</a>';
    card.querySelector('h3').textContent = p.name;
    card.querySelector('p').textContent = p.blurb;
    shop.appendChild(card);
  });
  var get = document.getElementById('get');
  if (get && PLAY_URL) {
    get.href = PLAY_URL;
    get.removeAttribute('aria-disabled');
    get.textContent = 'Get it on Google Play';
  }
})();
