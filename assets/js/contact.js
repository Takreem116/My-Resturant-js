const navbar =document.querySelector('.navbar');
const header =document.querySelector('.contact-header');


const arrow = document.querySelector('.arrow');
const mapSection =document.querySelector('.map-section');
const loading = document.querySelector('.loading');





const tHeader =document.querySelector('.contact-header');




window.addEventListener('scroll' , function(){



    if(window.scrollY > header.offsetTop){
        navbar.style.boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)";
    }

    else{
        navbar.style.boxShadow="none";

    }



    if(window.scrollY > mapSection.offsetTop){
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