// Var
const nav = document.querySelector("nav");
const navCheck = document.querySelector(".navCheck");
const polaroid = document.querySelectorAll(".imgList div");
const bio = document.querySelector(".members p");

function ElementVue(e) {
    const rect = e.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight / 2)
    );
}


window.addEventListener("scroll", function (e) {

    if (ElementVue(navCheck) == true) {
        nav.style.backgroundImage = "url(../medias/double-bubble-dark.png)";
        nav.style.backgroundColor = "orangered";
        nav.style.borderBottom = "groove rgb(0, 121, 202) 5px";
    } else {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
        nav.style.backgroundImage = "none";
        nav.style.borderBottom = "none";
    }
});

polaroid.forEach(element => {

    element.addEventListener("mouseenter", function(){
        bio.textContent = this.getAttribute("data-texte");
    });

    element.addEventListener("mouseleave", function(){
        bio.textContent = "";
    });
    
});