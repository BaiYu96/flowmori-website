# Flowmori Website

The first public-facing landing page for **https://flowmori.ai**.

- **Zero-build:** static HTML, CSS and vanilla JS. No npm install, database, server or API keys required.
- **Language:** English by default; click `中文` to switch the homepage copy to Simplified Chinese. This is a client-side toggle and English remains canonical for SEO.
- **Responsive:** desktop, tablet, mobile.
- **Status:** the [macOS app](https://github.com/BaiYu96/flowmori) is open source under the [MIT License](https://github.com/BaiYu96/flowmori/blob/main/LICENSE), with an **Early Preview** available for macOS 26+ on Apple Silicon (arm64). The current version is defined in `site-config.js`.
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

## Source links and preview releases

`site-config.js` is the source of truth for the current `version`, tagged `releaseUrl`, repository, Issues, MIT License, and [README build instructions](https://github.com/BaiYu96/flowmori#构建与运行). The release address is derived from the repository URL and version. There is no GitHub API request or additional service at runtime.

To publish the next preview's website update:

1. Confirm the new tagged GitHub Release and its downloadable assets exist.
2. Change `version` in `site-config.js`.
3. Run `node scripts/sync-release.mjs` to refresh the checked-in English HTML links and version labels. This preserves working links and current version information without JavaScript. `main.js` uses the same configuration after each language switch, including links inside FAQ answers.
4. Run the checks below and review both languages before deploying through the existing Cloudflare workflow.

Use a specific `/releases/tag/<version>` URL. Do not rely on `/releases/latest`: the current release is a **Pre-release**, which that endpoint may omit. Both download CTAs lead to the release page; **Build from source** remains a separate README link. When moving to a stable or notarized release, review the English HTML, both translation dictionaries, and the installation notes as well as the version.

- App requirements: macOS 26+ and Apple Silicon (arm64). Menu bar organization uses internal system APIs and is currently verified and enabled only on macOS 26.6.2 (25G83). Other builds pause this feature and need revalidation after OS updates. This is a feature gate, not the minimum OS version for the whole app.
- The preview uses ad-hoc signing and is not notarized by Apple. First launch may need approval in System Settings → Privacy & Security. Screenshots require Screen Recording permission; menu bar organization requires Accessibility. Keep Gatekeeper and SIP enabled.
- The default clipboard shortcut is **Option + V**. Selecting a history entry copies it; users then press **⌘V** in the destination app. Screenshot descriptions refer to area selection and in-place annotation.

The current interface graphics remain explicitly labeled conceptual. Replace them with actual app screenshots or videos when available.

## Validation and deployment safety

This is a zero-build site: there is no package manager, bundler, lint configuration, or automated test framework. The release consistency check and syntax checks require only Node.js, with no dependencies:

```bash
node --check main.js
node --check site-config.js
node --check scripts/sync-release.mjs
node scripts/sync-release.mjs --check
git diff --check
```

Use the local preview to check desktop/mobile layouts, EN → 中文 → EN, mobile navigation, FAQ links, current version labels, both release download CTAs, and installation notes. Check GitHub links and the README fragment, canonical URL, social metadata/image, `robots.txt`, and `sitemap.xml`. The English homepage is canonical; `/privacy/` remains `noindex,follow` and is intentionally omitted from the sitemap.

Work on a `codex/` branch and commit reviewed changes before deployment. The repository documents Direct Upload and has no checked-in Cloudflare build or branch configuration. If the live Cloudflare project uses Git integration, verify its production branch and preview rules in the dashboard before pushing or merging; do not assume local files describe the live deployment settings. Do not change production configuration as part of a content update.

## Privacy / compliance notes

- `privacy/` is a **pre-release note**, deliberately not a definitive privacy-policy claim. Review implementation before publishing a final privacy policy.
- This version has no analytics, forms, cookies from its own scripts, or user accounts.
- Hosting and DNS providers may still log HTTP request metadata.
- The app repository uses the MIT License; this does not automatically change the license of the website or brand assets.
- If later using hosting or CDN nodes inside mainland China, check the current ICP filing requirements for the **actual domain**, not just the DNS record type.
