$(".section1_slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: $(".prev"),
  NextArrow: $(".Next"),
  autoplaySpeed: 2000,
//   dots: false, Boolean
//   arrows: false, Boolean
});

// side-bar//
const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll("nav .nav-item");
const toggle = document.querySelector(".sidebar .toggle");

toggle.addEventListener("click", () => {
  if (sidebar.className === "sidebar") sidebar.classList.add("open");
  else sidebar.classList.remove("open");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});
