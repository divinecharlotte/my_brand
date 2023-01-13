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
const workContainer = document.getElementById('work');

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
      title: 'Tourify',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      skills: ['React', 'Redux', 'Rails'],
      image:'./assets/rails.png',
      source_project: 'https://book-tours.netlify.app/',
      
    },
    {
        id: 1,
        title: 'Space Travellers',
        description: '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
        skills: ['React', 'Redux', 'Rails'],
        image:'./assets/spacetravel.png',
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
        <button type="button"onclick="popupDetailsFunc(${item.id})">See Project</button>
      </div>
      <div class="work-image">
      <img src=${item.image} class="work-place-img" />
      </div>
      
      </div>`;
    return content;
  });

  window.addEventListener('load', () => {
    workContainer.innerHTML = getWorkData;
    getStoredData();
    return workContainer;
  });