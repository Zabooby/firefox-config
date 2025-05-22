# Personal Firefox Configuration

<p align="center"><img width=100% src="https://github.com/user-attachments/assets/80ff9196-3f2b-411a-849c-f4c25652fe9c" alt="Firefox screenshot"></p>

## Overview

Just my personal config files for use in Firefox. Contains extensive css tweaks, based on the [DownToneUI](https://github.com/oviung/DownToneUI-Firefox) theme, to create a consistent Nord inspired UI experience across the browser. There are also quality of life, privacy and performance tweaks. I also use a custom start page which can be found [here](https://github.com/Zabooby/z-startpage).

## Installation 

* Go to your Firefox profile:
  * Linux - $HOME/.mozilla/firefox/XXXXXXX.default-XXXXXX/
  * macOS - Users/<USERNAME>/Library/Application Support/Firefox/Profiles/XXXXXXX.default-XXXXXXX
  * Windows - C:\Users\<USERNAME>\AppData\Roaming\Mozilla\Firefox\Profiles\XXXXXXX.default-XXXXXX
* Copy `chrome` and `user.js` to your Firefox Profile.
* Install the [Sidebery](https://addons.mozilla.org/firefox/addon/sidebery/) extension. 
* Import `settings.json` to: Sidebery settings -> Help -> Import addon data. 
* Copy the contents of `scripts` to your Firefox installation folder (usually C:\Program Files\Mozilla Firefox for Windows). Read [this](https://github.com/xiaoxiaoflood/firefox-scripts/issues/8#issuecomment-467619800) for Linux paths and [this](https://github.com/xiaoxiaoflood/firefox-scripts/issues/103#issuecomment-978723534) for macOS paths.
* Make sure the default dark theme is enabled.
* Restart Firefox.

## Customisation 

* Additions or updates of the default styles should be made in the following files: 
  * `chrome/DownToneUI/override_chrome.css` for changes to `chrome/userChrome.css`
  * `chrome/DownToneUI/override_content.css` for changes to `chrome/userContent.css`
  * `chrome/DownToneUI/override_globals.css` for changes to `chrome/_globals.css`

* Changing the color scheme:
    * This can be done by copying the `--dtui-theme` variables found in `chrome/DownToneUI/_globals.css` and modifying them in `chrome/DownToneUI/override_globals.css`
    * **NOTE:** if Sidebery tabs is used, these changes also have to be applied to: Sidebery settings > Style editor.

## Scripts 

* Restore `browser.newtab.url` to `about:config`, added from [this](https://github.com/xiaoxiaoflood/firefox-scripts) repo. 
  * This script restores the `browser.newtab.url` preference to `about:config`. Using this preference, you can set whatever you like as your New Tab page, including things like `file://` URLs that don't work with new tab override extensions. Once you install the script, just set the preference in `about:config` and it should work automatically. Make sure you don't have any other new tab extensions, or it might not work.

## Useful Links

* [r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/) - Great community for all things related to Firefox CSS tinkering. 
* [FirefoxCSS-Store](https://github.com/FirefoxCSS-Store/FirefoxCSS-Store.github.io) - A collection site of Firefox userchrome themes, mostly from the FirefoxCSS Reddit community. 
