window.onload = function(){
let contactBtn = document.querySelector('#contactBtn');
let contactForm = document.querySelector('#contactFormWrap');
let backBtn = document.querySelector('#backBtn');

contactBtn.addEventListener("click", function(){
    contactForm.classList.remove("contactHide");
    contactForm.classList.add("contactShow");
});

backBtn.addEventListener("click", function(){
    contactForm.classList.remove("contactShow");
    contactForm.classList.add("contactHide");
});

}