const Drop = document.querySelector('.dropdown-content');
const buttonElement = document.querySelector('.button');
buttonElement.addEventListener('click',()=>{
    if(Drop.style.opacity == 0){
        Drop.style.opacity = 1;
    }else{
        Drop.style.opacity =0;
    }
})

