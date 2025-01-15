async function fetchCats() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=6"
  );
  const cats = await response.json();
  const gallery = document.getElementById("cat-gallery");

  cats.forEach((cat) => {
    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "O poză cu o pisică";
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    gallery.appendChild(img);
  });
}

document.getElementById("load-cats").addEventListener("click", fetchCats);

// incarca primele imagini la incarcarea paginii
fetchCats();
// cream lightbox-ul pentru afisare pe tot ecranul
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.style.display = "none";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

// la click pe imagine afisam lightbox-ul
document.getElementById("cat-gallery").addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    lightboxImg.src = event.target.src;
    lightbox.style.display = "flex";
  }
});

// la click pe fundalul lightbox-ului, il inchidem
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
