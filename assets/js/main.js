/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('.section-title',{}); 

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/

/*SCROLL SKILLS*/

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200});

/*SCROLL CONTACT*/  

/*Resume*/
sr.reveal('.resume__header',{}); 
sr.reveal('.timeline-ico',{delay: 200, interval: 300}); 

sr.reveal('.footer__title',{delay: 200, interval: 300}); 

const lsr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
});

lsr.reveal('.button',{delay: 300}); 
lsr.reveal('.home__social-icon',{ delay: 500}); 

lsr.reveal('.about__img',{});  

lsr.reveal('.about__edusubtitle',{delay: 200}); 
lsr.reveal('.about__edutext',{delay: 400}); 

lsr.reveal('.skills__subtitle',{}); 
lsr.reveal('.skills__text',{}); 
lsr.reveal('.skills__data',{interval: 200}); 
lsr.reveal('.skills__img',{delay: 600});

lsr.reveal('.resume__type1',{delay: 200})
lsr.reveal('.resume__type2',{delay: 400})

const rsr = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1000,
    reset: true
});


rsr.reveal('.nav__item',{delay: 200, interval: 400}); 

rsr.reveal('.about__subtitle',{delay: 200}); 
rsr.reveal('.about__text',{delay: 400}); 

rsr.reveal('.resume__type1_desc',{delay: 200})
rsr.reveal('.resume__type2_desc',{delay: 400})

rsr.reveal('.skills__cv',{delay: 200})
rsr.reveal('.skills__exp',{delay: 400})

const bsr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    reset: true
});

bsr.reveal('.footer',{delay: 200,interval: 400})

bsr.reveal('.footer__icon',{delay: 900, intervak: 300})



