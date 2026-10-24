import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

// Keep static HTML useful to crawlers and visitors without JavaScript.
// Browser copy and links use the same configuration in main.js.
if (process.argv.slice(2).some(arg => arg !== '--check')) {
  throw new Error('Usage: node scripts/sync-release.mjs [--check]');
}
const root = new URL('../', import.meta.url);
const context = { window: {} };
runInNewContext(readFileSync(new URL('site-config.js', root), 'utf8'), context);
const config = context.window.FLOWMORI_CONFIG;
if (!/^v\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(config.version) ||
    config.releaseUrl !== `${config.githubUrl}/releases/tag/${config.version}`) {
  throw new Error('Configure a version and its matching tagged release URL.');
}
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const path = new URL('index.html', root);
const original = readFileSync(path, 'utf8');
const updated = original
  .replace(/<a\b[^>]*\bdata-config-link="([^"]+)"[^>]*>/g, (tag, key) => {
    const url = config[key];
    if (typeof url !== 'string' || new URL(url).protocol !== 'https:') {
      throw new Error(`Missing or invalid HTTPS URL: ${key}`);
    }
    if (!/\bhref="[^"]*"/.test(tag)) throw new Error(`Missing href: ${key}`);
    return tag.replace(/\bhref="[^"]*"/, `href="${escape(url)}"`);
  })
  .replace(/(<span\b[^>]*\bdata-release-version[^>]*>)[^<]*(<\/span>)/g,
    (_, start, end) => start + config.version + end);

if (process.argv.includes('--check')) {
  if (updated !== original) {
    console.error('Release HTML is stale. Run: node scripts/sync-release.mjs');
    process.exitCode = 1;
  } else {
    console.log(`Release HTML matches ${config.version} and configured links.`);
  }
} else {
  if (updated !== original) writeFileSync(path, updated);
  console.log(`Synced release HTML for ${config.version}.`);
}
