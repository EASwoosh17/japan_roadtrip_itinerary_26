// Optional helper for showing a custom install button.
// This does not change itinerary content. Include it near the end of index.html if you want a visible install button.
(function(){
  let deferredPrompt = null;
  const makeButton = () => {
    if (document.getElementById('pwaInstallButton')) return document.getElementById('pwaInstallButton');
    const btn = document.createElement('button');
    btn.id = 'pwaInstallButton';
    btn.type = 'button';
    btn.textContent = 'Install itinerary app';
    btn.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;border:0;border-radius:999px;padding:12px 16px;background:#1f2937;color:#fff;font:600 14px system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.24);cursor:pointer;';
    btn.hidden = true;
    document.body.appendChild(btn);
    btn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice.catch(()=>{});
        deferredPrompt = null;
        btn.hidden = true;
      } else {
        alert('To install on Android: open this page in Chrome, tap the three-dot menu, then choose Install app or Add to Home screen.');
      }
    });
    return btn;
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    makeButton().hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('pwaInstallButton');
    if (btn) btn.hidden = true;
  });
})();
