const navLinks = document.querySelector('.nav-elements');
const burger = document.querySelector('.humbuger');
const hideMenu = document.getElementById('close');
const navItem = document.querySelector('.nav-item');


burger.onclick = function burger() {
  navLinks.style.right = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

navItem.onclick = function navItem() {
    navLinks.style.right = '-100%';
  };