"use strict";

const btn = document.querySelector(".btn");
const lista = document.querySelector("ul");
//
btn.addEventListener("click", function () {
  let pitanje = parseInt(prompt("Unesite određeni broj godina"));
  function da() {
    const now = new Date().getFullYear();
    const y = now - pitanje;
    if (pitanje < 0) {
      alert(
        "Moguće je samo izračunati godine unutar nove ere!Pokušajte ponovo."
      );
    } else if (pitanje < now && pitanje !== 0) {
      const l = document.createElement("li");
      lista.appendChild(l);
      l.textContent = `Prije ${pitanje} godina je bila ${y} godina`;
      l.addEventListener("click", function () {
        l.style.color = "red";
        l.style.textDecoration = "line-through";
      });
      l.addEventListener("dblclick", function () {
        l.style.display = "none";
      });
      return y;
    } else if (pitanje >= now) {
      alert(
        "Nije dozvoljeno unjeti broj godina,ukoliko su one veće od trenutne!Pokušajte ponovo."
      );
    } else if (!pitanje || pitanje === 0 || typeof pitanje !== "Number") {
      alert("Unos neuspješan.Molimo pokušajte ponovo!");
    }
  }
  da();
});
