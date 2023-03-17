//  ============ Show Menu ==============
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    // ========= Menu show =========
    // validate if contanst exists
    if(navToggle) {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        });
    }
    // ========= Hide show =========
    // validate if contanst exists
    if(navClose) {
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        });
    }

// ========= remove menu mobile =========
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click each link , we remove the show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((e)=> e.addEventListener('click', linkAction));

//  ============ Background Header ==============
function scrollHeader(){
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

//  ============ Contact Form ==================

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        //Check if the field has values
        if(contactName.value ==='' || contactEmail.value === '' || Message.value === ''){
            //add and remove color 
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            //show message 
            contactMessage.textContent = 'Write all the input fields';
        }else{
            //serviceID - templateID - #form - publicKey
            emailjs.sendForm(
                'service_9j1hqmm',
                'template_s0b2bsh',
                '#contact-form',
                'L5nVuv_MQFR1CR1yq'
            )
            .then(( ) =>{
                //show messages and add color
                contactMessage.classList.add('color-dark');
                contactMessage.textContent = 'Message sent ✅';
                
                //remove message after 5 seconds
                setTimeout(( )=>{
                    contactMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OPPs!! Something went wrong...', error)
            });

            //clear input fields
            contactName.value= '';
            contactEmail.value= '';
            Message.value= '';

        }
    }

contactForm.addEventListener('submit' , sendEmail);

// ============ Style Switcher ==============
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
    styleSwitcher = document.querySelector('.style__switcher');
    
    styleSwitcherToggle.addEventListener('click', ()=> {
        styleSwitcher.classList.toggle('open')
    });

    //hode switcher on scroll 
    window.addEventListener('scroll', ()=> {
        if(styleSwitcher.classList.contains('open')) {
            styleSwitcher.classList.remove('open');
        }
    });

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}

