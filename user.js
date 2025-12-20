//*** UI ***//

user_pref("ui.submenuDelay", 0);
user_pref("browser.uidensity", 1);
user_pref("sidebar.revamp", false);
user_pref("widget.windows.mica.popups", 0);
user_pref("browser.compactmode.show", true);
user_pref("dom.element.animate.enabled", true);
user_pref("widget.non-native-theme.scrollbar.style", 2);
user_pref("widget.non-native-theme.use-theme-accent", true);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

//*** Privacy ***//

user_pref("breakpad.reportURL", "");
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("privacy.userContext.enabled", true);
user_pref("browser.attribution.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("dom.security.https_only_mode", true);
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

user_pref("network.prefetch-next", false);
user_pref("network.dnsCacheEntries", 10000);
user_pref("network.dnsCacheExpiration", 600);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.pacing.requests.burst", 32);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.ssl_tokens_cache_capacity", 32768);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dnsCacheExpirationGracePeriod", 120);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.http.pacing.requests.min-parallelism", 10);
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);

user_pref("dom.ipc.processCount", 4);
user_pref("image.cache.size", 10485760);
user_pref("browser.cache.disk.enable", true);
user_pref("dom.storage.shadow_writes", true);
user_pref("accessibility.force_disabled", 1);
user_pref("media.cache_readahead_limit", 600);
user_pref("dom.storage.default_quota", 20480);
user_pref("media.cache_resume_threshold", 300);	
user_pref("dom.ipc.keepProcessesAlive.web", 2);
user_pref("media.memory_cache_max_size", 524288);
user_pref("browser.cache.disk.capacity", 2097152);
user_pref("browser.cache.memory.capacity", 65536);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.sessionstore.max_entries", 10);
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.cache.max_shutdown_io_lag", 100);
user_pref("image.mem.max_decoded_image_kb", 512000);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("browser.cache.memory.max_entry_size", 32768);
user_pref("javascript.options.mem.high_water_mark", 128);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.sessionhistory.max_total_viewers", 10);
user_pref("media.memory_caches_combined_limit_kb", 2097152);
user_pref("image.mem.shared.unmap.min_expiration_ms", 90000);
user_pref("browser.cache.disk.metadata_memory_limit", 16384);
user_pref("browser.tabs.min_inactive_duration_before_unload", 600000);
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

user_pref("layout.frame_rate", -1);
user_pref("content.maxtextrun", 8191);
user_pref("content.notify.ontimer", true);
user_pref("nglayout.initialpaint.delay", 5);
user_pref("content.interrupt.parsing", true);
user_pref("content.notify.interval", 100000);
user_pref("content.switch.threshold", 500000);
user_pref("content.max.tokenizing.time", 1000000);
user_pref("gfx.content.skia-font-cache-size", 32);

user_pref("webgl.max-size", 16384);
user_pref("gfx.webrender.all", true);
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.canvas.max-size", 16384);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.software", false);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("timer.auto_increase_timer_resolution", true);

//*** Annoyances ***//

user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("extensions.pocket.enabled", false);
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

//*** Smooth Scrolling ***//

user_pref("general.smoothScroll", true);
user_pref("apz.overscroll.enabled", false);
user_pref("mousewheel.scroll_series_timeout", 10);
user_pref("mousewheel.min_line_scroll_amount", "17");
user_pref("general.smoothScroll.msdPhysics.enabled", false);
user_pref("general.smoothScroll.currentVelocityWeighting", "0");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 50);

//*** Miscellaneous ***//

user_pref("image.jxl.enabled", true, locked);
user_pref("image.avif.enabled", true, locked);
user_pref("editor.truncate_user_pastes", true);
user_pref("dom.media.webcodecs.h265.enabled", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("network.protocol-handler.expose.magnet", false);
user_pref("browser.translations.newSettingsUI.enable", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);