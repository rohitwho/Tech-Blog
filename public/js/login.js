const logIn = async(e)=>{
e.preventDefault()
const email = document.getElementById("email").value.trim()
const password = document.getElementById("pass").value.trim()

if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }





}


const signUp = async (e)=>{
e.preventDefault()

const username = document.getElementById("fname").value.trim()
const email = document.getElementById("new-mail").value.trim()
const password = document.getElementById("new-pass").value.trim()


if (username&&email&&password){
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
}


document.getElementById("newSign").addEventListener("click",signUp)


document.getElementById("newLog").addEventListener("click",logIn)




const activeSignUp = document.getElementById("signUpButton")

activeSignUp.addEventListener("click",viewSignUp)
 const SignUp = document.querySelector(".form-box")

function viewSignUp(e){
  e.preventDefault()
  const signUp = document.querySelector(".form-box")
  signUp.style.display="block "
  hideLog()
}
function hideLog(){
  
  const login = document.querySelector(".container-log")

  login.style.display="none"
}
