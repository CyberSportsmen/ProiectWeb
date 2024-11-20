//function ramaiAlb(element) {
//    setTimeout(function() {
//        let firstChild = element.firstElementChild;
//        if (firstChild) {
//            firstChild.style.setProperty("color", "white", "important");
//        }
//    }, 200);
//}

const cards = document.querySelectorAll(".citat");
cards.forEach((card) => {card.addEventListener("mouseenter", () => {card.classList.add("reveal")})})
console.log(cards);