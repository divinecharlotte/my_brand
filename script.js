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
const closeIcon3 = document.getElementById('closeIcon3');
const workContainer = document.getElementById('work');
const admin = document.getElementById('adminPannel');
const logged = document.getElementById('login');
const contactButton = document.getElementById('contactButton');
const contactForm = document.getElementById('contactForm');
// const popupContainer = document.getElementById('popupContainer');

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



//  ********************WORK SECTION****************

const details = [
 
    {
        id: 1,
        title: 'Space Travellers',
        description: '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
        skills: ['React', 'Redux', 'Rails'],
        image:'./assets/spacetravel.png',
        source_project: 'https://book-tours.netlify.app/',
        
      },   {
      id: 1,
      title: 'Tourify',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      skills: ['React', 'Redux', 'Rails'],
      image:'./assets/rails.png',
      source_project: 'https://book-tours.netlify.app/',
      
    },
      {
        id: 1,
        title: 'Tourify',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        skills: ['React', 'Redux', 'Rails'],
        image:'./assets/rails.png',
        source_project: 'https://book-tours.netlify.app/',
        
      },    {
        id: 1,
        title: 'Tourify',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        skills: ['React', 'Redux', 'Rails'],
        image:'./assets/rails.png',
        source_project: 'https://book-tours.netlify.app/',
        
      },
  
  ];

  const getWorkData = details.map((item, index) => {
    const skillsList = item.skills.map((list) => `<li>${list}</li>`).join('');
    const content = index % 2 === 0 ? `<div class="header-wrapper">
      <h1><span>02.</span>My Recent Works</h1>
      <hr />
    </div>
    <div class="work-wrapper">
    <div class="single-work-wrapper">
      <div class="work-image">
      <img src=${item.image} class="work-place-img" />
      </div>
      <div class="work-description">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <ul>${skillsList}</ul>
        <button type="button"onclick="popupDetailsFunc(${item.id})">See Project</button>
      </div>
    </div>`: `
    <div class="single-work-wrapper">
    
      <div class="work-description">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <ul>${skillsList}</ul>
        <button type="button" onclick="popupDetailsFunc(${item.id})">See Project</button>
      </div>
      <div class="work-image">
      <img src=${item.image} class="work-place-img" />
      </div>
      
      </div>`;
    return content;
  });


  const popupDetailsFunc = (cardId) => {
    if (cardId === null) return;
    let item = details;
    
    item = item.shift();
    const skillsList = item.skills.map((list) => `<li>${list}</li>`).join('');
    const res = `
    

    <div class="single-blog-container">
        <p id="closeIcon2" onclick="closePopupFunc()"><img src="./assets/Group90.png" alt=""></p>
        <div class="work-image">
      <img src=${item.image} class="work-place-img" />
      </div>
      <ul>${skillsList}</ul>
      <div class="content-container">
      <div class="content">
      <h2 id="popupTitle">${item.title}</h2>
        <p id="popupDescription">${item.description}</p>
        <div class="popup-link-main-cont">
                  <a href="#" target="_blank" class="popup-link-cont" id="liveDemo">
                    <span class="popup-link">
                  See live
                  <i class="fa-solid fa-up-right-from-square"></i>
                 </span>
                  </a>
                  <a href="#" target="_blank" class="popup-link-cont" id="sourceCode">
                    <span class="popup-link">
                  <span>See Source</span>
                    <i class="fa-brands fa-github"></i>
                    </span>
                  </a>
                </div>
      </div>
     </div>
    `;
  
    singleBlog.style.display = "flex";
    console.log('clicked')
    // document.body.style.overflow = 'hidden';
    singleBlog.innerHTML = res;
  };
  
  const closePopupFunc = (status) => {
    if (status === null) return;
    document.body.style.overflow = 'scroll';
   singleBlog.style.display = "none";
  };
  closePopupFunc(null);
  popupDetailsFunc(null);


  window.addEventListener('load', () => {
    workContainer.innerHTML = getWorkData;
    return workContainer;
  });

  // ******************************forms********************************

  function login(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    if (email === "divinemaina@gmail.com" && password === "user") {
        admin.style.display = "block";
        logged.style.display = "none"


    } else {
        alert("Invalid information");
        return;
    }
}
 var editor = new FroalaEditor('#froala');

 contactButton.onclick = function contactButton(){
  contactForm.style.display = "block";
 
  console.log("clicked")
};

closeIcon3.onclick = function closeIcon3(){
 contactForm.style.display= "none";
  console.log("closed")
};