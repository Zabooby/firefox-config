# Personal Firefox Configuration

<p align="center"><img width=100% src="https://github.com/Zabooby/firefox-config/assets/78969986/348a9e8c-ff25-4939-adaf-f210b182bcff" alt="Firefox screenshot"></p>
<p align="center"><img width=100% src="https://github.com/Zabooby/firefox-config/assets/78969986/c66827dd-c36b-4db3-a3de-79f8b8e26b2d" alt="Firefox screenshot"></p>

## Overview

Just my personal config files for use in Firefox. Contains extensive css tweaks, based on the [FlyingFox](https://github.com/akshat46/FlyingFox) theme, to create a consistent ui experience across the browser. Also, there are privacy tweaks, quality of life changes and a custom start page based on the [Excalith](https://github.com/excalith/excalith-start-page) start page. 

## Installation 

* Go to your Firefox profile:
  * Linux - $HOME/.mozilla/firefox/XXXXXXX.default-XXXXXX/
  * macOS - Users/<USERNAME>/Library/Application Support/Firefox/Profiles/XXXXXXX.default-XXXXXXX
  * Windows - C:\Users\<USERNAME>\AppData\Roaming\Mozilla\Firefox\Profiles\XXXXXXX.default-XXXXXX
* Copy `chrome` and `user.js` to your Firefox Profile.
* Install the [Tree Style Tab](https://addons.mozilla.org/firefox/addon/tree-style-tab/) extension. 
* Import `Tree-Style-Tab.json` in the settings (Scroll all the way to the [bottom](https://github.com/Zabooby/firefox-config/assets/78969986/fd4dde36-bb6d-4896-9485-2e11ad7f62cc)). 
* Copy the contents of `scripts` to your Firefox installation folder (usually C:\Program Files\Mozilla Firefox for Windows). Read [this](https://github.com/xiaoxiaoflood/firefox-scripts/issues/8#issuecomment-467619800) for Linux paths and [this](https://github.com/xiaoxiaoflood/firefox-scripts/issues/103#issuecomment-978723534) for macOS paths.
* Install fonts in the `fonts` folder.
* Make sure the default dark theme is enabled.
* Restart Firefox.
* Customise to your liking.

## Scripts 

* Restore `browser.newtab.url` to `about:config`, taken from [this](https://github.com/xiaoxiaoflood/firefox-scripts) repo. 
  * This script restores the `browser.newtab.url` preference to `about:config`. Using this preference, you can set whatever you like as your New Tab page, including things like `file://` URLs that don't work with new tab override extensions. Once you install the script, just set the preference in `about:config` and it should work automatically. Make sure you don't have any other new tab extensions, or it might not work.

## Useful Links

* [r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/) - Great community for all things related to Firefox CSS tinkering. 
* [To-Do List](https://github.com/users/Zabooby/projects/4) - Includes all the bugs I've come across and plan to fix, as well as major updates already implemented.
