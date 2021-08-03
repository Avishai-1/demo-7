document.getElementById("about").addEventListener("click", onActivate);

function onActivate(){
    document.getElementById("tea").classList.toggle("active");
}


document.getElementById("headerFrist-img").addEventListener("click", onClick);

function onClick(){
    document.getElementsByClassName("main-nav").classList.toggle("about");
}