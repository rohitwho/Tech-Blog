const postBlog = async (e) => {
    e.preventDefault()

const title = document.getElementById("userTitle").value.trim()
const description = document.getElementById("userDescription").value.trim()

let data ={
    title:title,
    description:description

}


    const response = await fetch('/api/newPost', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        // window.alert("data seeded")
        document.location.replace('/newPost');
    } else {
      alert(response.statusText);
    }
  };




const editPost = async(e)=>{
  e.preventDefault()

}

const delPost = async(e)=>{
  e.preventDefault()
const title = document.querySelector(".title-class")
const id = title.getAttribute('data-id')


const response = await fetch(`/api/newPost/${id}`,{

  method: 'DELETE',
})

    if (response.ok) {
        window.alert("data del")
      document.location.replace('/newPost');
    } else {
      alert(response.statusText);
    }

}









  document.getElementById("submitId").addEventListener("click",postBlog)
document.getElementById("delUserPost").addEventListener("click",delPost)











//   console.log("hello world")