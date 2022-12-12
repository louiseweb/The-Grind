// Mobile Menu
const body = document.querySelector('#body');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', function(){
    if(hamburger.classList.contains('is-active')){
        body.style.overflow = 'unset';
        nav.style.animation = 'slideout 500ms';  
        hamburger.classList.remove('is-active');
        setTimeout(function() {   
            nav.classList.add('d-none');
          }, 400);
          
        
    } else {
        body.style.overflow = 'hidden';
        nav.style.animation = 'slidein 500ms';
        hamburger.classList.add('is-active');
        nav.classList.remove('d-none');
    }   
});


// Header color change on scroll
var scrollTrigger = 60;

window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.querySelector(".header").style.backgroundColor = "#000000";
    } else {
        document.querySelector(".header").style.backgroundColor = "unset";
    }
  };

// Menu Section
const menu = [ 
    {   
        id: 1,
        name: 'Macchiato',
        desc: 'Our signature espresso with a touch of milk foam.',
        category: 'milk',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        img: '../../dist/img/illustration-macchiato.png',
    },

    {   
        id: 2,
        name: 'Latte',
        desc: 'Espresso topped with steamed milk and a thin layer of micro-foam.',
        category: 'milk',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        img: '../../dist/img/illustration-latte.png',
    },

    {   
        id: 3,
        name: 'Cappuccino',
        desc: 'Espresso with steamed milk, microfoam, and dusted with chocolate.',
        category: 'milk',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        img: '../../dist/img/illustration-cappuccino.png',
    },

    {   
        id: 4,
        name: 'Irish coffee',
        desc: 'Espresso with Irish whiskey, topped with cream.',
        category: 'milk',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        img: '../../dist/img/illustration-irish.png',
    },

    {   
        id: 5,
        name: 'Frappe',
        desc: 'Espresso blended smooth with milk, ice and our frappe mix.',
        category: 'iced',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        img: '../../dist/img/illustration-frappe.png',
    },

    {   
        id: 6,
        name: 'Espresso',
        desc: 'Nothing more than a single espresso shot of our Classico blend.',
        category: 'black',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        icon3:  '../../dist/img/icon-no-dairy.png',
        icon4:  '../../dist/img/icon-vegan.png',
        img: '../../dist/img/illustration-espresso.png',
    },

    {   
        id: 7,
        name: 'Doppio',
        desc: 'A double shot espresso, of our Classico blend.',
        category: 'black',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        icon3:  '../../dist/img/icon-no-dairy.png',
        icon4:  '../../dist/img/icon-vegan.png',
        img: '../../dist/img/illustration-doppio.png',
    },

    {   
        id: 8,
        name: 'Americano',
        desc: 'A long black coffee with 2 shots of espresso.',
        category: 'black',
        icon1: '../../dist/img/icon-no-gluten.png',
        icon2:  '../../dist/img/icon-no-nuts.png',
        icon3:  '../../dist/img/icon-no-dairy.png',
        icon4:  '../../dist/img/icon-vegan.png',
        img: '../../dist/img/illustration-americano.png',
    },


];

const menuGrid = document.querySelector('#menu-grid');
const filterBtn = document.querySelectorAll('#filter-btn');

// Load Menu
window.addEventListener('DOMContentLoaded', function() {
    loadMenu(menu);
});


// Filter Items
filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const btnCategory = e.currentTarget.dataset.id;
        console.log(btnCategory);
        const filteredItems = menu.filter(function(food){
            if(food.category === btnCategory) {
                return food;
            }
            console.log(food);    
        });
        
        if(btnCategory === 'all') {
            loadMenu(menu);
        } else {
            loadMenu(filteredItems);
        }
    });
});

function loadMenu(items) {
    let menuItems = items.map(function(item){
        return `<article class="menu__item">
        <div class="menu__col-1">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <div class="menu__icons">
                <img src="${item.icon1}">
                <img src="${item.icon2}">      
            </div>   
        </div>
        <div class="menu__col-2">
            <img class="menu__img" src="${item.img}" alt="${item.name} coffee image">    
        </div>  
    </article>`;
        
    });

    menuItems = menuItems.join('');
    menuGrid.innerHTML = menuItems;    
}

// Facilities carousel

  $(function(){
    $('.facilities__carousel').slick({
        prevArrow: $('.btn-left'),
        nextArrow: $('.btn-right'),
        mobileFirst: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }

        ]
      });
          
  });