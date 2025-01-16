function authGuard() {
  if (!localStorage.getItem("session"))
    window.location.href = "Login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  logoutButton.style.background = "none";
  logoutButton.style.border = "none";
  logoutButton.style.color = "white";
  logoutButton.style.cursor = "pointer";
  logoutButton.style.textDecoration = "none";
  logoutButton.style.display = "none";
  logoutButton.style.fontFamily = "Segoe UI";
  logoutButton.style.fontSize = "large";

  const logoutListItem = document.createElement("li");
  logoutListItem.appendChild(logoutButton);

  const nav = document.querySelector("nav .menu");
  const loginLink = nav.querySelector("a[href='Login.html']");
  const loginListItem = loginLink.parentNode;
  nav.insertBefore(logoutListItem, loginListItem.nextSibling);

  if (localStorage.getItem("session")) {
    loginListItem.style.display = "none";
    logoutButton.style.display = "inline";
  }

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("session");
    localStorage.removeItem("sessionTime");
    logoutButton.style.display = "none";
    loginListItem.style.display = "list-item";
    alert("Logged out successfully!");
    authGuard();
  });
});
