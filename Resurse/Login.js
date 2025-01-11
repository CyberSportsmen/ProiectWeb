const form = document.getElementById("login");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const [username, password] = event.target;
  const user = {
    username: username.value,
    password: password.value,
  };
  const users = localStorage.getItem("users");
  
  console.log(users);
}
