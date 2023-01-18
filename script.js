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
const blogCard = document.querySelector('.blog-card');


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
    console.log('blog clicked')
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
   
    blogCard.innerHTML = card;
    // return blogCard
    // return workContainer;
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
        const errorTag = logged.getElementsByTagName('small');
        errorTag[0].innerHTML = 'Please insert admin email and password!';
      return;
    }
}


//  var editor = new FroalaEditor('#froala');

 contactButton.onclick = function contactButton(){

  contactForm.style.display = "block";
 
  console.log("clicked")
};

closeIcon3.onclick = function closeIcon3(){
 contactForm.style.display= "none";
  console.log("closed")
};
// ************************contact form validation*************************

function validateForm() {
const contactName = document.getElementById('name1')
const contactEmail = document.getElementById('email1')
const contactMessage = document.getElementById('contact_message')
const error = contactForm.getElementsByClassName('small1');
const errorMessage = contactForm.querySelector('.small2');
const textError = contactForm.querySelector('.small3');

    var x=document.forms["form1"]["name"].value;
    var nameRegex= /^[^\s]+( [^\s]+)+$/;
    if (!x.match(nameRegex))
     {
  
      error[0].innerHTML = 'Names should be sepaeted by a space';
      return false;
     }
    
     var y=document.forms["form1"]["email"].value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!y.match(mailformat)) {
      const errorMessage = contactForm.querySelector('.small2');
         errorMessage.innerHTML = 'Please insert admin email and password!';
         return false;

    }
    var z = document.forms["form1"]["message"].value;
    if(z.length <= 6 || z.length > 100){
     textError.innerHTML = 'Your message should contain between 6 and 100 leters';
     return false;
    }
   contactName.value ="";
 contactEmail.value ="";
 contactMessage.value ="";
 textError.innerHTML ="";
 error[0].innerHTML ="";
 errorMessage.innerHTML="";

    return false;
    }


    
// function checkLength(el) {
//   if (el.value.length <= 6) {
//     alert("length must be exactly 6 characters")
//   }
// }
// ***********************************new blog*************************
// const blogs = [];

// // const newBlog = new Blog();
// const addNewBlog = document.querySelector('.add-new-blog');
// addNewBlog.addEventListener('submit',(e) =>{
//   e.preventDefault();
//   const blogName = addNewBlog.name.value;
//   const blogDescription =addNewBlog.message.value;
//   // newBlog.addBlog({blogName,blogDescription});
//   addNewBlog.name.value = '';
//   addNewBlog.message.value = '';

// });

//  blogCard.innerHTML = `<div class="blog-card">
// <div class="blog-icons">
//   <img src="./assets/boxArrow.png" alt="box-arrow" />
//   <a href="https://github.com/divinecharlotte/metrics-webapp"><img src="./assets/github.png"
//       alt="github-icon" /></a>
// </div>
// <h2>Digital Currency</h2>
// <p>
//   'Digital Currency' is about working with the live data from the
//   Blockchain API. It provides information such as trending coins, coins'
//   prices, crypto transactions, and full crypto descriptions.
// </p>
// <ul>
//   <li>12 likes</li>
//   <li>12 comments</li>
// </ul>
// </div>
// `
// ;
// window.addEventListener('load', () => {
//   blogCard.innerHTML = card;
//   return blogCard
// });