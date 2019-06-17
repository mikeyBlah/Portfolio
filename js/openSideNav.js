window.addEventListener("load", function() {

const menuTab = document.querySelector('#menuTab');
const sideMenu = document.querySelector('#sideMenu');
const overlay = document.querySelector('#fixedOverlay');
let visible = false;

    menuTab.addEventListener("click", function(){
        if(visible === false){
        sideMenu.classList.add('showMenu');
        sideMenu.classList.remove('hideMenu');
        overlay.classList.add('showOverlay');
        overlay.classList.remove('hideOverlay');
        visible = true;
        } else{
        sideMenu.classList.add('hideMenu');
        sideMenu.classList.remove('showMenu');
        overlay.classList.add('hideOverlay');
        overlay.classList.remove('showOverlay');
        visible = false;
        }
    });


});