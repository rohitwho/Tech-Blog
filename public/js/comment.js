const postComment = async (e) => {
    e.preventDefault()

const comment = document.getElementById("comment").value.trim()
const element = document.querySelector('.user');
const postId = element.getAttribute('data-id');
console.log(postId)

let data ={
    comment_text:comment,
 post_id:postId

   

}


    const response = await fetch('/api/posts/comment', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        window.alert("data seeded")
    //   document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector(".submit-Comment").addEventListener("click",postComment)

  console.log("hello world  ")