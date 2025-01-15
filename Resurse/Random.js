const butonulMeuFermecat = document.getElementById("horror");

butonulMeuFermecat.addEventListener("mouseenter", (eveniment) => {
  const copil = butonulMeuFermecat.children[0];

  if (!copil.classList.contains("invarte")) {
    copil.classList.add("invarte");

    setTimeout(() => {
      copil.classList.remove("invarte");
    }, 2000);
  }
});

const linkRickroll = document.querySelector(".rickroll");

function genereazaCuloareRandom() {
  const litere = "0123456789ABCDEF";
  let culoare = "#";
  for (let i = 0; i < 6; i++) {
    culoare += litere[Math.floor(Math.random() * 16)];
  }
  return culoare;
}

function schimbaCuloare() {
  const culoareNoua = genereazaCuloareRandom();
  linkRickroll.style.color = culoareNoua;
}

setInterval(schimbaCuloare, 1500);
