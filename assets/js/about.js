const navbar =document.querySelector('.navbar');
const header =document.querySelector('.contact-header');


const arrow = document.querySelector('.arrow');
const section3 =document.querySelector('.section3');
const loading = document.querySelector('.loading');


const vedio= document.querySelector('#icon');



const tHeader =document.querySelector('.contact-header');




window.addEventListener('scroll' , function(){



    if(window.scrollY > header.offsetTop){
        navbar.style.boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)";
    }

    else{
        navbar.style.boxShadow="none";

    }



    if(window.scrollY > section3.offsetTop){
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


vedio.addEventListener('click' , function(){



let result="";
result=`     <iframe  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=mZ3KMJgB_T13hTC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`;

document.getElementById("icon").inerHTML=result ;

})