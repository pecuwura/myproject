const slider = [...document.querySelectorAll(".slider")];
const btn = [...document.querySelectorAll(".btn")];
const btn1 = [...document.querySelectorAll(".btn1")];

slider.forEach[
  (item, i) => {
    let containerDimensions = item.getboundingClientRect();
    let containerwidth = containerDimensions.width;

    btn[i].addEventListener("click", () => {
      item.scrollLeft += containerwidth;
    });
    btn1[i].addEventListener("click", () => {
      item.scrollLeft -= containerwidth;
    });
  }
];
