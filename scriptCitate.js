//function ramaiAlb(element) {
//    setTimeout(function() {
//        let firstChild = element.firstElementChild;
//        if (firstChild) {
//            firstChild.style.setProperty("color", "white", "important");
//        }
//    }, 200);
//}

const card = document.querySelector(".citat");

card.addEventListener("click", () => {card.classList.add("reveal")})