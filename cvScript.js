//========== SWITCH THEMES =============//
let themeButton = document.getElementsByClassName("change-theme");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

for(let i = 0; i<themeButton.length;i++){
    themeButton[i].addEventListener("click", ()=>{
        document.body.classList.toggle(darkTheme);
        if(themeButton[i].classList.contains("fa-moon")){
            themeButton[i].classList.remove("fa-moon");
            themeButton[i].classList.add(iconTheme);
        }
        else if(themeButton[i].classList.contains(iconTheme)){
            themeButton[i].classList.add("fa-moon");
            themeButton[i].classList.remove(iconTheme);
        }
    })
}