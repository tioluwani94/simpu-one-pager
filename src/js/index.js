(function () {
  let mobileMenu = document.getElementById("mobile-menu");
  let copyRightDate = document.getElementById("copyright-date");
  let openMobileMenuBtn = document.getElementById("open-mobile-menu-btn");
  let closeMobileMenuBtn = document.getElementById("close-mobile-menu-btn");
  let resourcesArrow = document.getElementById("mobile-resources-arrow");
  let resourcesDropdown = document.getElementById("mobile-resources-dropdown");
  let resourcesDropdownMenu = document.getElementById(
    "mobile-resources-dropdown-menu"
  );
  let productsDropdown = document.getElementById("mobile-products-dropdown");
  let productsDropdownMenu = document.getElementById(
    "mobile-products-dropdown-menu"
  );
  let productsArrow = document.getElementById("mobile-products-arrow");

  copyRightDate.innerHTML = new Date().getFullYear();

  openMobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  closeMobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  productsDropdown.addEventListener("click", () => {
    productsArrow.classList.toggle("rotate-180");
    productsDropdownMenu.classList.toggle("hidden");
  });
  resourcesDropdown.addEventListener("click", () => {
    resourcesArrow.classList.toggle("rotate-180");
    resourcesDropdownMenu.classList.toggle("hidden");
  });
})();
