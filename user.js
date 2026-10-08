//*** UI ***//

user_pref("sidebar.revamp", false);
user_pref("browser.nova.enabled", false);
user_pref("widget.windows.mica.popups", 0);
user_pref("browser.compactmode.show", true);
user_pref("widget.non-native-theme.scrollbar.style", 2);
user_pref("widget.non-native-theme.use-theme-accent", true);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

//*** Privacy ***//

user_pref("breakpad.reportURL", "");
user_pref("security.OCSP.enabled", 0);
user_pref("app.normandy.api_url", "");
user_pref("permissions.default.geo", 2);
user_pref("extensions.enabledScopes", 5);
user_pref("app.normandy.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("pdfjs.enableScripting", false);
user_pref("browser.search.update", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.formfill.enable", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("nimbus.rollouts.enabled", false);
user_pref("network.IDN_show_punycode", true);
user_pref("browser.cache.disk.enable", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("editor.truncate_user_pastes", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("dom.security.https_only_mode", true);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("browser.sessionstore.interval", 60000);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.csp.reporting.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("browser.contentblocking.category", "strict");
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

//*** Performance ***//

user_pref("gfx.webrender.all", true);
user_pref("network.buffer.cache.count", 48);
user_pref("content.notify.interval", 100000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.buffer.cache.size", 65535);
user_pref("media.cache_readahead_limit", 3600);
user_pref("media.cache_resume_threshold", 1800);
user_pref("network.http.max-connections", 1800);
user_pref("layers.acceleration.disabled", false);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.content.skia-font-cache-size", 32);
user_pref("gfx.canvas.accelerated.cache-size", 512);	
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("network.http.request.max-start-delay", 5);	
user_pref("browser.cache.memory.max_entry_size", 10240);	
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("media.memory_caches_combined_limit_kb", 1048576);
user_pref("media.memory_caches_combined_limit_pc_sysmem", 10);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);

//*** Annoyances ***//

user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/** AI ***/

user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);

//*** Smooth Scrolling ***//

user_pref("apz.overscroll.enabled", true); 
user_pref("general.smoothScroll", true); 
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); 

//*** Miscellaneous ***//

user_pref("findbar.highlightAll", true);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("network.protocol-handler.expose.magnet", false);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("browser.download.open_pdf_attachments_inline", true);