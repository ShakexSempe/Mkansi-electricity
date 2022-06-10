const toggle = document.getElementById("toggle");
const header = document.getElementById("header");
const main = document.getElementById("main");
const topBtn = document.getElementById("top-btn");
const aside = document.getElementById("aside");
const links = document.querySelectorAll('#aside ul li a');
const logo = document.querySelector(".logo");
const heroTitle = document.querySelector(".hero-title");
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
    rootMargin: "-100% 0px 0% 0px"
}
console.log(hero);
const heroObserver = new IntersectionObserver(
    function(entries, heroObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("header NOT IO");
                header.classList.add("active-header");
                logo.classList.remove("active-logo");
                heroTitle.classList.add("active-hero-title");
            } else {
                console.log("header IS IO");
                topBtn.classList.remove("active-top-btn");
                header.classList.remove("active-header");
                logo.classList.add("active-logo");
                heroTitle.classList.remove("active-hero-title");
            }
        })
    }, heroOptions
);
heroObserver.observe(hero);

// MAIN SECTION OBSERVER
const mainOptions = {
    rootMargin: '0% 0px -85% 0px',
}
const mainObserver = new IntersectionObserver(
    function(
        entries, mainObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    console.log("main NOT io");
                    header.classList.remove("main-header");
                topBtn.classList.remove("active-top-btn");

                } else {
                    console.log("main IS IO");
                    header.classList.add("main-header");
                topBtn.classList.add("active-top-btn");
                }
            })
        }, mainOptions
);
mainObserver.observe(main);

// TOGGLE 
toggle.addEventListener("click",  () => {
    aside.classList.toggle("active");
    toggle.classList.toggle("active");
    main.classList.toggle("active");
    logo.classList.toggle("sidebar-logo")
    header.classList.toggle("active-aside");
    logo.classList.remove("active-logo");
});
// TOGGLE CLICK EVENT
links.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        logo.classList.remove("sidebar-logo");
        header.classList.remove("active-aside");
    });
});
// LOGO CLICK EVENT
logo.addEventListener("click", () => {
    if(aside.classList.contains("active")){
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        logo.classList.remove("sidebar-logo");
        header.classList.remove("active-aside");

    }
})
// MAIN CLICK EVENT LISTENER
main.addEventListener("click", () => {
    
    if(aside.classList.contains("active")){
        aside.classList.remove("active");
        toggle.classList.remove("active");
        main.classList.remove("active");
        logo.classList.remove("sidebar-logo");
        header.classList.remove("active-aside");
    }
});
// ITEM IO
const ioItem = document.querySelectorAll('.io-item');
console.log(ioItem);
ioItem.forEach(item => {
    itemOptions = {
        rootMargin: "0px 0px -30% 0px",
    }
    const itemObserver = new IntersectionObserver(
        function(entries, itemObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log("Item NOT IO");
                    item.classList.remove("active-io");
                } else {
                    console.log("Item IS IO");
                    item.classList.add("active-io");
                }
            })
        }, itemOptions
    );
    itemObserver.observe(item);
});