const auth = firebase.auth();
function siweap() {
  const email = document.getElementById("email");
const password = document.getElementById("password");
const txtemail = email.value
const txtpass = password.value
const promise = auth.signInWithEmailAndPassword(email, txtpass);
promise.catch(e => console.log(e.message));
  console.log("email is:");
  console.log(email, txtemail);
    console.log("password is:");
  console.log(password, txtpass);
}
