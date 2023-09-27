function toggleNavbarVisibility() {
  var navbarList = document.getElementById("navbar-list");

  if (!navbarList) {
    return;
  }

  navbarList.style.display =
    navbarList.style.display === "none" ? "block" : "none";
}
