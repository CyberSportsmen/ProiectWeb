const form = document.getElementById("login");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const [username, password] = event.target;

  const users = JSON.parse(localStorage.getItem("users"));
  const foundUser = users.find((user) => user.username === username.value);

  if (!foundUser || password.value !== foundUser.password) {
    return alert("User sau parola gresite!");
  }
  // ne logam
  localStorage.setItem("session", JSON.stringify(username.value));
  window.location.href = "/Resurse/index.html";
}
