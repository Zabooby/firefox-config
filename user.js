//*** Theme Adjustments ***//

user_pref("browser.uidensity", 1);
user_pref("sidebar.revamp", false);
user_pref("widget.windows.mica.popups", 0);
user_pref("browser.compactmode.show", true);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

//*** Privacy ***//

user_pref("breakpad.reportURL", "");
user_pref("app.normandy.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("app.normandy.api_url", "", locked);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("browser.attribution.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("privacy.userContext.ui.enabled", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 2);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("app.shield.optoutstudies.enabled", false, locked);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

//*** Performance ***//

user_pref("network.proxy.type", 0);
user_pref("gfx.canvas.accelerated", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("network.http.rcwn.enabled", false);
user_pref("network.user_prefetch-next", true);
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 3600);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("network.dns.disableuser_prefetch", false);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref('dom.script_loader.bytecode_cache.strategy', 2);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("network.dns.disableuser_prefetchFromHTTPS", false);
user_pref("layout.css.grid-template-masonry-value.enabled", true);

//*** Annoyances ***//

pref("browser.ml.enable", false);
pref("browser.ml.chat.sidebar", false);
pref("browser.ml.chat.enabled", false);
pref("browser.ml.chat.shortcuts", false);
user_pref("extensions.pocket.enabled", false);
user_pref("full-screen-api.warning.delay", -1);
pref("browser.ml.chat.shortcuts.custom", false);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.privatebrowsing.vpnpromourl", "", locked);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

//*** Smooth Scrolling ***//

user_pref("general.smoothScroll", true);
user_pref("apz.overscroll.enabled", true);
user_pref("mousewheel.default.delta_multiplier_y", 300);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);

//*** Miscellaneous ***//

user_pref("media.eme.enabled", true);
user_pref('image.jxl.enabled', true, locked);
user_pref("image.avif.enabled", true, locked);
user_pref("editor.truncate_user_pastes", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("network.protocol-handler.expose.magnet", false);
user_pref("browser.download.manager.addToRecentDocs", true);
user_pref("browser.translations.newSettingsUI.enable", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);