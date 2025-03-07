// skip 1st line
lockPref('xpinstall.signatures.required', false);
lockPref('extensions.install_origins.enabled', false);
lockPref("extensions.experiments.enabled", true); 

try {
  const cmanifest = Services.dirsvc.get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);

  Services.scriptloader.loadSubScript('chrome://userchromejs/content/BootstrapLoader.js');
} catch (ex) {};

try {
Services.scriptloader.loadSubScript('chrome://userchromejs/content/userChrome.js'); 
} catch (ex) {};