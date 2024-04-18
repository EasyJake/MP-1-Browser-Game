import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const auth = getAuth();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential.user);
      // Redirect to another page or show a success message
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here, like showing an error message to the user
    });
});
