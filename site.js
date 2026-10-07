/* SITE SETTINGS: fill these in, save, and upload. Anything left empty stays hidden. */
var SETTINGS = {
  phone: "",          // business phone, e.g. "(770) 555-0100"
  ebayStore: "",      // link to your eBay store page
  walmartStore: "",   // link to your Walmart seller storefront
  zuruListing: "",    // link to your ZURU advent calendar listing
  tabaListing: ""     // link to your Taba advent calendar listing
};
document.querySelectorAll("[data-link]").forEach(function (a) {
  var url = SETTINGS[a.getAttribute("data-link")];
  if (url) { a.href = url; a.hidden = false; }
});
if (SETTINGS.phone) {
  var row = document.querySelector('[data-show="phone"]');
  var link = row.querySelector("[data-phone]");
  link.textContent = SETTINGS.phone;
  link.href = "tel:" + SETTINGS.phone.replace(/[^0-9+]/g, "");
  row.hidden = false;
}

/* Phone menu */
document.documentElement.classList.add("js");
(function () {
  var header = document.querySelector("header.site");
  var btn = document.querySelector(".menu-btn");
  if (!header || !btn) return;
  btn.addEventListener("click", function () {
    var open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
