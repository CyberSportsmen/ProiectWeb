const form = document.getElementById("register");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const [username, password, passwordConfirmation] = event.target;

  // Regex for username: alphanumeric, 3-16 characters
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;

  // Regex for password: at least one lowercase, one uppercase, one digit, and minimum 8 characters
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Validate username and password
  if (!usernameRegex.test(username.value)) {
    return alert(
      "Username trebuie să fie între 3 și 16 caractere, alfanumerice."
    );
  }

  if (!passwordRegex.test(password.value)) {
    return alert(
      "Parola trebuie să aibă cel puțin o literă mare, o literă mică și un număr, și să fie de cel puțin 8 caractere."
    );
  }

  if (password.value !== passwordConfirmation.value) {
    return alert("Parolele nu coincid!");
  }

  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const notok = users.find((user) => user.username === username.value);
    if (notok) return alert("Username deja utilizat!");
  }

  const newUser = {
    username: username.value,
    password: password.value,
  };

  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([newUser]));
  else
    localStorage.setItem(
      "users",
      JSON.stringify([...JSON.parse(localStorage.getItem("users")), newUser])
    );

  window.location.href = "/Resurse/Login.html";
  console.log(localStorage.getItem("users"));
}
