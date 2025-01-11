const butonulMeuFermecat = document.getElementById("horror");

butonulMeuFermecat.addEventListener("mouseenter", (eveniment) => {
  const copil = butonulMeuFermecat.children[0];

  // nu mai adauga settimeout daca exista deja unul
  if (!copil.classList.contains("invarte")) {
    copil.classList.add("invarte");

    setTimeout(() => {
      copil.classList.remove("invarte");
    }, 2000);
  }
});
