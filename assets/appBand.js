// Var
const polaroid = document.querySelectorAll(".imgList div");
const bio = document.querySelector(".members p");

polaroid.forEach(element => {

    element.addEventListener("mouseenter", function(){
        bio.textContent = this.getAttribute("data-texte");
    });

    element.addEventListener("mouseleave", function(){
        bio.textContent = "";
    });
    
});