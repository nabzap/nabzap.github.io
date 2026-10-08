/* SITE SETTINGS: fill these in, save, and upload. Anything left empty stays hidden. */
var SETTINGS = {
  phone: "(770) 913-6650", // business phone
  walmartStore: ""    // link to your Walmart seller storefront
};
document.querySelectorAll("[data-link]").forEach(function (a) {
  var url = SETTINGS[a.getAttribute("data-link")];
  if (url) { a.href = url; a.hidden = false; }
});
var row = document.querySelector('[data-show="phone"]');
if (SETTINGS.phone && row) {
  var link = row.querySelector("[data-phone]");
  link.textContent = SETTINGS.phone;
  link.href = "tel:+1" + SETTINGS.phone.replace(/[^0-9]/g, "");
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
