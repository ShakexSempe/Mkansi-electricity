const toggle = document.getElementById("toggle");
const header = document.getElementById("header");
const main = document.getElementById("main");
const topBtn = document.getElementById("top-btn");
const aside = document.getElementById("aside");
const links = document.querySelectorAll('#aside ul li a');
// console.log(links);

// document.addEventListener("scroll", () => {
//     const scroll_position = window.scrollY;
//     const scroll_height = window.pageYOffset;

//     if (scroll_position < 100) {
//         header.classList.remove("scroll");
//         topBtn.classList.remove("active");

//     } else {
//         header.classList.add("scroll");
//         topBtn.classList.add("active");
//     }
// })
// HERO INTERSECTION OBSERVER
const hero = document.getElementById("hero");
const heroOptions = {
    rootMargin: "-50% 0px 0% 0px"
}
console.log(hero);


const heroObserver = new IntersectionObserver(
    function(entries, heroObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("header NOT IO");
                topBtn.classList.add("active-top-btn");
                header.classList.add("active-header");
            } else {
                console.log("header IS IO");
                topBtn.classList.remove("active-top-btn");
                header.classList.remove("active-header");
            }
        })
    }, heroOptions
);
heroObserver.observe(hero);


toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    header.classList.remove("scroll");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
    });
});

main.addEventListener("click", () => {
    aside.classList.remove("active");
    toggle.classList.remove("active");
    main.classList.remove("active");
});