(function () {
  "use strict";
  document.documentElement.classList.add("js");
  document.querySelectorAll("img[data-loading]").forEach(function (image) {
    var frame = image.parentElement;
    frame.classList.add("image-loading");
    function ready() { frame.classList.remove("image-loading"); image.removeAttribute("data-loading"); }
    if (image.complete) ready(); else { image.addEventListener("load", ready, { once: true }); image.addEventListener("error", ready, { once: true }); }
  });
  var dashboardTitle = document.querySelector(".dash-top strong");
  if (dashboardTitle) dashboardTitle.textContent = "Raktdrishti Dashboard Preview";
  document.querySelectorAll(".team-avatar").forEach(function (avatar) { avatar.setAttribute("aria-label", "Raktdrishti Team placeholder"); });

  var icons = {
    "arrow-right":"M5 12h14m-6-6 6 6-6 6", "arrow-up":"M12 19V5m-6 6 6-6 6 6", "arrow-up-right":"M7 17 17 7M8 7h9v9",
    "droplet":"M12 3.5S5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 10 12 3.5 12 3.5Z", "timer":"M9 2h6m-3 8v4l2.5 1.5M19 9l1.5-1.5M12 5a8 8 0 1 0 8 8", "wallet":"M20 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2M3 7h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3m13.5-1h.01", "info":"M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0", "cpu":"M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z", "activity":"M3 12h4l3-7 4 14 3-7h4", "clock":"M12 7v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0", "map-pin":"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM12 10a2 2 0 1 0 0 .01", "indian-rupee":"M6 3h12M6 7h12M8 3c0 4 2 5 7 5H8l8 13", "scan":"M4 8V5a1 1 0 0 1 1-1h3m8 0h3a1 1 0 0 1 1 1v3m0 8v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3m3-4h10", "flask":"M9 3h6m-5 0v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 14h8", "check":"m5 12 4 4L19 6", "container":"M5 5h14v3H5zm1 3h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z", "monitor":"M4 5h16v11H4zm4 15h8m-4-4v4", "zap":"m13 2-9 12h7l-1 8 9-12h-7z", "briefcase":"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-12 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm-2 6h20", "heart":"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z", "waveform":"M3 12h3l2-6 4 12 3-9 2 3h4", "database":"M20 6c0 1.7-3.6 3-8 3s-8-1.3-8-3 3.6-3 8-3 8 1.3 8 3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6c0 1.7 3.6 3 8 3s8-1.3 8-3", "users":"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", "linkedin":"M6 9v9m0-13v.01M10 18v-5a3 3 0 0 1 6 0v5m-6-5V9", "github":"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6A4.8 4.8 0 0 0 19.8 2S18.7 1.7 16 3.5a13.4 13.4 0 0 0-7 0C6.3 1.7 5.2 2 5.2 2A4.8 4.8 0 0 0 5.1 5.3 5.2 5.2 0 0 0 3.7 9c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22", "instagram":"M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9.5 9.4a4.5 4.5 0 1 1-8.9 1.2 4.5 4.5 0 0 1 8.9-1.2ZM17.8 6.2h.01"
  };

  document.querySelectorAll("[data-icon]").forEach(function (element) {
    var path = icons[element.dataset.icon];
    if (path) element.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
  });

  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".menu-toggle");
  function closeMenu() {
    header.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll(".primary-nav a").forEach(function (link) { link.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("scroll", function () { header.classList.toggle("is-scrolled", window.scrollY > 8); }, { passive: true });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    group.querySelectorAll(".reveal").forEach(function (item, index) { item.style.transitionDelay = (index * 75) + "ms"; });
  });
  document.querySelectorAll(".reveal").forEach(function (element) { observer.observe(element); });
}());
