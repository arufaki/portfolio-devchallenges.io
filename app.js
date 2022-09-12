const html = document.querySelector(".html"),
  css = document.querySelector(".css"),
  javascript = document.querySelector(".javascript"),
  figma = document.querySelector(".figma"),
  photoshop = document.querySelector(".photoshop"),
  coreldraw = document.querySelector(".coreldraw");

window.addEventListener("load", () => {
  html.style.width = "95%";
  css.style.width = "83%";
  javascript.style.width = "67%";
  figma.style.width = "64%";
  photoshop.style.width = "69%";
  coreldraw.style.width = "75%";
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
});
