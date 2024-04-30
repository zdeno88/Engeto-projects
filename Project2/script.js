const icon = document.querySelector(".fa-solid");
const nav = document.querySelector("nav");
const header = document.querySelector("#home");
console.log(header);
let cond = true;
icon.addEventListener("click", () => {
  if (cond) {
    nav.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    cond = false;
  } else {
    nav.style.display = "none";
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
    cond = true;
  }
});
