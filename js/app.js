const toggle = document.getElementById("toggle");
const main = document.getElementById("main");
const aside = document.getElementById("aside");
const links = document.querySelectorAll('#aside ul li a');
console.log(links);

toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
    });
});

main.addEventListener("click", () => {
    aside.classList.remove("active");
});