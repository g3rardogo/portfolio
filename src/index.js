import "./bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const animateUp = [...document.querySelectorAll(".animate-to-up")];
const animateDown = [...document.querySelectorAll(".animate-to-down")];
const animateLeft = [...document.querySelectorAll(".animate-to-left")];

const animate = (elements, animationName) => {
  const options = {
    rootMargin: "0px",
    threshold: 0.2,
  };

  const setItemAnimation = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationName);
        entry.target.classList.remove("animate");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(setItemAnimation, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
};

animate(animateUp, "animate-up");
animate(animateDown, "animate-down");
animate(animateLeft, "animate-left");
