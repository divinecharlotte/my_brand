const navLinks = document.querySelector(".nav-elements");
const burger = document.querySelector(".humbuger");
const hideMenu = document.getElementById("close");
const navItem = document.querySelector(".nav-item");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const recentJob1 = document.querySelector(".recent-job-second-cont1");
const recentJob2 = document.querySelector(".recent-job-second-cont2");
const singleBlog = document.querySelector(".single-blog");
const mainContainer = document.querySelector(".blog-card");
const closeIcon2 = document.getElementById('closeIcon2');

burger.onclick = function burger() {
  navLinks.style.right = "0";
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = "-100%";
};

navItem.onclick = function navItem() {
  navLinks.style.right = "-100%";
};

first.onclick = function first() {
  recentJob2.style.display = "none";
  recentJob1.style.display = "flex";
};

second.onclick = function second() {
  recentJob1.style.display = "none";
  recentJob2.style.display = "flex";
};




//  ********************see blog****************

mainContainer.onclick = function mainContainer(){
    singleBlog.style.display = "flex";
   
    console.log("clicked")
};

closeIcon2.onclick = function closeIcon2(){
    singleBlog.style.display= "none";
    console.log("closed")
};
