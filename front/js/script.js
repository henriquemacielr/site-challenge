const menuBurguer = document.querySelector("#buger")
const x = document.querySelector("#x")

const menuView = document.querySelector(".container--modal")




const changeVisibleMenu = () => {
    if (menuView.style.display === "none" || menuView.style.display === "") {
        menuView.style.display = "block";  // Torna o menu visível
        menuBurguer.style.display = "none";
    } else {
        menuView.style.display = "none";   // Esconde o menu
        menuBurguer.style.display = "block";
    }
}



menuBurguer.addEventListener('click', changeVisibleMenu)

x.addEventListener('click', changeVisibleMenu)





let count = 1;  //Seta o Contador para a 1 Imagem
document.getElementById("radio1").checked = true;


// Time
setInterval(function () {
    nextImg();
}, 3000)


function nextImg() {
    count++;
    if (count >= 4) {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
        count = 0;
        document.getElementById("radio" + count).checked = true;


    }
    document.getElementById("radio" + count).checked = true;
}