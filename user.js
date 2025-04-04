// Style firefox
//user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.tabs.tabMinWidth", 66);
user_pref("browser.tabs.tabClipWidth", 86);
user_pref("fp.tweak.autohide-bookmarks", true);
user_pref("fp.tweak.macos-button", false);
user_pref("fp.tweak.rounded-corners", true);
user_pref("fp.tweak.sidebar-enabled", true);
/*to enable blur effect*/
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// force print system
user_pref("print.prefer_system_dialog", false);
// disable spell checking
user_pref("layout.spellcheckDefault", 0);
// disable auto install updates
user_pref("app.update.auto", false);
// disable background service to install updates
user_pref("app.update.service.enabled", false);
// open tabs to the right of the current tab
user_pref("browser.tabs.insertAfterCurrent", true);
// enable dark-mode
user_pref("browser.in-content.dark-mode", true);
user_pref("ui.systemUsesDarkTheme", 1);
// restore previous session
user_pref("browser.startup.page", 1); //default: 3
// disable data collection & crash reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// disable WebRTC leaks
user_pref("media.peerconnection.enabled", true);
// allow search sugggestions in private windows
user_pref("browser.search.suggest.enabled.private", true);
// Disables geolocation and firefox logging geolocation requests.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
// Only send pings if send and receiving host match (same website).
user_pref("browser.send_pings.require_same_host", true);
// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
// Disable (Windows-only) scheduled task which runs in the background to collect and submit data about the browser
user_pref("default-browser-agent", false);
// Disable Container Tabs
//user_pref("privacy.userContext.enabled",false);
//user_pref("privacy.userContext.ui.enabled",false);
//user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);



//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 122                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
//user_pref("network.buffer.cache.size", 262144);
//user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("dom.security.sanitizer.enabled", true);

// Trim  URL
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
//user_pref("browser.contentblocking.category", "strict");
//user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
//user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
//user_pref("network.cookie.sameSite.noneRequiresSecure", true);
//user_pref("browser.download.start_downloads_in_tmp_dir", true);
//user_pref("browser.helperApps.deleteTempFileOnExit", true);
//user_pref("browser.uitour.enabled", false);
//user_pref("privacy.globalprivacycontrol.enabled", true);
//
///** OCSP & CERTS / HPKP ***/
//user_pref("security.OCSP.enabled", 0);
//user_pref("security.remote_settings.crlite_filters.enabled", true);
//user_pref("security.pki.crlite_mode", 2);
//
///** SSL / TLS ***/
//user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
//user_pref("browser.xul.error_pages.expert_bad_cert", true);
//user_pref("security.tls.enable_0rtt_data", false);
//
///** DISK AVOIDANCE ***/
//user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
//user_pref("browser.sessionstore.interval", 60000);
//
///** SHUTDOWN & SANITIZING ***/
//user_pref("privacy.history.custom", true);
//
///** SEARCH / URL BAR ***/
//user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
//user_pref("browser.urlbar.update2.engineAliasRefresh", true);
//user_pref("browser.search.suggest.enabled", false);
//user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
//user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
//user_pref("browser.formfill.enable", false);
//user_pref("security.insecure_connection_text.enabled", true);
//user_pref("security.insecure_connection_text.pbmode.enabled", true);
//user_pref("network.IDN_show_punycode", true);
//
///** HTTPS-FIRST POLICY ***/
//user_pref("dom.security.https_first", true);
//user_pref("dom.security.https_first_schemeless", true);
//
///** PASSWORDS ***/
//user_pref("signon.formlessCapture.enabled", false);
//user_pref("signon.privateBrowsingCapture.enabled", false);
//user_pref("network.auth.subresource-http-auth-allow", 1);
//user_pref("editor.truncate_user_pastes", false);
//
///** MIXED CONTENT + CROSS-SITE ***/
//user_pref("security.mixed_content.block_display_content", true);
//user_pref("security.mixed_content.upgrade_display_content", true);
//user_pref("security.mixed_content.upgrade_display_content.image", true);
//user_pref("pdfjs.enableScripting", false);
//user_pref("extensions.postDownloadThirdPartyPrompt", false);
//
///** HEADERS / REFERERS ***/
//user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
//
///** CONTAINERS ***/
//user_pref("privacy.userContext.ui.enabled", true);
//
///** WEBRTC ***/
//user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
//user_pref("media.peerconnection.ice.default_address_only", true);
//
///** SAFE BROWSING ***/
//user_pref("browser.safebrowsing.downloads.remote.enabled", false);
//
///** MOZILLA ***/
//user_pref("permissions.default.desktop-notification", 2);
//user_pref("permissions.default.geo", 2);
//user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
//user_pref("permissions.manager.defaultsUrl", "");
//user_pref("webchannel.allowObject.urlWhitelist", "");
//
///** TELEMETRY ***/
//user_pref("datareporting.policy.dataSubmissionEnabled", false);
//user_pref("datareporting.healthreport.uploadEnabled", false);
//user_pref("toolkit.telemetry.unified", false);
//user_pref("toolkit.telemetry.enabled", false);
//user_pref("toolkit.telemetry.server", "data:,");
//user_pref("toolkit.telemetry.archive.enabled", false);
//user_pref("toolkit.telemetry.newProfilePing.enabled", false);
//user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
//user_pref("toolkit.telemetry.updatePing.enabled", false);
//user_pref("toolkit.telemetry.bhrPing.enabled", false);
//user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
//user_pref("toolkit.telemetry.coverage.opt-out", true);
//user_pref("toolkit.coverage.opt-out", true);
//user_pref("toolkit.coverage.endpoint.base", "");
//user_pref("browser.ping-centre.telemetry", false);
//user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
//user_pref("browser.newtabpage.activity-stream.telemetry", false);
//
///** EXPERIMENTS ***/
//user_pref("app.shield.optoutstudies.enabled", false);
//user_pref("app.normandy.enabled", false);
//user_pref("app.normandy.api_url", "");
//
///** CRASH REPORTS ***/
//user_pref("breakpad.reportURL", "");
//user_pref("browser.tabs.crashReporting.sendReport", false);
//user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
//
///** DETECTION ***/
//user_pref("captivedetect.canonicalURL", "");
//user_pref("network.captive-portal-service.enabled", false);
//user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
