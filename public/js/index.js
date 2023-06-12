

const existingPost = document.querySelector(".Post-area")




async function getPost(){
    const response = await fetch("/api/posts", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Error in GET request: ' + response.status);
      }

      const data = await response.json();
      console.log("This is the fetched data:", data);
    }
    getPost()

// const ul = document.querySelector(".posts")
// data.forEach(element => {
//     const li = document.createElement("li")
//     const p = document.createElement("p")
//     const username = document.createElement("p")
//     const div = document.createElement("div")
//     div.className="Comment"
//     const input = document.createElement("input")
//     input.type = "text"
//     input.className = "comment-section"
//     username.className = "User-Info"


//     let createdAt = element.createdAt
//     const date = new Date(createdAt);
// const formattedDate = date.toDateString();

 

//     username.innerHTML = `Posted on:${formattedDate} By:${element.user.username}`
//     p.className= "post-Description"
//     p .innerHTML = `${element.description}`
//     li.className = "Post-Title";
//     li.innerHTML = `${element.title}`;



//     ul.appendChild(li)
//     ul.appendChild(div)
//     li.appendChild(p)
//     p.appendChild(username)
//     div.appendChild(input)
    
// });