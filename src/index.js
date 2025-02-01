// Import our custom CSS
import './scss/main.scss';
import $ from "jquery";
window.jQuery = $;
/* ========== GOTO TOP ========== */
let topBtn = document.querySelector(".goto-top");
if (topBtn) {
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ========== SHOW NAVBAR ON SCROLL ========== */
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

/* ========== SEARCH POPUP TOGGLE ========== */
$(".search-popup-btn").on("click", function () {
  $(".search-popup").toggleClass("show");
});
$(".search-popup-close").on("click", function () {
  $(".search-popup").removeClass("show");
});
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    $(".search-popup").removeClass("show");
  }
});


/* ========== MOBILE MENU ========== */
$(document).ready(function () {
  // Append submenu buttons
  $("#navbar-menu ul .submenu > span").append(
    '<i class="ti ti-chevron-down"></i>'
  );
  $("#navbar-menu-mobile ul .submenu > span").append(
    '<i class="ti ti-chevron-down"></i>'
  );

  // toggle mobile menu
  $(".toggle-menu,.close-menu,.mobile-menu-overlay").click(function () {
    $(".mobile-menu").toggleClass("open");
  });

  // left sidebar open
  $(".show-offcanvas,.left-sidebar-close,.left-sidebar-overlay").click(
    function () {
      $(".left-sidebar").toggleClass("open");
    }
  );

  $(".submenu").on("click", function (e) {
    // On mobile, toggle submenu on click
    if (window.innerWidth <= 992) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find("ul").slideUp();
      } else {
        $("#navbar-menu-mobile ul li").removeClass("active");
        $("#navbar-menu-mobile ul li ul").slideUp();
        $(this).addClass("active");
        $(this).find("ul").stop().slideToggle();
        e.stopPropagation();
      }
    }
  });
});


/* ==========  11. SET ACTIVE MENU ========== */
function setActiveMenu() {
  // add active menu
  const submenuLinks = document.querySelectorAll(".menu li a");
  // Loop through each submenu link
  submenuLinks.forEach(function (link) {
    // Get the current URL
    const currentUrl = window.location.href;
    // Get the href attribute of the submenu link
    const href = link.getAttribute("href");
    // Check if the current URL matches the submenu link's href
    const filename = new URL(currentUrl).pathname.split("/").pop();
    const cleanName = filename.replace(".html","")
    const cleanHref = href.replace(".html","")
    if (cleanHref===cleanName || cleanHref === 'index' && filename=='') {
      // Add the 'active' class to the parent menu-btn
      link.classList.add("active");
      const submenu = link.parentElement.parentElement;
      const menuBtn = submenu.previousElementSibling;
      menuBtn.classList.add("active");
    }
  });
}

setActiveMenu();


/* ========== BACK TO TOP BUTTON ========== */
$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('.back-to-top').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
  }
  $('.back-to-top').on('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
});




/* ========== LOADER ========== */
$(document).ready(function () {
  setTimeout(() => {
    $(".loader-container").fadeOut("slow");
    document.documentElement.style.overflow = "auto";
  }, 400);
});


