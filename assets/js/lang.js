let clang = getCookie("currentlang");
let currentLang = "fr";
if (clang) {
  currentLang = clang;
}
loadLang();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function langFR() {
  rmActive("en");
  currentLang = "fr";
  loadLang();
}

function langEN() {
  rmActive("fr");
  currentLang = "en";
  loadLang();
}

function setActive(lang) {
  let className = "." + lang;
  if (document.querySelector(className)) {
    console.log(className);
    document.querySelector(className).classList.add("active");
  }
}

function rmActive(lang) {
  let className = "." + lang;
  console.log(className);
  document.querySelector(className).classList.remove("active");
}

function loadLang() {
  setCookie("currentlang", currentLang, 30);
  $("[data-localize]").localize("assets/lang/lang", { language: currentLang });
  setActive(currentLang);
}
