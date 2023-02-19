// const blogCards = document.querySelector(".blog-cards");
const urlParams= new URLSearchParams(window.location.search);
var id= urlParams.get('id');
async function blogDetailsFunc(){

  const response= await fetch(`http://localhost:5000/api/blogs/${id}`)
  const fetchedResponse= await response.json()
 
// const result =`<div class="blog-card">
//       <p id="closeIcon2" onclick="getBlog()"><img src="./assets/Group90.png" alt=""></p>
//       <img src="${blog.image}"/>
//       <h1>my name divine</h1>
//       <h2>${blog.title}</h2>
//       <p >${blog.content}</p>
//       <ul>
//         <li><button id="like-btn" type="button" onclick="increment()"><img src="/assets/like.png" id="like" class="like-count-${blog.index}" alt="likes"></button><p id="counter"> 0 Likes</p></li>
//         <li id="current-comments-${blog.index}"> comments</li>
//       </ul>
//       <div class="comments" id="comments-${blog.index}"></div>
//       <div class="comments-wrapper">
//         <form class="comment" onsubmit="return false;" id="${blog.index}">
//           <h3 class="form-title">Add your comment</h3>
//           <div class="${blog.index}"></div>
//           <input type="text" name="name" id="name-${blog.index}" class="${blog.index}" placeholder="Your names :" />
//           <br> 
//           <small class="nameError" id="nameError-${blog.index}"></small> <br>
//           <textarea class="${blog.index}" id="comment-${blog.index}" cols="2" rows="4" placeholder="Comment :" ></textarea>
//           <br />
//           <small class="messageError" id="messageError-${blog.index}"></small> <br>
//           <!-- <button type="button" onclick="return blogForm(${blog.index})">Submit</button> -->
//         </form>
//       </div>
//     </div>`.join("");
//     blogCards.innerHTML = result;
        // blogCards.innerHTML = result;
       
        // comments.forEach((item) => {
        //   const blogIndex = item.blog;
        //   const commentsDiv = document.getElementById(`comments-${blogIndex}`);
        //   if(commentsDiv){
        //     const p = document.createElement("p");
        //     p.textContent = `${item.message} by ${item.name}`;
        //     commentsDiv.appendChild(p);
        //   }
        // });
      }
    
    
    // let likes= 0
    // function increment(){
    //     if (likes !==0 ) {
    //     }
    //     likes++
    // document.getElementById("counter").innerHTML = `${likes}likes`
    // }
    
    
    {/* <script src="script.js">window.onload = blogDetailsFunc();</script>

    <!-- <script src="script.js"></script> -->
</body>
</html> */}