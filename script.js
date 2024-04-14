// document.addEventListener("DOMContentLoaded", function () {
//   // Hamburger Toggle
//   document
//     .querySelector(".humbarger")
//     .addEventListener("click", function (event) {
//       var menuList = document.querySelector(".menu-list");
//       if (menuList.style.display === "none" || menuList.style.display === "") {
//         menuList.style.display = "block";
//       } else {
//         menuList.style.display = "none";
//       }
//       event.preventDefault();
//     });

//   // Close menu on link click in mobile view
//   var menuLinks = document.querySelectorAll(".menu-list li a");
//   menuLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       if (window.innerWidth < 768) {
//         document.querySelector(".menu-list").style.display = "none";
//         event.preventDefault();
//       }
//     });
//   });
// });

// //THIRD SECTION

document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Toggle
  document
    .querySelector(".humbarger")
    .addEventListener("click", function (event) {
      let menuList = document.querySelector(".menu-list");
      if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "block";
      } else {
        menuList.style.display = "none";
      }
      event.preventDefault();
    });

  // Smooth scrolling for anchor links
  let menuLinks = document.querySelectorAll(".menu-list li a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.innerWidth < 768) {
        document.querySelector(".menu-list").style.display = "none";
      }

      let targetId = this.getAttribute("href").substring(1); // Get the target section id
      let targetSection = document.getElementById(targetId);
      if (targetSection) {
        event.preventDefault(); // Prevent default anchor link behavior
        let offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth", // Optional: smooth scrolling effect
        });
      }
    });
  });
});
