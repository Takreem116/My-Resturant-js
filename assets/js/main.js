const navbar =document.querySelector('.navbar');
const header =document.querySelector('.header');
const arrow = document.querySelector('.arrow');
const finest =document.querySelector('.finest');
const loading = document.querySelector('.loading');





const contactHeader =document.querySelector('.contact-header');




window.addEventListener('scroll' , function(){



    if(window.scrollY > header.offsetTop){
        navbar.style.boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)";
    }

    else{
        navbar.style.boxShadow="none";

    }



    if(window.scrollY > finest.offsetTop){
        arrow.classList.remove('opacity-0' , 'invisible');
    }
    else{
        arrow.classList.add('opacity-0' , 'invisible');

    }


  


})


window.addEventListener('load' , function(){

setTimeout(function(){

loading.classList.add('opacity-0' , 'invisible');
document.body.style.overflow='auto';


} , 2000);


})