const form = document.getElementById("register");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const [username, password, passwordConfirmation] = event.target;
  // console.log(username.value, password.value, passwordConfirmation.value);
  if (password.value !== passwordConfirmation.value) return alert("ai gresit");
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const notok = users.find((user) => user.username === username.value);
    if (notok) return alert("Username already taken!");
  }
  const user = {
    username: username.value,
    password: password.value,
  };

  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([user]));
  else
    localStorage.setItem(
      "users",
      JSON.stringify([...JSON.parse(localStorage.getItem("users")), user])
    );
  window.location.href = "/Resurse/Login.html";
  console.log(localStorage.getItem("users"));
}
