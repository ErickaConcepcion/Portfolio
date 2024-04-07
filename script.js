document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Toggle
  document
    .querySelector(".humbarger")
    .addEventListener("click", function (event) {
      var menuList = document.querySelector(".menu-list");
      if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block";
      } else {
        menuList.style.display = "none";
      }
      event.preventDefault();
    });

  // Close menu on link click in mobile view
  var menuLinks = document.querySelectorAll(".menu-list li a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.innerWidth < 768) {
        document.querySelector(".menu-list").style.display = "none";
        event.preventDefault();
      }
    });
  });
});

//THIRD SECTION
