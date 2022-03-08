function handleClick() {
  document
    .querySelector(".mobile-nav-links")
    .classList.toggle("active-mobile-menu");
  document.querySelector(".mobile-menu-btn").classList.toggle("active-btn");
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
AOS.init();