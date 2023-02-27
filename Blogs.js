// const blogCards = document.querySelector(".blog-cards");
const Blog = () => {
  const [Blogs,setBlogs] = React.useState([])
  React.useEffect(() => {
    fetch('https://my-brand-api-mi4x.onrender.com/api/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
          // let datas = data.Blogs
          setBlogs(data)
        console.log(data)
    //     datas.forEach(blog => {
    // })
    })
 },[])




  return (


    Blogs.map((item) => {
            const id = item._id;
            // console.log(id);
            return (
              <div className="blog-card">
                <div className="blog-icons">
                  <img src="./assets/boxArrow.png" alt="box-arrow" />
                  <a href="https://github.com/divinecharlotte/metrics-webapp">
                    <img src="./assets/github.png" alt="github-icon" />
                  </a>
                </div>
                <h2>{item.title}</h2>
                <p>{item.content.substring(0,50)}</p>
                <button type="button" onClick={ async function blogDetailsFunc() {
   blogCards.style.display = "grid";
   blogCards.style.gridTemplateColumns = "1fr"
     const response = await fetch(`https://my-brand-api-mi4x.onrender.com/api/blogs/${id}`);
     const blog = await response.json();
    
     const result = `
       <div class="blog-card">
         <p onclick="getBlog()"><img src="./assets/Group90.png" alt=""  id="clseBLOG"></p>
         <img src="${blog.image}"/>
         <h2>${blog.title}</h2>
         <p >${blog.content}</p>
         <ul><li>
         <button type="button" onclick="increment('${id}')"><img src="/assets/like.png" id="like" class="like-count-${blog.index}" alt="likes"><p id="like-btn-${id}"></p></li></button>
           <li id="current-comments-${id}">comments</li> 
         </ul>
         <div class="comments" id="comments-${id}"></div>
         <div class="comments-wrapper">
           <form class="comment" onsubmit="return false;" id="${blog.index}">
             <h3 class="form-title">Add your comment</h3>
             <div class="${blog.index}"></div>
             <input type="text" name="name" id="name-${id}" class="${blog.index}" placeholder="Your names :" />
             <br> 
             <small class="nameError" id="nameError-${id}"></small> <br>
             <textarea class="${blog.index}" id="comment-${id}" cols="2" rows="4" placeholder="Comment :" ></textarea>
             <br />
             <small class="messageError" id="messageError-${id}"></small> <br>
             <button type="button" onclick="return blogForm('${id}')">Submit</button>
           </form>
         </div>
       </div>
     `;
     blogCards.innerHTML = result;
   
     blogComments(id);
     blogLikes(id);
   }}>full view</button>
             </div>
            )
  }

  ))
}

ReactDOM.render(<Blog/>, document.querySelector(".blog-cards"))