document.addEventListener("mousemove", (event) => {
  const cursor = document.getElementById("cursorEffect");
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  const trail = document.createElement("div");
  trail.id = "cursorTrail";
  trail.style.left = `${event.clientX}px`;
  trail.style.top = `${event.clientY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove(); // manipulam DOM stergand elementele
  }, 500); // Durata trebuie sa fie cat animatia "fadeOut"
});

document.addEventListener("mousemove", (event) => {
  const cursor = document.getElementById("cursorEffect");
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
