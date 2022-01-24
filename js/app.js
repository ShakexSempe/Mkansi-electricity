const toggle = document.getElementById("toggle");
const aside = document.getElementById("aside");
const links = document.getElementById("toggle");

toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
});