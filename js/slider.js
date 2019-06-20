window.addEventListener("load", function(){

    const elmContainer = document.querySelector('#slideElmContainer');
    const leftControl = document.querySelector('#slideLeftCont');
    const rightControl = document.querySelector('#slideRightCont');
    let newElm;
    let newTitle;
    let newArray;
    let slideArray = [
        {
            title: "Project One",
            src: "../img/screenshot.jpg",
            desc: "This is about the project, something about what tools I used",
        },
        {
            title: "Project Two",
            src: "../img/screenshot.jpg",
            desc: "This is about the project, something about what tools I used"
        },
        {
            title: "Misc",
            src: "../img/screenshot.jpg",
            desc: "This is about the project, something about what tools I used"
        },
    ]; 


    for(i = 0; i < slideArray.length; i++){

        newElm = document.createElement('div');
        newElm.classList.add('slideProCont');
        elmContainer.appendChild(newElm);
        newTitle = document.createElement('p');
        newTitle.innerHTML = slideArray[i].title;
        newTitle.classList.add('largeP');
        newTitle.classList.add('darkP');
        newElm.appendChild(newTitle);

        assignOrder(i);
    }


    function changeClass(){
    for(i = 0; i < slideArray.length; i++){
        console.log(i);
        newElm.classList.remove('slideZero');
        newElm.classList.remove('slideOne');
        newElm.classList.remove('slideTwo');
        assignOrder(i);
        }
    }

    function assignOrder(iArray){
        if (iArray === 0){
            newElm.classList.add('slideZero');
        }
        if (iArray === 1){
            newElm.classList.add('slideOne');
        }
        if (iArray === 2){
            newElm.classList.add('slideTwo');
        }
    }

    Array.prototype.move = function reArrange(from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
        console.log(slideArray);
        //slideArray[0, 1, 2].classList.remove('slideZero');
        //slideArray[0, 1, 2].classList.remove('slideOne');
        //slideArray[0, 1, 2].classList.remove('slideTwo');
        changeClass();
      };
    leftControl.addEventListener('click', function(){
        slideArray.move(0, 2);
    });
    rightControl.addEventListener('click', function(){
        slideArray.move(2, 0);
    });


});