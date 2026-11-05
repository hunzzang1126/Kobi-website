/* ShowFirst click tracking; no cookies. <script src="/sf-track.js" data-client="slug"> */
(function () {
  var U = "https://qwtifuqarfftfhecwrrg.supabase.co",
    K = "sb_publishable_fS2vWtjEGXHDVHT8E6rtIQ_aa9_Zmcl",
    s = document.currentScript || document.querySelector("script[data-client]"),
    c = s && s.getAttribute("data-client"),
    R = [
      ["call", 'a[href^="tel:"]'],
      ["directions", 'a[href*="google.com/maps"],a[href*="maps.google"],a[href*="goo.gl/maps"],a[href*="maps.apple.com"],a[href*="maps.app.goo.gl"]'],
      ["book", 'a[href*="opentable"],a[href*="resy"]'],
      ["order", 'a[href*="/order"]']
    ];
  if (!c) return;
  document.addEventListener("click", function (e) {
    try {
      if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest("a[href]"), t, i;
      if (!a) return;
      t = a.getAttribute("data-track");
      if (t !== "book" && t !== "order") for (t = 0, i = 0; i < R.length && !t; i++) if (a.matches(R[i][1])) t = R[i][0];
      if (!t) return;
      fetch(U + "/rest/v1/seo_events", {
        method: "POST", keepalive: true,
        headers: { apikey: K, Authorization: "Bearer " + K, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ client: c, type: t, page: location.pathname })
      }).catch(function () {});
    } catch (_) {}
  }, true);
})();
