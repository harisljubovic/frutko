let navBar = document.querySelector("#navBar");
let dropdownMenu = document.querySelector("#dropdownMenu");

window.onscroll = () => {
  navBarScroll();
};

function navBarScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.classList.add("navBarScroll");
    dropdownMenu.classList.remove("dropdownMenuTransparent");
  } else {
    navBar.classList.remove("navBarScroll");
    dropdownMenu.classList.add("dropdownMenuTransparent");
  }
}
