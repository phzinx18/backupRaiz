const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function darkMode() {
    document.body.classList.toggle("dark-theme");

    const logo = document.getElementById("logo");
    
    
        if (document.body.classList.contains("dark-theme")) {
            //   Troca a logo para a versão escura
            logo.src = "src/Logo modo escuro.png";
            // logof.src = "src/Logo modo escuro.png"
        } else {
            // Troca a logo para a versão clara
            logo.src = "src/Logo modo claro.png";
            // logof.src = "src/Logo modo claro.png";
        }
}
