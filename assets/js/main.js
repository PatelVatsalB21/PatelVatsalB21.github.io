let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }


  $(".hero-bg").css({
    backgroundSize: (100 + scroll / 80) + "%",
    top: -(scroll / 10) + "%",
    opacity: 1 - (scroll / 800)
  });

  let fromTop = window.scrollY;

  mainNavLinks.forEach(function (link, i) {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop - 150 <= fromTop &&
      section.offsetTop + section.offsetHeight - 150 > fromTop
    ) {

      if (link.hash == mainNavLinks[4].hash) {
        if (section.offsetTop + section.offsetHeight < (section.offsetHeight)) {

        }
      }
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
var myVar;

function loader() {
  myVar = setTimeout(showPage, 4050);
  document.getElementById("body").style.overflow = "hidden";
  window.location.href = mainNavLinks[2];
  setTimeout(function () {
    window.location.href = mainNavLinks[0];
  }, 3000);
  setTimeout(function () {
    document.getElementById("preloader").classList.add("up");
  }, 3500);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("body").style.overflow = "visible";
}


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const dsr = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 800,
  reset: false
});

dsr.reveal('.nav__item', {
  delay: 500,
  interval: 400,
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

sr.reveal('.section-title', {});

/*SCROLL HOME*/
sr.reveal('.home__title-color', {});
sr.reveal('.home__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  delay: 400,
  interval: 400
});

/*SCROLL ABOUT*/

/*SCROLL SKILLS*/

/*SCROLL WORK*/
sr.reveal('.work__img', {
  delay: 400,
  interval: 400
});

sr.reveal('.overlay', {
  delay: 400,
  interval: 400
});

sr.reveal('.other__head', {
  delay: 100,
  interval: 200
});
/*SCROLL CONTACT*/

/*Resume*/
sr.reveal('.resume__header', {});
sr.reveal('.timeline-ico', {
  delay: 200,
  interval: 300
});

sr.reveal('.footer__title', {
  delay: 300,
  interval: 400
});

const lsr = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1000,
  reset: true
});

lsr.reveal('.button', {
  delay: 300
});
lsr.reveal('.home__social-icon', {
  delay: 500
});

lsr.reveal('.about__img', {});

lsr.reveal('.about__edusubtitle', {
  delay: 200
});
lsr.reveal('.about__edutext', {
  delay: 400
});

lsr.reveal('.skills__subtitle', {});
lsr.reveal('.skills__text', {});
lsr.reveal('.skills__data', {
  interval: 200
});
lsr.reveal('.skills__img', {
  delay: 600
});

lsr.reveal('.work__head', {
  delay: 500,
  interval: 300
})

lsr.reveal('.resume__type1', {
  delay: 200
})
lsr.reveal('.resume__type2', {
  delay: 400
})

const rsr = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1000,
  reset: true
});

rsr.reveal('.button__contact', {
  delay: 300
});

rsr.reveal('.about__subtitle', {
  delay: 200
});
rsr.reveal('.about__text', {
  delay: 400
});

rsr.reveal('.work__detail', {
  delay: 600,
  interval: 300
})

rsr.reveal('.resume__type1_desc', {
  delay: 200
})
rsr.reveal('.resume__type2_desc', {
  delay: 400
})

rsr.reveal('.skills__exp', {
  delay: 400
})

const bsr = ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 1000,
  reset: true,
});


bsr.reveal('.work__item', {
  delay: 200,
  interval: 200
})

bsr.reveal('.tech__stack', {
  delay: 500,
  interval: 200
})

bsr.reveal('.other__item', {
  delay: 300,
  interval: 500
});

bsr.reveal('.footer', {
  delay: 200,
  interval: 500
})

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', setTimeout(init,4000));

// Init App
function init() {
  const txtElement = document.querySelector('.home_title_name');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function toggle() {
  var blur = document.getElementById('work');
  blur.classList.toggle('active');
  var overlay = document.getElementById('work_popup_overlay');
  overlay.classList.toggle('active');
  var work_popup = document.getElementById('work_popup');
  work_popup.classList.toggle('active');

  var body = document.getElementById("body");

  if(body.style.overflow === "hidden"){
    body.style.overflow = "auto";
    document.getElementById('return-to-top').style.display = "block";
  }else{
    body.style.overflow = "hidden";
    document.getElementById('return-to-top').style.display = "none";
  }
}


