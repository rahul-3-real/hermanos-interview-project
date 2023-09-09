// AOS
AOS.init({ duration: 1000, easing: "ease", once: true, disable: "mobile" });

// Navbar Dropdown
const navbarDropdown = () => {
  const dropdown = document.querySelectorAll("li.dropdown");
  dropdown.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("show");
    });
  });
};

// Toggle Navbar
const toggleNavbar = () => {
  const nav = document.querySelector("#navbar");
  const openBtn = document.querySelector("#toggle-nav");
  const closeBtn = document.querySelector("#close-nav");

  openBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("show");
  });
};

// FAQs
const faqToggle = () => {
  const cards = document.querySelectorAll(".faqs .tab");

  cards.forEach((card) => {
    const btn = card.querySelector(".tab-head");
    btn.addEventListener("click", () => {
      cards.forEach((item) => {
        if (item !== card) {
          item.classList.remove("active");
        }
      });
      card.classList.toggle("active");
    });
  });
};

// Review Video Play
const reviewVideos = () => {
  const content = document.querySelectorAll(".review .video");
  content.forEach((item) => {
    const playBtn = item.querySelector("i");
    const img = item.querySelector("img");
    const video = item.querySelector("video");
    playBtn.addEventListener("click", () => {
      img.style.display = "none";
      playBtn.style.display = "none";
      video.play();
    });
  });
};

// Loader
$(window).on("load", () => {
  $(".loader").fadeOut("slow");
});

// Review Carousel
$(".review-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

// Doctors Carousel
$(".doctor-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Hospital Carousel
$(".hospital-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
