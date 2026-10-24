# Flowmori Website

The first public-facing landing page for **https://flowmori.ai**.

- **Zero-build:** static HTML, CSS and vanilla JS. No npm install, database, server or API keys required.
- **Language:** English by default; click `中文` to switch the homepage copy to Simplified Chinese. This is a client-side toggle and English remains canonical for SEO.
- **Responsive:** desktop, tablet, mobile.
- **Status:** in development. No fake GitHub/download links.
- **Brand assets:** locally packaged Flowmori icons, wordmark, and Open Graph image.

## Preview locally

From this directory:

```bash
python3 -m http.server 8787
```

Open http://localhost:8787. Do not simply double-click index.html if you want to check route behaviors.

## Cloudflare Pages deployment — easiest first release

1. Open the Cloudflare dashboard → **Workers & Pages** → Create application → Upload static assets (Direct Upload).
2. Give your Pages project a name such as `flowmori-site` (the availability of any specific project name is not guaranteed).
3. Upload **the files inside this folder at the site root**, or upload the provided `flowmori-site.zip` (archive contains `index.html` at its root).
4. Verify the temporary `*.pages.dev` website.
5. In Pages → **Custom domains**, add `flowmori.ai`. For an apex/root domain, you must first add `flowmori.ai` to Cloudflare and set its nameservers at your domain registrar to those supplied by Cloudflare. Cloudflare will configure the DNS mapping. Also add `www.flowmori.ai` if wanted, and create a redirect to your canonical domain.
6. Wait for DNS and HTTPS activation and verify `https://flowmori.ai` on desktop and mobile.

Cloudflare Pages Direct Upload does not switch to Git integration in-place. If you later want automatic GitHub builds, create a **new Git-integrated Pages project**, then migrate the custom domain, or deploy future changes with Wrangler to this Direct Upload project.

Cloudflare documentation:
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

## Existing Alibaba Cloud server

You can alternatively upload the contents of this directory to **Nginx on a server outside mainland China**, with TLS configured for `flowmori.ai`. The static site does not require Node or PHP. Do not use CNAME aliases to attempt to inherit an unrelated domain's ICP filing.

## When GitHub and binaries become public

Edit `site-config.js`:

```js
window.FLOWMORI_CONFIG = Object.freeze({
  githubUrl: 'https://github.com/YOUR_USERNAME/Flowmori',
  downloadUrl: 'https://github.com/YOUR_USERNAME/Flowmori/releases/latest',
});
```

Once valid HTTPS URLs are supplied, the corresponding CTA automatically becomes a real clickable link. Before public release, leave values `null`.

Next, replace feature illustration panels with screenshots or videos of the **actual** Flowmori app once they are available. The current interface graphics are explicitly labeled conceptual. Review every claimed feature before release and update system requirements to match the build configuration.

## Privacy / compliance notes

- `privacy/` is a **pre-release note**, deliberately not a definitive privacy-policy claim. Review implementation before publishing a final privacy policy.
- This version has no analytics, forms, cookies from its own scripts, or user accounts.
- Hosting and DNS providers may still log HTTP request metadata.
- Licensing and attribution for the app repository must be chosen and audited separately. This website package is provided for the Flowmori product owner.
- If later using hosting or CDN nodes inside mainland China, check the current ICP filing requirements for the **actual domain**, not just the DNS record type.
