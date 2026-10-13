# Tap Water website

The website for Tap Water: One-Tap Tracker, live at https://tapwaterapp.com. Plain HTML served by GitHub Pages.

- `index.html`: home page and sticker shop
- `shop.js`: sticker packs. Add each pack's price and Stripe payment link here.
- `privacy.html`, `support.html`: privacy policy and help page
- `cheer.html`: opens a friend's cheer in the app
- `CNAME`: the custom domain

## Giving record (one row per quarter)

`giving.json` is the public record of donations to our clean water partner. The giving page
(tapwaterapp.com/giving) shows the total and a table, and the app reads the
same file.

**Until the first donation:** once a month, change `packsSoldSoFar` to the
number of packs sold. The page shows "First donation: April 2027" and that
number. The donation table appears by itself once it has its first row.

**After each quarterly donation:**

1. Black out your home address on the donation receipt and save it as a PDF.
2. Upload it to the `receipts/` folder in this repo (Add file > Upload files).
3. Edit `giving.json` and add one row:

```json
{
  "firstDonation": "April 2027",
  "packsSoldSoFar": 0,
  "donations": [
    {
      "date": "2027-01-05",
      "period": "Oct to Dec 2026",
      "packs": 120,
      "amountUsd": 120,
      "receipt": "receipts/2027-01-donation.pdf"
    }
  ]
}
```

Separate rows with a comma. The total adds itself up.
