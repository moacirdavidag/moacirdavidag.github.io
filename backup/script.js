let menu_btn = document.getElementById("menu_btn");
let navbar = document.querySelector("header nav");
let ul_li = document.getElementsByClassName("list");
let count = 0;

menu_btn.addEventListener("click", () => {
    if(count == 0) {
        navbar.classList.add("navbar_responsive");
        ul_li.classList.add("list_responsive");
        count++;
    } else {
        navbar.classList.remove("navbar_responsive");
        count = 0;
    }
});