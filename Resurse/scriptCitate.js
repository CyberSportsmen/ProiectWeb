//ASA NU!!!!!!

//function ramaiAlb(element) {
//    setTimeout(function() {
//        let firstChild = element.firstElementChild;
//        if (firstChild) {
//            firstChild.style.setProperty("color", "white", "important");
//        }
//    }, 200);
//}


let cards = document.querySelectorAll(".citat");
cards.forEach((card) => {card.addEventListener("mouseenter", () => {card.classList.add("reveal")})})
console.log(cards);

function UpdateCards(){
    cards = document.querySelectorAll(".citat");
}

function CardAddRevealTag(card){
    card.addEventListener("mouseenter", () => {card.classList.add("reveal")});
    console.log(cards);
}

function AddCitat() {
    const citatText = prompt("Introdu textul citatului:");
    if (!citatText) return; // Oprește dacă nu este introdus niciun text

    const citateDiv = document.querySelector(".citate");
    const newCitat = document.createElement("article");
    newCitat.className = "citat";

    const citatContent = document.createElement("h2");
    citatContent.textContent = `"${citatText}"`;
    citatContent.className = "ascuns";
    newCitat.appendChild(citatContent);

    // Adaugă citatul înainte de butonul "+"
    const children = citateDiv.children; // Toți copiii direcți
    const beforeButton = children[children.length - 1]; // Ultimul copil este butonul
    citateDiv.insertBefore(newCitat, beforeButton); // Inserează înainte de ultimul element

    UpdateCards();
    CardAddRevealTag(newCitat);
}

document.getElementById("addCitat").addEventListener("click", AddCitat);


