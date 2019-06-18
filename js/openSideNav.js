window.addEventListener("load", function() {

const menuTab = document.querySelector('#menuTab');
const sideMenu = document.querySelector('#sideMenu');
const overlay = document.querySelector('#fixedOverlay');
const spanLine = document.querySelectorAll('.menuLine');
let visible = false;

    menuTab.addEventListener("click", function(){
        if(visible === false){
        sideMenu.classList.add('showMenu');
        sideMenu.classList.remove('hideMenu');
        overlay.classList.add('showOverlay');
        overlay.classList.remove('hideOverlay');
        for (i = 0; i < spanLine.length; i++){
            spanLine[i].classList.add('closeLine');
            spanLine[i].classList.remove('hamLine');
        }
        visible = true;
        } else{
        sideMenu.classList.add('hideMenu');
        sideMenu.classList.remove('showMenu');
        overlay.classList.add('hideOverlay');
        overlay.classList.remove('showOverlay');
        for (i = 0; i < spanLine.length; i++){
            spanLine[i].classList.add('hamLine');
            spanLine[i].classList.remove('closeLine');
        }
        visible = false;
        }
    });


});