// document.addEventListener("DOMContentLoaded", yall);
//AOS
// AOS.init({
//     duration: 600
// });

// Get the header
var header = document.getElementById("header");
var body = document.body;

if (header) {
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function updateStickyHeader() {
    if (window.pageYOffset > sticky) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
    updateLogoImage();
  }

  // Use an event listener instead of onscroll property
  window.addEventListener("scroll", function () {
    // Use requestAnimationFrame for performance
    window.requestAnimationFrame(updateStickyHeader);
  });
}

// Update the logo image based on the sticky and home page classes
function updateLogoImage() {
  const isHomePage = $("body").hasClass("home");
  const isSticky = $("body").hasClass("sticky");
  const isRegister = $("body").hasClass("regPage");
  const logoImgSrc = isHomePage && !isSticky ? "img/logo-white.png" : "img/logo.png";
  // $(".logo").find("img").attr("src", logoImgSrc);
}

//
//new WOW().init();

/////////////////////////////////////

///////////////////////////////////
$(function () {
  // Push Menu
  const overlay = $(".sidebar-overlay");
  const navMain = $("#navMain");

  // Main Slider
  if ($(".homeSlider").length > 0) {
    $(".homeSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplayDuration: 3000,
      arrows: false,
      lazyLoad: "ondemand",
      fade: true,
    });
  }

  // Brands Slider
  if ($(".brandSlider").length > 0) {
    $(".brandSlider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      dots: true,
      autoplay: true,
      autoplayDuration: 2000,
      arrows: true,
      lazyLoad: "ondemand",
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",

      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Testimonial Slider
  if ($(".testimonialsSlider").length > 0) {
    $(".testimonialsSlider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplayDuration: 2000,
      arrows: true,
      lazyLoad: "ondemand",
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",

      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Feather Icons
  feather.replace();

  // Capture Face

  // Toggle Sample Image and Placeholder
  $(".toggleSample").on("click", function () {
    var $cfPlaceholder = $(".cfPlaceholder");
    var $cfSample = $(".cfSample");

    // Toggle visibility of placeholder and sample images
    $cfPlaceholder.toggleClass("d-none");
    $cfSample.toggleClass("d-none");

    // Toggle text of the link
    var newText = $cfSample.hasClass("d-none") ? "View sample photo" : "Hide sample photo";
    $(this).text(newText);
  });
});

// Certifications Accordion
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOMContentLoaded");
//   const accordionItems = document.querySelectorAll("#cAccordion .card");

//   accordionItems.forEach((item) => {
//     const icon = item.querySelector(".icon");
//     const collapse = item.querySelector(".card-body");

//     console.log("item", item);

//     // Check if the accordion item is initially collapsed
//     if (!collapse.classList.contains("collapsed")) {
//       icon.classList.remove("fa-minus");
//       icon.classList.add("fa-plus");
//     }

//     // Listen for Bootstrap collapse events
//     collapse.addEventListener("hidden.bs.collapse", () => {
//       icon.classList.remove("fa-minus");
//       icon.classList.add("fa-plus");
//       console.log("hidden");
//     });

//     collapse.addEventListener("shown.bs.collapse", () => {
//       icon.classList.remove("fa-plus");
//       icon.classList.add("fa-minus");
//       console.log("shown");
//     });
//   });
// });
