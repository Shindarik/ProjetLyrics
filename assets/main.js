// Var
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const navCheck = document.querySelector(".navCheck");


function ElementVue(e) {
    const rect = e.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight / 2)
    );
}


window.addEventListener("scroll", function (e) {

    if (ElementVue(navCheck) == true) {
        nav.style.backgroundColor = "rgba(17, 17, 17, 1)";
    } else {
        nav.style.backgroundColor = "rgba(17, 17, 17, 0)";
    }
});