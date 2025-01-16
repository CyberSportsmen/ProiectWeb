const form = document.getElementById("login");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const [username, password] = event.target;

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

  const users = JSON.parse(localStorage.getItem("users"));
  const foundUser = users.find((user) => user.username === username.value);

  if (!foundUser || password.value !== foundUser.password) {
    return alert("User sau parola gresite!");
  }

  // Log in the user
  localStorage.setItem("session", JSON.stringify(username.value));
  localStorage.setItem("sessionTime", JSON.stringify(Date.now())); // Store the login time
  window.location.href = "index.html";
}
