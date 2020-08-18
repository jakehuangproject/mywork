const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".top_right");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
