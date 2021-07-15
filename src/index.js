import "./bootstrap/js/jquery-1.9.1.min";
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
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const animateUp = document.querySelectorAll(".animate-to-up");
const animateDown = document.querySelectorAll(".animate-to-down");
const animateLeft = document.querySelectorAll(".animate-to-left");
const animateRight = document.querySelectorAll(".animate-to-right");

function showScroll(elements, animation) {
  const scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < elements.length; i++) {
    const altura = elements[i].offsetTop;
    if (altura - 800 < scrollTop) {
      elements[i].style.opacity = 1;
      elements[i].classList.add(animation);
    }
  }
}

window.addEventListener("scroll", () => {
  showScroll(animateUp, "animate-up");
  showScroll(animateDown, "animate-down");
  showScroll(animateLeft, "animate-left");
  showScroll(animateRight, "animate-right");
});
