let navBar = document.querySelector("#navBar");

window.onscroll = () => {
  navBarScroll();
};

function navBarScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.classList.add("navBarScroll");
  } else {
    navBar.classList.remove("navBarScroll");
  }
}
