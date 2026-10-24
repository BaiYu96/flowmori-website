(() => {
  const dict = {
    en: {
      navFeatures:'Features',navStory:'Our story',navSource:'Open source',navDownload:'Download',navCTA:'Get Flowmori',
      heroEyebrow:'A native macOS toolkit · In development',heroLine1:'Make your',heroLine2:'Mac flow.',heroLead:'Small tools. A smoother workflow.',heroDescription:'Screenshots, image pinning, clipboard history, and menu bar organization — thoughtfully brought together in one lightweight Mac app.',exploreFeatures:'Explore features',releaseStatus:'Release status',metaNative:'Native to macOS',metaSwift:'Built with Swift',metaOpen:'Open-source project',previewDisclaimer:'Illustrative preview · Final UI may vary',
      proofOne:'BUILT FOR MAC',proofTwo:'FOUR EVERYDAY ESSENTIALS',proofThree:'MADE TO STAY OUT OF YOUR WAY',
      featureKicker:'EVERYDAY ESSENTIALS',featureTitle:'Little tools.<br><em>Big difference.</em>',featureIntro:'The small actions add up. Flowmori brings your everyday Mac utilities into one calmer, more connected workflow.',featureUtility:'UTILITY',
      screenshotTitle:'Screenshots',screenshotText:'Capture the whole screen or just what you need. Copy, save, or pin it without losing your place.',shotTag1:'Area capture',shotTag2:'Shortcuts',shotTag3:'Quick actions',
      pinningTitle:'Image pinning',pinningText:'Keep screenshots and reference images visible above your workspace, exactly where you need them.',pinTag1:'Always visible',pinTag2:'Drag & resize',
      clipboardTitle:'Clipboard history',clipboardText:'Find the text or image you copied a moment ago. Search, revisit, and reuse without breaking focus.',clipTag1:'Searchable',clipTag2:'Quick access',clipTag3:'Local-first',
      menubarTitle:'Menu bar organization',menubarText:'Give your menu bar room to breathe. Keep crowded or notch-hidden app icons within easier reach.',menuTag1:'Tidy menu bar',menuTag2:'Notch-friendly',
      featureNotice:'Feature previews describe the intended product experience. Availability and behavior may change before release.',
      storyKicker:'THE IDEA BEHIND FLOWMORI',storyTitle:'Made for the<br><em>little things.</em>',storyP1:"A screenshot here. A reference image there. Something you copied and can't find again. A menu bar that's running out of space.",storyP2:'None of these should interrupt your day. Flowmori began as a personal tool to make these small moments a little easier — and grew into an open-source project worth sharing.',storyLink:"Why we're building in the open",
      philosophyKicker:'HOW WE BUILD',philosophyTitle:'A few things<br><em>we care about.</em>',pr1Title:'Native at heart',pr1Text:'Swift, SwiftUI, and AppKit. Built for macOS from the start.',pr2Title:'Light by intention',pr2Text:'Focused features, clear interactions, and a careful eye on resources.',pr3Title:'Privacy in mind',pr3Text:'A local-first direction, with transparent permission explanations.',pr4Title:'Open to improving',pr4Text:'Start small, listen carefully, and make each iteration count.',
      sourceKicker:'OPEN DEVELOPMENT',sourceTitle:'Good tools<br>are worth <em>sharing.</em>',sourceP:'Flowmori is being built as an open-source macOS project. Explore the code, suggest improvements, and help shape what comes next once the public repository is ready.',sourceStatus:'Public GitHub repository coming soon',sourceButton:'GitHub · Coming soon',sourceLive:'View source on GitHub',
      downloadKicker:'COMING SOON TO YOUR MAC',downloadTitle:'Your workflow,<br><em>a little smoother.</em>',downloadText:"Flowmori is in active development. We're refining the core experience before the first public release.",downloadButton:'Download · Coming soon',downloadLive:'Download for macOS',downloadMeta:'Currently developed and tested on macOS 26 · Release requirements to be confirmed',
      faqKicker:'GOOD TO KNOW',faqTitle:'A few quick<br><em>answers.</em>',q1:'What is Flowmori?',a1:'Flowmori is a native macOS productivity toolkit bringing screenshots, image pinning, clipboard history, and menu bar organization together.',q2:'Is Flowmori free and open source?',a2:"That's the plan. Flowmori is being developed as a free, open-source application. The repository and licensing details will be shared when the project becomes public.",q3:'Can I download it now?',a3:"Not yet. The first public build, installation instructions, and release notes will appear here when they're ready.",q4:'Which macOS versions are supported?',a4:'Development and testing currently focus on macOS 26. Final minimum version and hardware support will be confirmed with the release.',q5:'Why does it need system permissions?',a5:'Screenshots and some menu bar interactions rely on macOS system permissions. The application will explain the permissions needed for each feature.',q6:'What happens to my screenshots and clipboard data?',a6:'Flowmori is being designed with local-first functionality in mind. Data storage, permissions, and any network access will be documented before public release.',
      footerTag:'Make your Mac flow.<br>Small tools for everyday moments.',footerExplore:'Explore',footerProject:'Project',footerGithub:'GitHub · Soon',privacyLink:'Privacy note',footerRights:'Made for a better Mac workflow.',backTop:'Back to top ↑'
    },
    zh: {
      navFeatures:'核心功能',navStory:'品牌故事',navSource:'开源计划',navDownload:'下载',navCTA:'了解 Flowmori',
      heroEyebrow:'原生 macOS 效率工具 · 正在开发',heroLine1:'让你的 Mac',heroLine2:'更顺手。',heroLead:'小工具，大不同。',heroDescription:'把截图、贴图、剪贴板历史和菜单栏图标收纳，放进一款轻量的原生 Mac 应用。',exploreFeatures:'探索功能',releaseStatus:'发布进度',metaNative:'原生 macOS',metaSwift:'Swift 开发',metaOpen:'开源项目',previewDisclaimer:'概念示意 · 最终界面以实际版本为准',
      proofOne:'为 MAC 而生',proofTwo:'四大常用功能',proofThree:'专注每一个操作细节',
      featureKicker:'日常效率工具',featureTitle:'小小工具，<br><em>让操作更顺。</em>',featureIntro:'日常反复操作的那些小事，值得更轻松的体验。Flowmori 把常用工具整合到一起。',featureUtility:'功能',
      screenshotTitle:'快速截图',screenshotText:'截取整个屏幕或选定区域，随后复制、保存或贴在桌面上，操作一气呵成。',shotTag1:'区域截图',shotTag2:'快捷键',shotTag3:'快捷操作',
      pinningTitle:'桌面贴图',pinningText:'把截图或参考图片固定在其他窗口上方，随时对照，无需反复切换。',pinTag1:'悬浮显示',pinTag2:'自由移动缩放',
      clipboardTitle:'剪贴板历史',clipboardText:'找回刚刚复制的文字和图片。快速搜索、再次使用，不打断当前工作。',clipTag1:'历史搜索',clipTag2:'快捷访问',clipTag3:'本地优先',
      menubarTitle:'菜单栏图标收纳',menubarText:'整理拥挤的菜单栏，让被 MacBook 刘海遮挡的应用图标更容易找到。',menuTag1:'图标收纳',menuTag2:'刘海适配',
      featureNotice:'这里展示的是预期产品体验，功能实现及交互细节可能在正式发布前调整。',
      storyKicker:'FLOWMORI 的由来',storyTitle:'为每天的<br><em>那些小事而做。</em>',storyP1:'截一张图、固定参考图片、找回刚复制的文字，或者从拥挤的菜单栏里找到应用图标。',storyP2:'这些动作本来就不该那么费事。Flowmori 最初只是为了方便自己使用，后来决定把它做成一个可以分享、持续改进的开源项目。',storyLink:'了解我们的开源计划',
      philosophyKicker:'开发理念',philosophyTitle:'有些原则，<br><em>我们很在意。</em>',pr1Title:'坚持原生',pr1Text:'基于 Swift、SwiftUI 与 AppKit，从一开始就为 macOS 设计。',pr2Title:'保持轻量',pr2Text:'围绕高频功能打磨交互，谨慎控制资源占用。',pr3Title:'重视隐私',pr3Text:'以本地优先为方向，清楚说明每一项系统权限的用途。',pr4Title:'持续改进',pr4Text:'从最常用的功能开始，根据真实反馈不断迭代。',
      sourceKicker:'公开开发',sourceTitle:'好用的工具，<br><em>值得分享。</em>',sourceP:'Flowmori 正在作为开源 macOS 项目开发。待公开仓库上线后，欢迎查看源码、反馈问题和提出改进建议。',sourceStatus:'GitHub 公开仓库即将上线',sourceButton:'GitHub · 即将公开',sourceLive:'前往 GitHub 查看源码',
      downloadKicker:'即将与你见面',downloadTitle:'日常操作，<br><em>再顺手一点。</em>',downloadText:'Flowmori 正在积极开发中。我们会先完善核心功能和使用体验，再发布第一个公开版本。',downloadButton:'下载 · 即将开放',downloadLive:'下载 macOS 版本',downloadMeta:'目前主要在 macOS 26 开发测试 · 最终系统要求以发布说明为准',
      faqKicker:'常见问题',faqTitle:'你可能<br><em>想知道这些。</em>',q1:'Flowmori 是什么？',a1:'Flowmori 是一款原生 macOS 效率工具，整合截图、桌面贴图、剪贴板历史和菜单栏图标收纳。',q2:'Flowmori 会免费开源吗？',a2:'目前计划以免费开源的方式发布。公开仓库上线时会同步提供源码与许可证说明。',q3:'现在可以下载吗？',a3:'暂时还不能。第一个公开版本发布后，官网会提供安装包、安装说明和更新日志。',q4:'支持哪些 macOS 版本？',a4:'目前主要在 macOS 26 上开发测试，最低系统版本和芯片架构支持将在发布时确认。',q5:'为什么需要系统权限？',a5:'截图和部分菜单栏操作需要 macOS 系统权限。应用会说明每种权限的用途。',q6:'截图和剪贴板数据会上传吗？',a6:'Flowmori 以本地优先为设计方向。正式公开发布前，会披露实际的数据存储、权限和网络访问行为。',
      footerTag:'Make your Mac flow.<br>为日常操作，省一点心。',footerExplore:'探索',footerProject:'项目',footerGithub:'GitHub · 即将公开',privacyLink:'隐私说明',footerRights:'让 Mac 工作更顺手。',backTop:'回到顶部 ↑'
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
    const github = document.querySelector('#github-cta');
    if (config.githubUrl && /^https:\/\//.test(config.githubUrl)) {
      const a = document.createElement('a'); a.id='github-cta'; a.href=config.githubUrl; a.className='button button-primary source-live'; a.target='_blank'; a.rel='noopener noreferrer';
      a.innerHTML='<span>'+dict[currentLang].sourceLive+'</span> <span aria-hidden="true">↗</span>';
      github.replaceWith(a);
    } else if (github.tagName === 'A') {
      const span=document.createElement('span');span.id='github-cta';span.className='button button-disabled';span.setAttribute('aria-disabled','true');span.textContent=dict[currentLang].sourceButton;github.replaceWith(span);
    }
    const d = document.querySelector('#download-action');
    if (config.downloadUrl && /^https:\/\//.test(config.downloadUrl)) {
      const a = document.createElement('a'); a.id='download-action'; a.href=config.downloadUrl;a.className='button button-download-live';a.target='_blank';a.rel='noopener noreferrer';a.innerHTML='<span>'+dict[currentLang].downloadLive+'</span> <span aria-hidden="true">↓</span>';d.replaceWith(a);
    } else if (d.tagName === 'A') {
      const span=document.createElement('span');span.id='download-action';span.className='button button-download-disabled';span.setAttribute('aria-disabled','true');span.textContent=dict[currentLang].downloadButton;d.replaceWith(span);
    }
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
