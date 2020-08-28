function rotate() {
    var img = document.querySelector(".navbar-toggler-img");
    if (img.classList.contains("rotated")) {
        img.style.transform = "";
        img.classList.remove("rotated");
    }
    else {
        img.style.transform = "rotate(90deg)";
        img.classList.add("rotated");
    }
}