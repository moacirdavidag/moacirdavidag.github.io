let menu_btn = document.getElementById("menu_btn");
let navbar = document.querySelector("header nav");
let ul_li = [];
let list_link = document.querySelectorAll("header nav ul li");
let count = 0;
let fecharIcone = document.querySelector("#fecharIcone");
for(const link of list_link) {
    ul_li.push(link);
}


menu_btn.addEventListener("click", () => {
    
    navbar.classList.add("navbar_responsive");
    for(const li of ul_li) {
        li.style.display = "block";
    }
    
});

fecharIcone.addEventListener("click", () => {
    navbar.classList.remove("navbar_responsive");
    for(const li of ul_li) {
        li.style.display = "none";
    }
});