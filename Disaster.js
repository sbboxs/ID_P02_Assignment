//Function for navigation
const navSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //Toggle
        nav.classList.toggle('nav-active');

        //Animation- Allow the button fade in one by one.
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            } else{
                link.style.animation= `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
            }
        });
        //Double-Cheese-Burger Animation
        burger.classList.toggle('toggle');
    });   

}

//Call the method name again to activate it, like in Python
navSlide();