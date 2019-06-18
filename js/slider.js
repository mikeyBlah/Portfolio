window.addEventListener("load", function(){

    const elmContainer = document.querySelector('#slideElmContainer');
    const leftControl = document.querySelector('#slideLeftCont');
    const rightControl = document.querySelector('#slideRightCont');
    let newElm;
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
        
        let newTitle = document.createElement('p');
        newTitle.innerHTML = slideArray[i].title;
        newTitle.classList.add('largeP');
        newTitle.classList.add('darkP');
        
        assignOrder(i);

        newElm.appendChild(newTitle);
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

    function reArrange(num){
        console.log(num);
    }

    leftControl.addEventListener('click', function(){
        reArrange(1);
    });
    rightControl.addEventListener('click', function(){
        reArrange(-1);
    });



});