const navLinks = document.querySelector(".nav-elements");
const burger = document.querySelector(".humbuger");
const hideMenu = document.getElementById("close");
const navItem = document.querySelector(".nav-item");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const recentJob1 = document.querySelector(".recent-job-second-cont1");
const recentJob2 = document.querySelector(".recent-job-second-cont2");
const singleBlog = document.getElementById("single_blog");
const fullWork = document.querySelector(".single-blog");
const blog = document.querySelector(".blog-card");
const closeIcon2 = document.getElementById("closeIcon2");
const closeIcon3 = document.getElementById("closeIcon3");
const workContainer = document.getElementById("work");
const admin = document.getElementById("adminPannel");
const logged = document.getElementById("login");
const contactButton = document.getElementById("contactButton");
const contactForm = document.getElementById("contactForm");
const blogCards = document.querySelector(".blog-cards");

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

//  ********************WORK SECTION****************

const details = [
  {
    id: 1,
    title: "Space Travellers",
    description:
      '"Space Travelers" is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    skills: ["React", "Redux", "Rails"],
    image: "./assets/spacetravel.png",
    source_project: "https://book-tours.netlify.app/",
  },
  {
    id: 1,
    title: "Tourify",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["React", "Redux", "Rails"],
    image: "./assets/rails.png",
    source_project: "https://book-tours.netlify.app/",
  },
  {
    id: 1,
    title: "Tourify",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["React", "Redux", "Rails"],
    image: "./assets/rails.png",
    source_project: "https://book-tours.netlify.app/",
  },
  {
    id: 1,
    title: "Tourify",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["React", "Redux", "Rails"],
    image: "./assets/rails.png",
    source_project: "https://book-tours.netlify.app/",
  },
];

const getWorkData = details.map((item, index) => {
  const skillsList = item.skills.map((list) => `<li>${list}</li>`).join("");
  const content =
    index % 2 === 0
      ? `<div class="header-wrapper">
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
    </div>`
      : `
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
  const skillsList = item.skills.map((list) => `<li>${list}</li>`).join("");
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

  fullWork.style.display = "flex";

  console.log("clicked");
  fullWork.innerHTML = res;
};

const closePopupFunc = (status) => {
  if (status === null) return;
  document.body.style.overflow = "scroll";
  fullWork.style.display = "none";
};
closePopupFunc(null);
popupDetailsFunc(null);

// ******************************forms********************************

function login(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;

  if (email != "divinemaina@gmail.com") {
    const errorTag = logged.getElementsByClassName("loginEmail");
    errorTag[0].innerHTML = "Please insert admin email!";
    return;
  } else if (password != "user") {
    const passwordError = logged.getElementsByClassName("loginPassword");
    passwordError[0].innerHTML = "Please insert admin password!";
    return;
  } else {
    admin.style.display = "block";
    logged.style.display = "none";
  }
}

//  var editor = new FroalaEditor('#froala');

contactButton.onclick = function contactButton() {
  contactForm.style.display = "block";

  console.log("clicked");
};

closeIcon3.onclick = function closeIcon3() {
  contactForm.style.display = "none";
  console.log("closed");
};
// ************************ form validations*************************
let messages = JSON.parse(localStorage.getItem("messages")) || [];
function validateForm() {
  const contactName = document.getElementById("name1");
  const contactEmail = document.getElementById("email1");
  const contactMessage = document.getElementById("contact_message");
  const error = contactForm.getElementsByClassName("small1");
  const errorMessage = contactForm.querySelector(".small2");
  const textError = contactForm.querySelector(".small3");
  const messageSuccess = contactForm.querySelector(".message-success");

  const message = {
    name: contactName.value,
    email: contactEmail.value,
    info: contactMessage.value,
    index: messages.length + 1,
  };

  var x = message.name;
  var nameRegex = /^[^\s]+( [^\s]+)+$/;
  if (!x.match(nameRegex)) {
    error[0].innerHTML = "Names should be sepaeted by a space";
    return false;
  }

  var y = message.email;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!y.match(mailformat)) {
    const errorMessage = contactForm.querySelector(".small2");
    errorMessage.innerHTML = "Please insert admin email!";
    return false;
  }
  var z = message.info;
  if (z.length <= 6 || z.length > 100) {
    textError.innerHTML =
      "Your message should contain between 6 and 100 leters";
    return false;
  }
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
  textError.innerHTML = "";
  error[0].innerHTML = "";
  errorMessage.innerHTML = "";
  messages = [...messages, message];
  localStorage.setItem("messages", JSON.stringify(messages));
  messageSuccess.innerHTML = "message submitted successfully";
  return false;
}
let comments = JSON.parse(localStorage.getItem("comments")) || [];

function blogForm(item) {
  const blogFormName = document.getElementById("name-" + item);
  const blogFormmessage = document.getElementById("comment-" + item);
  const error = document.getElementById("nameError-" + item);
  const textError = document.getElementById("messageError-" + item);

  const comment = {
    name: blogFormName.value,
    message: blogFormmessage.value,
    index: comments.length + 1,
    blog: item,
  };

  let x = comment.name;
  var nameRegex = /^[^\s]+( [^\s]+)+$/;
  if (!x.match(nameRegex)) {
    error.innerHTML = "Names should be sepaeted by a space";
    return false;
  }

  var z = comment.message;
  if (z.length <= 4) {
    textError.innerHTML = "comment should be more than 4 leters";
    return false;
  }
  blogFormName.value = "";
  blogFormmessage.value = "";
  error.innerHTML = "";
  textError.innerHTML = "";
  comments = [...comments, comment];
  localStorage.setItem("comments", JSON.stringify(comments));
  return false;
}

const apiUrl = "http://localhost:5000/api/blogs";

const getBlog = async () => {
  try {
    const response = await fetch(apiUrl);
    const blogs = await response.json();
    // console.log(blogs);
    
    const blogData = blogs.map((item) => {
      const id = item._id;
      console.log(id);
      return `
        <div class="blog-card" id="${item.index}">
          <div class="blog-icons">
            <img src="./assets/boxArrow.png" alt="box-arrow" />
            <a href="https://github.com/divinecharlotte/metrics-webapp">
              <img src="./assets/github.png" alt="github-icon" />
            </a>
          </div>
          <h2>${item.title}</h2>
          <p>${item.content.substring(0,10)}</p>
          <ul>
            <li>
              <button id="like-btn" type="button" onclick="increment()">
                <img src="/assets/like.png" id="like" class="like-count-${item.index}" alt="likes">
              </button>
              <p id="counter"> 0 Likes</p>
            </li>
            <li id="current-comments-${item.index}">comments</li>
          </ul>
          <button type="button" onclick="blogDetailsFunc('${id}')">full view</button>
        </div>
      `;
    }).join("");
    
    blogCards.innerHTML = blogData;
    
    countBlogComments();
  } catch (error) {
    console.error("Error fetching blogs", error);
  }
};
// let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// const getBlog = () => {
//   const blogData = blogs
//     .map(
//       (item) => `


      
//         <div class="blog-card" id ={item.index} >
        
//              <div class="blog-icons">
//              <img src="./assets/boxArrow.png" alt="box-arrow" />
//              <a href="https://github.com/divinecharlotte/metrics-webapp"
//                ><img src="./assets/github.png" alt="github-icon"
//              /></a>
//         </div>
        
      
//            <h2>${item.name}</h2>
//         <p>${item.description}</p>
//           <ul>
//           <li><button id="like-btn" type="button" onclick="increment()"><img src="/assets/like.png" id="like" class="like-count-${item.index}" alt="likes"></button><p id="counter"> 0 Likes</p></li>
//           <li id="current-comments-${item.index}"> comments</li>
//         </ul>
       
//           </ul>
//           <button type="button"onclick="blogDetailsFunc(${item.id})">full view</button>
//            </div> 
      


//      `
//     )
//     .join("");

//   blogCards.innerHTML = blogData;

//   countBlogComments();


// };

const blogDetailsFunc = async (id) => {
  const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
  const blog = await response.json();
  const result = `
    <div class="blog-card">
      <p id="closeIcon2" onclick="getBlog()"><img src="./assets/Group90.png" alt=""></p>
      <img src="${blog.image}"/>
      <h2>${blog.title}</h2>
      <p >${blog.content}</p>
      <ul>
        <li><button id="like-btn" type="button" onclick="increment()"><img src="/assets/like.png" id="like" class="like-count-${blog.index}" alt="likes"></button><p id="counter"> 0 Likes</p></li>
        <li id="current-comments-${blog.index}"> comments</li>
      </ul>
      <div class="comments" id="comments-${blog.index}"></div>
      <div class="comments-wrapper">
        <form class="comment" onsubmit="return false;" id="${blog.index}">
          <h3 class="form-title">Add your comment</h3>
          <div class="${blog.index}"></div>
          <input type="text" name="name" id="name-${blog.index}" class="${blog.index}" placeholder="Your names :" />
          <br> 
          <small class="nameError" id="nameError-${blog.index}"></small> <br>
          <textarea class="${blog.index}" id="comment-${blog.index}" cols="2" rows="4" placeholder="Comment :" ></textarea>
          <br />
          <small class="messageError" id="messageError-${blog.index}"></small> <br>
          <button type="button" onclick="return blogForm(${blog.index})">Submit</button>
        </form>
      </div>
    </div>
  `;
  blogCards.innerHTML = result;
  comments.forEach((item) => {
    const blogIndex = item.blog;
    const commentsDiv = document.getElementById(`comments-${blogIndex}`);
    if(commentsDiv){
      const p = document.createElement("p");
      p.textContent = `${item.message} by ${item.name}`;
      commentsDiv.appendChild(p);
    }
  });
};



// const blogDetailsFunc = () => {
//   const result = blogs
//     .map(
//       (item) => 
// ` <div class="blog-card">
// <p id="closeIcon2" onclick="getBlog()"><img src="./assets/Group90.png" alt=""></p>
    
  
//       <img src="${item.image}"/>
//       <h2>${item.name}</h2>
//       <p >${item.description}</p>
//       <ul>

//  <li><button id="like-btn" type="button" onclick="increment()"><img src="/assets/like.png" id="like" class="like-count-${item.index}" alt="likes"></button><p id="counter"> 0 Likes</p></li>
//         <li id="current-comments-${item.index}"> comments</li>
//       </ul>
//       <div class="comments" id="comments-${item.index}"></div>

      
//         <div class="comments-wrapper">


//           <form class="comment" onsubmit="return false;" id="${item.index}" >
//             <h3 class="form-title">Add your comment</h3>
//             <div class="${item.index}"></div>
//             <input type="text" name="name" id="name-${item.index}" class="${item.index}" placeholder="Your names :" />
//             <br> 
//             <small class="nameError" id="nameError-${item.index}"></small> <br>
//             <textarea class="${item.index}" id="comment-${item.index}" cols="2" rows="4" placeholder="Comment :" ></textarea>
//             <br />
//             <small class="messageError" id="messageError-${item.index}"></small> <br>
        
//             <button type="button" onclick="return blogForm(${item.index})">Submit</button>
//         </form>
//         </div>
//     </div>` )
//     .join("");
//     blogCards.innerHTML = result;
   
//     comments.forEach((item) => {
//       const blogIndex = item.blog;
//       const commentsDiv = document.getElementById(`comments-${blogIndex}`);
//       if(commentsDiv){
//         const p = document.createElement("p");
//         p.textContent = `${item.message} by ${item.name}`;
//         commentsDiv.appendChild(p);
//       }
//     });
//   }


// let likes= 0
// function increment(){
//     if (likes !==0 ) {
//     }
//     likes++
// document.getElementById("counter").innerHTML = `${likes}likes`
// }
function createBlog() {
  const blogName = document.querySelector(".blog-name");
  const blogDescription = document.querySelector(".blog-description");
  const createBlogForm = document.querySelector(".add-new-blog");
  const nameError = createBlogForm.getElementsByClassName("blogNameError");
  const descriptionError = createBlogForm.querySelector(".descriptionError");
  const imageError = createBlogForm.querySelector(".imageError");
  const blogSubmitted = createBlogForm.querySelector(".blog-submitted");

  const blog = {
    image: imageUrl,
    name: blogName.value,
    description: blogDescription.value,
    index: blogs.length + 1,
  };
  var y = blog.image;
  if (y == "") {
    imageError.innerHTML = "blog image is required";
    return false;
  }

  let x = blog.name;
  var nameRegex = /^[^\s]+( [^\s]+)+$/;
  if (!x.match(nameRegex)) {
    nameError[0].innerHTML = "blog title should be separeted by single space";
    return false;
  }

  var z = blog.description;
  if (z.length <= 20) {
    descriptionError.innerHTML =
      "blog description should be more than 20 letters";
    return false;
  }

  blodImage.value = "";
  blogName.value = "";
  blogDescription.value = "";
  imageError.innerHTML = "";
  nameError[0].innerHTML = "";
  descriptionError.innerHTML = "";
  blogs = [...blogs, blog];
  localStorage.setItem("blogs", JSON.stringify(blogs));

  blogSubmitted.innerHTML = "blog submitted successfully";
  getBlog();
}


// ***********************************new blog*************************
const blodImage = document.querySelector(".blog-image");

let imageUrl;
blodImage.addEventListener("change", function () {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    imageUrl = fileReader.result;

  });
  fileReader.readAsDataURL(this.files[0]);
});

const adminTable = document.getElementById("tableData");


const row = async () => {
  try {
    const response = await fetch(apiUrl);
    const blogs = await response.json();
    const blogElement = blogs.map(
      (item, index) => `
        <tr class="edit-blog">
          <td>${item.title}</td>
          <td>${item.content}</td>
          <td><button class="delete-button-${index}" onclick="deleteBlog(${index})">delete</button></td>
          <td><button class="table-button-${index}" onclick="editBlog(event, id)">edit</button></td>
        </tr>`
    ).join("");
    adminTable.innerHTML = blogElement;
    // deleteBlog();
    return adminTable;
  } catch (error) {
    console.error(error);
  }
};


// const row = () => {
//   const blogElement = blogs
//     .map(
//       (item, index) => `
//     <tr class="edit-blog">
//   <td>${item.name}</td>

//   <td>${item.description}</td>
//   <td><button  class="delete-button-${item.index}" onclick="deleteBlog(${index})">delete</button></td>
//   <td><button class="table-button-${item.index}" >edit</button></td>
// </tr>`
//     )
//     .join("");
//   adminTable.innerHTML = blogElement;
//   deleteBlog();
//   return adminTable;
// };



// const editBlog = ({ event, id }) => {
//   if (event.target.value === '') return;
//   if (event.key === 'Enter') {
//     const updatedBlog = {
//       name: event.target.value,
//       description: '',
//     };
//     fetch(`http://localhost:5000/api/blogs/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedBlog),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(`Blog with id ${data.id} has been updated`);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// };


// const editBlog = ({ event }) => {
//   if (event.target.value === '') return;
//   if (event.key === 'Enter') {
//    a= event.target.value;
//     localStorage.setItem('blogs', JSON.stringify(blogs))
//     console.log(amclicked);
//   }
// };

// const deleteBlog = (index) => {
//   const allBlogs = JSON.parse(localStorage.getItem("blogs"));
//   const allComments = JSON.parse(localStorage.getItem("comments"));
//   if(allBlogs === null || allComments === null){ 
//     console.log("element not found");
//   }else{
//   const newBlogs = allBlogs.filter((blog, i) => i != index);
//   localStorage.setItem("blogs", JSON.stringify(newBlogs));
//   const newComments = allComments.filter((comment) => comment.blog !== index);
//   localStorage.setItem("comments", JSON.stringify(newComments));
//   getBlog();}
// };

const messagesTable = document.querySelector(".messages-table");
const Messagerow = () => {
  const messageElement = messages
    .map(
      (item, index) => `
    <tr>
  <td>${item.name}</td>
  <td>${item.info}</td>
  <td><button class="table-button" onclick="deleteMessage(${index})" >delete</button></td>
  <td><button class="table-button">edit</button></td>
</tr>`
    )
    .join("");

  messagesTable.innerHTML = messageElement;
  return Messagerow;
};

const deleteMessage = (index) => {
  const allMessagess = JSON.parse(localStorage.getItem("messages"));
  const newMessages = allMessagess.filter((message, i) => i != index);
  localStorage.setItem("messages", JSON.stringify(newMessages));
  Messagerow();
};
window.addEventListener("load", () => {
  getBlog();
  row();
  Messagerow();



  workContainer.innerHTML = getWorkData;
});



const countBlogComments = () => {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  blogs.forEach(blog => {
    const blogId = blog.index;
    const commentsForBlog = comments.filter(comment => comment.blog === blogId);

    const element = document.getElementById(`current-comments-${blog.index}`);
    if (element) {
      element.textContent = `${commentsForBlog.length} comments`;
    }
  });
};




