const postBlog = async (e) => {
  e.preventDefault()

  const title = document.getElementById("userTitle").value.trim()
  const description = document.getElementById("userDescription").value.trim()

  let data = {
    title: title,
    description: description

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


const open = (e) => {
  e.preventDefault()
  const dialog = document.querySelector("dialog")
  dialog.showModal()
}

const close = () => {

  const dialog = document.querySelector("dialog")
  dialog.close()
}
const editPost = async () => {


  const newtitle = document.getElementById("newTitle").value.trim()
  const newdescription = document.getElementById("newDescription").value.trim()
  const title = document.querySelector(".title-class")
  const id = title.getAttribute('data-id')

  let data = {
    title: newtitle,
    description: newdescription

  }


  const response = await fetch(`/api/newPost/${id}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {

    document.location.replace('/newPost');
  } else {
    alert(response.statusText);
  }
};






const delPost = async (e) => {
  e.preventDefault()
  const title = document.querySelector(".title-class")
  const id = title.getAttribute('data-id')


  const response = await fetch(`/api/newPost/${id}`, {

    method: 'DELETE',
  })

  if (response.ok) {
    window.alert("data del")
    document.location.replace('/newPost');
  } else {
    alert(response.statusText);
  }

}









document.getElementById("submitId").addEventListener("click", postBlog)

const deleteButtons = document.querySelectorAll(".delUserPost");
deleteButtons.forEach(button => {
  button.addEventListener("click", delPost);
});

function editAndClose() {
  editPost();
  close();
}

document.getElementById("newSubmitId").addEventListener("click", editAndClose);


const editButtons = document.querySelectorAll(".updatePost");
editButtons.forEach(button => {
  button.addEventListener("click", open);
});











