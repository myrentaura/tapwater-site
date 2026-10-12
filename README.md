# Tap Water website

The website for Tap Water: One-Tap Tracker, live at https://tapwaterapp.com. Plain HTML served by GitHub Pages.

- `index.html`: home page and sticker shop
- `shop.js`: sticker packs. Add each pack's price and Stripe payment link here.
- `privacy.html`, `support.html`: privacy policy and help page
- `cheer.html`: opens a friend's cheer in the app
- `CNAME`: the custom domain

## Giving (updated each quarter)

`giving.json` holds what sticker packs have given to DigDeep. The giving page
and the app both read it. After each quarterly donation, edit it on GitHub:
add 1 to the total for every pack sold, set the date, and add the receipt link:

```json
{
  "totalUsd": 120,
  "packs": 120,
  "updated": "2027-01-05",
  "receipts": [{ "date": "2027-01-05", "amountUsd": 120, "url": "https://link-to-the-receipt" }]
}
```
