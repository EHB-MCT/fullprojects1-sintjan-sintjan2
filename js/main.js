window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".navbar").style.top = "0";
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").style.top = "";
    document.querySelector(".navbar").style.position = "absolute";
    document.querySelector(".navbar").classList.remove("scrolled");
  }
};
