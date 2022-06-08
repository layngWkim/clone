'use strict';

//Make navbar transparent
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

//Toggle Menu
const navbarBtn = document.querySelector('.navbar__toggle-btn');
navbarBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//Contact Me Scroll
const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//Home Fade in-out
const home = document.querySelector('.home__container');
const homeCHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(1 - window.scrollY / homeCHeight);
    home.style.opacity = 1 - window.scrollY / homeCHeight;
});

//Arrow Top Scroll Button
const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});
document.addEventListener('scroll', () =>{
    if(window.scrollY > homeCHeight / 2){
        arrowUp.classList.add('opa');
    } else {
        arrowUp.classList.remove('opa');
    }
});

//Work Projects
const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workCategories.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return
    };

    // Remove selection
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.p
    arentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

//Scrolling Function
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};

