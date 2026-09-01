# BAYNORA — Salla Twilight Theme

Custom Arabic-first Salla Twilight storefront for **BAYNORA / باينورا**.

> **تفاصيل أذكى. حياة أسهل.**

## Brand system

- Primary navy: `#2B2D42`
- Accent gold: `#D4AF37`
- Soft background: `#EDF2F4`
- Typography: Alexandria
- Direction: Arabic-first RTL, mobile-first
- Positioning: clean, modern, premium-accessible Saudi lifestyle ecommerce

## Implemented storefront

- BAYNORA master layout, responsive header and dark footer
- Dynamic Salla category navigation, search, account and cart
- Mobile bottom navigation
- Homepage hero, trust strip, category discovery, latest products, brand story, offers and newsletter
- Merchant-editable homepage copy in `twilight.json`
- Product listing, filters and sorting
- Product gallery, variants/options, quantity, add-to-cart, availability notifications, gifting and quick order
- Cart quantities, product notes, coupons, shipping progress, tax notice and Salla summary/checkout component
- Customer profile, wishlist, wallet, notifications and order history/details
- Blog index/article pages
- Brands, testimonials and loyalty pages
- Generic Salla content/policy page template
- Branded order confirmation / thank-you page

## Development

Requirements: Node `22.18+` and a Salla Partners account for live preview.

```bash
npm install
npm run development
npm run production
```

For an actual Salla storefront preview, import this GitHub repository as a theme in **Salla Partners → Themes → Import Theme**, select a demo store, then use the official CLI:

```bash
salla login
salla theme preview
```

The Salla preview step is required for end-to-end checkout, account, product-options and responsive browser validation because those depend on live Salla storefront data and web components.

## CI validation

`.github/workflows/theme-build.yml` automatically checks:

1. Required `twilight.json` metadata and arrays.
2. Required Twilight route templates.
3. Product add-to-cart and cart-summary integration markers.
4. Production Webpack build.
5. Generated `app.css`, `app.js` and `home.js` assets.
6. Built asset folder remains below the private-theme 2 MB ceiling.

## Git workflow

Active development branch: `baynora-master-design`

Pull request: `#1 — Build BAYNORA Salla Twilight theme foundation`

Do not merge the PR into `main` until the CI workflow is green and the theme has been visually checked on the Salla demo store.
