//ASA NU!!!!!!

//function ramaiAlb(element) {
//    setTimeout(function() {
//        let firstChild = element.firstElementChild;
//        if (firstChild) {
//            firstChild.style.setProperty("color", "white", "important");
//        }
//    }, 200);
//}

function authGuard() {
  if (!localStorage.getItem("session"))
    window.location.href = "/Resurse/Login.html";
}
document.onload = authGuard();
session = JSON.parse(localStorage.getItem("session"));

let cards = document.querySelectorAll(".citat");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("reveal");
  });
});
// load citate from localstorage
(function () {
  citate = JSON.parse(localStorage.getItem("citate"));
  if (citate) {
    citate.forEach((citat) => {
      if (citat.username === session) AddCitat2(citat.text);
    });
  }
})();

// console.log(cards);

function UpdateCards() {
  cards = document.querySelectorAll(".citat");
}

function CardAddRevealTag(card) {
  card.addEventListener("mouseenter", () => {
    card.classList.add("reveal");
  });
  //console.log(cards);
}

function AddCitat2(citatText) {
  if (!citatText) return; // Oprește dacă nu este introdus niciun text
  //console.log(session);
  const citateDiv = document.querySelector(".citate");
  const newCitat = document.createElement("article");
  newCitat.className = "citat";

  const citatContent = document.createElement("h2");
  citatContent.textContent = `"${citatText}" - ${session}`;
  citatContent.className = "ascuns";
  newCitat.appendChild(citatContent);

  // Adaugă citatul înainte de butonul "+"
  const children = citateDiv.children; // Toți copiii direcți
  const beforeButton = children[children.length - 1]; // Ultimul copil este butonul
  citateDiv.insertBefore(newCitat, beforeButton); // Inserează înainte de ultimul element
  UpdateCards();
  CardAddRevealTag(newCitat);
}

function AddCitat() {
  let citatText = prompt("Introdu textul citatului:");
  if (!citatText) return; // Oprește dacă nu este introdus niciun text
  console.log(session);
  const citateDiv = document.querySelector(".citate");
  const newCitat = document.createElement("article");
  newCitat.className = "citat";

  const citatContent = document.createElement("h2");
  citatContent.textContent = `"${citatText}" - ${session}`;
  citatContent.className = "ascuns";
  newCitat.appendChild(citatContent);

  // Adaugă citatul înainte de butonul "+"
  const children = citateDiv.children; // Toți copiii direcți
  const beforeButton = children[children.length - 1]; // Ultimul copil este butonul
  citateDiv.insertBefore(newCitat, beforeButton); // Inserează înainte de ultimul element
  if (!localStorage.getItem("citate"))
    localStorage.setItem(
      "citate",
      JSON.stringify([{ text: citatText, username: session }])
    );
  else {
    localStorage.setItem(
      "citate",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("citate")),
        { text: citatText, username: session },
      ])
    );
  }
  UpdateCards();
  CardAddRevealTag(newCitat);
}

document.getElementById("addCitat").addEventListener("click", AddCitat);
