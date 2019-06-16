window.addEventListener("load", function() {

    let scrollTop;
    let scrollHeight = window.outerHeight;
    let getScroll = setInterval(function(){
    scrollTop = window.pageYOffset;
    checkScroll();
}, 500);
 

function animateValue(skill, start, end, duration, bar, classer) {
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / end));
    let htmlCounter = document.querySelector('#htmlCounter');
    let htmlBar = document.querySelector('#htmlBar');
    let cssCounter = document.querySelector('#cssCounter');
    let cssBar = document.querySelector('#cssBar');
    let jsCounter = document.querySelector('#jsCounter');
    let jsBar = document.querySelector('#jsBar');
    let timer = setInterval(function() {
        current += increment;
        bar.classList.add(classer);
        bar.classList.remove("hide");
        skill.innerHTML = current + ".0";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

    function checkScroll(){

        if(scrollTop >= scrollHeight/4 * 2){   
        animateValue(htmlCounter, 0, 8, 1000, htmlBar, "pieEight");
        animateValue(cssCounter, 0, 8, 1000, cssBar, "pieEight");
        animateValue(jsCounter, 0, 5, 1000, jsBar, "pieFive");
        clearInterval(getScroll);
        console.log(scrollHeight /4 * 2)

        }
    }

});