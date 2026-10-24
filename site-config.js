// Update the version here, then run: node scripts/sync-release.mjs
// Pin a tag: /releases/latest does not reliably include pre-releases.
(() => {
  const githubUrl = 'https://github.com/BaiYu96/flowmori';
  const version = 'v0.1.47';
  window.FLOWMORI_CONFIG = Object.freeze({
    version,
    releaseUrl: `${githubUrl}/releases/tag/${version}`,
    githubUrl,
    issuesUrl: `${githubUrl}/issues`,
    buildFromSourceUrl: `${githubUrl}#构建与运行`,
    licenseUrl: `${githubUrl}/blob/main/LICENSE`,
  });
})();
