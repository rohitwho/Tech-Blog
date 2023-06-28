const postComment = async (e) => {
  e.preventDefault()

  const comment = document.getElementById("comment").value.trim()
  const element = document.querySelector('.user');
  const postId = element.getAttribute('data-id');


  let data = {
    comment_text: comment,
    post_id: postId



  }


  const response = await fetch('/api/posts/comment', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {

    location.reload()

  } else {
    alert(response.statusText);
  }
};

document.querySelector(".submit-Comment").addEventListener("click", postComment)


//Added functionality to del a comment

const delcmnt = async (e) => {
  e.preventDefault();

  const element = document.querySelector('.userProfile');
  const id = element.getAttribute('data-id');


  try {
    const response = await fetch(`/api/posts/comment/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      console.error('Failed to delete comment');
    }
  } catch (error) {
    console.error('An error occurred while deleting the comment', error);
  }
};




const comment = document.querySelectorAll(".comment-del");

comment.forEach(button => {
  button.addEventListener("click", delcmnt)
})











