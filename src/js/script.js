const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', function(){
    if(hamburger.classList.contains('is-active')){
        hamburger.classList.remove('is-active');
        nav.classList.add('d-none');
    } else {
        hamburger.classList.add('is-active');
        nav.classList.remove('d-none');
    }   
});