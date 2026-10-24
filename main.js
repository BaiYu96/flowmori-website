(() => {
  const dict = {
    en: {
      navFeatures:'Features',navStory:'Our story',navSource:'Open source',navDownload:'Download',navCTA:'Get Flowmori',
      heroEyebrow:"Early Preview Available",heroLine1:'Make your',heroLine2:'Mac flow.',heroLead:'Small tools. A smoother workflow.',heroDescription:'Screenshots, image pinning, clipboard history, and menu bar organization — thoughtfully brought together in one lightweight Mac app.',downloadButtonHero:"Download for macOS",viewSource:"View on GitHub",metaNative:"macOS 26+",metaSwift:"Apple Silicon (arm64)",metaOpen:"Open source · MIT",previewDisclaimer:'Illustrative preview · Final UI may vary',
      proofOne:'BUILT FOR MAC',proofTwo:'FOUR EVERYDAY ESSENTIALS',proofThree:'MADE TO STAY OUT OF YOUR WAY',
      featureKicker:'EVERYDAY ESSENTIALS',featureTitle:'Little tools.<br><em>Big difference.</em>',featureIntro:'The small actions add up. Flowmori brings your everyday Mac utilities into one calmer, more connected workflow.',featureUtility:'UTILITY',
      screenshotTitle:'Screenshots',screenshotText:"Select an area, annotate it in place, then copy, save, or pin it without losing your place.",shotTag1:'Area capture',shotTag2:'Shortcuts',shotTag3:'Quick actions',
      pinningTitle:'Image pinning',pinningText:'Keep screenshots and reference images visible above your workspace, exactly where you need them.',pinTag1:'Always visible',pinTag2:'Drag & resize',
      clipboardTitle:'Clipboard history',clipboardText:"Open history with Option + V. Search text and images, select an item to copy, then press ⌘V in your app to paste.",clipTag1:'Searchable',clipTag2:'Quick access',clipTag3:'Local-first',
      menubarTitle:'Menu bar organization',menubarText:'Give your menu bar room to breathe. Keep crowded or notch-hidden app icons within easier reach.',menuTag1:'Tidy menu bar',menuTag2:'Notch-friendly',
      featureNotice:"App requires macOS 26+ and Apple Silicon (arm64). Menu bar organization uses internal system APIs and is currently verified and enabled only on macOS 26.6.2 (25G83); it is paused on other builds.",
      storyKicker:'THE IDEA BEHIND FLOWMORI',storyTitle:'Made for the<br><em>little things.</em>',storyP1:"A screenshot here. A reference image there. Something you copied and can't find again. A menu bar that's running out of space.",storyP2:'None of these should interrupt your day. Flowmori began as a personal tool to make these small moments a little easier — and grew into an open-source project worth sharing.',storyLink:"Why we're building in the open",
      philosophyKicker:'HOW WE BUILD',philosophyTitle:'A few things<br><em>we care about.</em>',pr1Title:'Native at heart',pr1Text:'Swift, SwiftUI, and AppKit. Built for macOS from the start.',pr2Title:'Light by intention',pr2Text:'Focused features, clear interactions, and a careful eye on resources.',pr3Title:'Privacy in mind',pr3Text:"Screenshots and clipboard history stay on your Mac. No uploads or telemetry by default.",pr4Title:'Open to improving',pr4Text:'Start small, listen carefully, and make each iteration count.',
      sourceKicker:'OPEN DEVELOPMENT',sourceTitle:'Good tools<br>are worth <em>sharing.</em>',sourceP:"Flowmori is open source under the MIT License. Explore the Swift, AppKit, and SwiftUI code, build it yourself, or help improve the app through GitHub Issues.",sourceStatus:"Public on GitHub · MIT License",sourceButton:"View on GitHub",
      buildSource:'Build from source',downloadKicker:"EARLY PREVIEW AVAILABLE",downloadTitle:'Your workflow,<br><em>a little smoother.</em>',downloadText:"The first public preview is ready to try. Download the Apple Silicon build and read the release notes on GitHub.",downloadButton:"Download for macOS",downloadMeta:"macOS 26+ · Apple Silicon (arm64)",
      releaseChannel:"Early Preview",downloadCompatibility:"Menu bar organization is enabled only on macOS 26.6.2 (25G83).",installTitle:"Before you install",installSigning:"This preview uses ad-hoc signing and has not been notarized by Apple.",installOpen:"macOS may block the first launch. If you trust the source, allow the app in System Settings → Privacy & Security.",installPermissions:"Screenshots require Screen Recording permission; menu bar organization requires Accessibility. Updates may require you to grant permissions again.",installSecurity:"Keep Gatekeeper and System Integrity Protection (SIP) enabled.",
      faqKicker:'GOOD TO KNOW',faqTitle:'A few quick<br><em>answers.</em>',q1:'What is Flowmori?',a1:'Flowmori is a native macOS productivity toolkit bringing screenshots, image pinning, clipboard history, and menu bar organization together.',q2:'Is Flowmori free and open source?',a2:"Yes. Flowmori is free and open source under the <a href=\"https://github.com/BaiYu96/flowmori/blob/main/LICENSE\" data-config-link=\"licenseUrl\" target=\"_blank\" rel=\"noopener noreferrer\">MIT License</a>. You can read, modify, and build the code on <a href=\"https://github.com/BaiYu96/flowmori\" data-config-link=\"githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",q3:'Can I download it now?',a3:"Yes. <a href=\"https://github.com/BaiYu96/flowmori/releases\" data-config-link=\"releaseUrl\" target=\"_blank\" rel=\"noopener noreferrer\">Download <span data-release-version></span> Early Preview</a> from GitHub Releases. This is a pre-release, signed ad-hoc and not notarized by Apple. Read the installation notes below the download button before opening the app.",q4:'Which macOS versions are supported?',a4:"The preview requires macOS 26+ and Apple Silicon (arm64). Menu bar organization uses internal system APIs and is verified and enabled only on macOS 26.6.2 (25G83). It is paused on other builds, which need revalidation after OS updates; this restriction does not disable screenshots, image pinning, or clipboard history.",q5:'Why does it need system permissions?',a5:"Screenshots need screen recording permission; menu bar organization needs Accessibility. Clipboard access follows macOS authorization. Permissions are independent, so denying one does not disable the other modules.",q6:'What happens to my screenshots and clipboard data?',a6:"Screenshots and clipboard history are stored locally on your Mac. By default, the app does not connect to the network, upload data, or send telemetry. See the <a href=\"https://github.com/BaiYu96/flowmori\" data-config-link=\"githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\">repository README</a> for storage and permission details, or report a problem via <a href=\"https://github.com/BaiYu96/flowmori/issues\" data-config-link=\"issuesUrl\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub Issues</a>.",
      footerIssues:'Report an issue',footerTag:'Make your Mac flow.<br>Small tools for everyday moments.',footerExplore:'Explore',footerProject:'Project',footerGithub:"GitHub",privacyLink:'Privacy note',footerRights:'Made for a better Mac workflow.',backTop:'Back to top ↑'
    },
    zh: {
      navFeatures:'核心功能',navStory:'品牌故事',navSource:"开源项目",navDownload:'下载',navCTA:'了解 Flowmori',
      heroEyebrow:"早期预览版已发布",heroLine1:'让你的 Mac',heroLine2:'更顺手。',heroLead:'小工具，大不同。',heroDescription:'把截图、贴图、剪贴板历史和菜单栏图标收纳，放进一款轻量的原生 Mac 应用。',downloadButtonHero:"下载 macOS 版",viewSource:"在 GitHub 查看",metaNative:"macOS 26+",metaSwift:"Apple Silicon（arm64）",metaOpen:"MIT 开源",previewDisclaimer:'概念示意 · 最终界面以实际版本为准',
      proofOne:'为 MAC 而生',proofTwo:'四大常用功能',proofThree:'专注每一个操作细节',
      featureKicker:'日常效率工具',featureTitle:'小小工具，<br><em>让操作更顺。</em>',featureIntro:'日常反复操作的那些小事，值得更轻松的体验。Flowmori 把常用工具整合到一起。',featureUtility:'功能',
      screenshotTitle:'快速截图',screenshotText:"框选截图并原位标注，随后复制、保存或贴在桌面上，操作一气呵成。",shotTag1:'区域截图',shotTag2:'快捷键',shotTag3:'快捷操作',
      pinningTitle:'桌面贴图',pinningText:'把截图或参考图片固定在其他窗口上方，随时对照，无需反复切换。',pinTag1:'悬浮显示',pinTag2:'自由移动缩放',
      clipboardTitle:'剪贴板历史',clipboardText:"按 Option + V 打开历史，搜索文字和图片。选择条目复制后，回到原应用按 ⌘V 粘贴。",clipTag1:'历史搜索',clipTag2:'快捷访问',clipTag3:'本地优先',
      menubarTitle:'菜单栏图标收纳',menubarText:'整理拥挤的菜单栏，让被 MacBook 刘海遮挡的应用图标更容易找到。',menuTag1:'图标收纳',menuTag2:'刘海适配',
      featureNotice:"App 要求 macOS 26+ 和 Apple Silicon（arm64）。菜单栏收纳使用系统内部接口，目前仅在 macOS 26.6.2（25G83）验证并开放；其他构建版本暂停该功能。",
      storyKicker:'FLOWMORI 的由来',storyTitle:'为每天的<br><em>那些小事而做。</em>',storyP1:'截一张图、固定参考图片、找回刚复制的文字，或者从拥挤的菜单栏里找到应用图标。',storyP2:'这些动作本来就不该那么费事。Flowmori 最初只是为了方便自己使用，后来决定把它做成一个可以分享、持续改进的开源项目。',storyLink:"了解我们的开源项目",
      philosophyKicker:'开发理念',philosophyTitle:'有些原则，<br><em>我们很在意。</em>',pr1Title:'坚持原生',pr1Text:'基于 Swift、SwiftUI 与 AppKit，从一开始就为 macOS 设计。',pr2Title:'保持轻量',pr2Text:'围绕高频功能打磨交互，谨慎控制资源占用。',pr3Title:'重视隐私',pr3Text:"截图和剪贴板历史保存在本机，默认不上传数据、不发送遥测。",pr4Title:'持续改进',pr4Text:'从最常用的功能开始，根据真实反馈不断迭代。',
      sourceKicker:'公开开发',sourceTitle:'好用的工具，<br><em>值得分享。</em>',sourceP:"Flowmori 已基于 MIT License 正式开源。欢迎查看 Swift、AppKit 和 SwiftUI 源码、自行构建，或通过 GitHub Issues 反馈问题、提出改进建议。",sourceStatus:"GitHub 仓库已公开 · MIT License",sourceButton:"在 GitHub 查看",
      buildSource:'从源码构建',downloadKicker:"早期预览版已发布",downloadTitle:'日常操作，<br><em>再顺手一点。</em>',downloadText:"首个公开预览版现已发布。前往 GitHub 下载 Apple Silicon 构建版本，并查看发布说明。",downloadButton:"下载 macOS 版",downloadMeta:"macOS 26+ · Apple Silicon（arm64）",
      releaseChannel:"早期预览版",downloadCompatibility:"菜单栏图标收纳仅对 macOS 26.6.2（25G83）开放。",installTitle:"安装提示",installSigning:"当前预览版使用 ad-hoc 签名，尚未经过 Apple 公证。",installOpen:"macOS 可能阻止首次启动。确认信任来源后，可在系统设置 → 隐私与安全性中手动允许打开。",installPermissions:"截图需要屏幕录制权限，菜单栏收纳需要辅助功能权限；更新后可能需要重新授权。",installSecurity:"请保持 Gatekeeper 和系统完整性保护（SIP）开启。",
      faqKicker:'常见问题',faqTitle:'你可能<br><em>想知道这些。</em>',q1:'Flowmori 是什么？',a1:'Flowmori 是一款原生 macOS 效率工具，整合截图、桌面贴图、剪贴板历史和菜单栏图标收纳。',q2:"Flowmori 已免费开源吗？",a2:"是的，Flowmori 已基于 <a href=\"https://github.com/BaiYu96/flowmori/blob/main/LICENSE\" data-config-link=\"licenseUrl\" target=\"_blank\" rel=\"noopener noreferrer\">MIT License</a> 免费开源。你可以在 <a href=\"https://github.com/BaiYu96/flowmori\" data-config-link=\"githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> 查看、修改源码并自行构建。",q3:'现在可以下载吗？',a3:"可以。现在可通过 GitHub Releases <a href=\"https://github.com/BaiYu96/flowmori/releases\" data-config-link=\"releaseUrl\" target=\"_blank\" rel=\"noopener noreferrer\">下载 <span data-release-version></span> 早期预览版</a>。这是 Pre-release，使用 ad-hoc 签名，尚未经过 Apple 公证。首次打开前，请阅读下载按钮下方的安装提示。",q4:'支持哪些 macOS 版本？',a4:"当前预览版要求 macOS 26+ 和 Apple Silicon（arm64）。菜单栏收纳使用系统内部接口，目前仅在 macOS 26.6.2（25G83）验证并开放；其他构建版本暂停收纳，系统升级后需重新验证。这一限制不禁用截图、贴图或剪贴板历史。",q5:'为什么需要系统权限？',a5:"截图需要屏幕录制权限，菜单栏收纳需要辅助功能权限，剪贴板读取遵循 macOS 授权状态。各项权限独立，拒绝某一项不会禁用其他模块。",q6:'截图和剪贴板数据会上传吗？',a6:"截图和剪贴板历史存储在 Mac 本机，默认不联网、不上传数据、不发送遥测。存储位置和权限说明见<a href=\"https://github.com/BaiYu96/flowmori\" data-config-link=\"githubUrl\" target=\"_blank\" rel=\"noopener noreferrer\">仓库 README</a>，也可通过 <a href=\"https://github.com/BaiYu96/flowmori/issues\" data-config-link=\"issuesUrl\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub Issues</a> 反馈问题。",
      footerIssues:'反馈问题',footerTag:'Make your Mac flow.<br>为日常操作，省一点心。',footerExplore:'探索',footerProject:'项目',footerGithub:"GitHub",privacyLink:'隐私说明',footerRights:'让 Mac 工作更顺手。',backTop:'回到顶部 ↑'
    }
  };
  const langButton = document.querySelector('#lang-switch');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('#primary-nav');
  let currentLang = 'en';
  function applyLang(next) {
    currentLang = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-t]').forEach(node => {
      const value = dict[currentLang][node.dataset.t];
      if (value !== undefined) node.innerHTML = value;
    });
    langButton.innerHTML = currentLang === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
    langButton.setAttribute('aria-label', currentLang === 'en' ? 'Switch to Chinese' : 'Switch to English');
    document.title = currentLang === 'en' ? 'Flowmori — Make your Mac flow.' : 'Flowmori — 让你的 Mac 更顺手';
    const config = window.FLOWMORI_CONFIG || {};
    document.querySelectorAll('[data-config-link]').forEach(link => {
      const url = config[link.dataset.configLink];
      if (url && /^https:\/\//.test(url)) link.href = url;
    });
    document.querySelectorAll('[data-release-version]').forEach(node => {
      if (config.version) node.textContent = config.version;
    });
  }
  langButton.addEventListener('click', () => applyLang(currentLang === 'en' ? 'zh' : 'en'));
  mobileToggle.addEventListener('click', () => {
    const open = mobileToggle.getAttribute('aria-expanded') !== 'true';
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');mobileToggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown', event => {
    if(event.key==='Escape'){nav.classList.remove('is-open');mobileToggle.setAttribute('aria-expanded','false');}
  });
  // Keep English as the canonical/default copy for crawling; optional client-side Chinese view.
  applyLang('en');
})();
