// Change background header
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Services Modal
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i);
  })
})

modalCloses.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal')
    })
  })
})

// Mixitup filter portfolio
// let mixerPortfolio = mixitup('.work_container', {
//   selectors: {
//       target: '.work_card'
//   },
//   animation: {
//       duration: 300
//   }
// });

// Link active work
// const linkWork = document.querySelectorAll('.work__item');

// function activeWork() {
//   if(linkWork) {
//     linkWork.forEach(l => l.classList.remove('active-work'));
//     this.classList.add('active-work');
//   }
// }

// linkWork.forEach(l => l.addEventListener('click', activeWork));

// Swiper Testimonial
// let swiperTestimonial = new Swiper('.testimonial__container', {
//   spaceBetween: 24,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 48,
//     },
//   },
// });

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                                          
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}    
	})
}
window.addEventListener('scroll', scrollActive)

// Light Dark Theme
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 100});
sr.reveal(`.home__social, .home__scroll`, {delay: 200, origin: 'bottom'});
sr.reveal(`.home__img`, {delay: 100, origin: 'left'});

// function mailInit() {
//   // https://dashboard.emailjs.com/admin/account
//   emailjs.init('KjjW3SLf_BT7pYS2I');
// }

// function sendMail() {
//   mailInit();
//   let fullName = document.getElementById('name').value;
//   let userEmail = document.getElementById('email').value;
//   let userMessage = document.getElementById('message').value;
  
//   var contactParams = {
//     from_name: fullName,
//     from_email: userEmail,
//     message: userMessage
//   };
//   emailjs.send('service_nyzx2d5', 'template_bl0fk16', contactParams)
// }3

// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = Math.random() * 100000 | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('contact__service', 'contact-form', this)
//           .then(function() {
//               console.log('SUCCESS!');
//           }, function(error) {
//               console.log('FAILED...', error);
//           });
//   });
// }