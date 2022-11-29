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


var scrollTrigger = 60;

// Header color change on scroll
window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.querySelector(".header").style.backgroundColor = "#292929";
    } else {
        document.querySelector(".header").style.backgroundColor = "unset";
    }
  };

