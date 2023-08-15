let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let moreBtn= document.querySelectorAll('.more-btn');
let p= document.querySelectorAll('.text');


for(let i=0;i<moreBtn.length;i++){
    moreBtn[i].addEventListener("click",(e)=>{
        p[i].classList.toggle('show-more');
        if(moreBtn[i].innerText==='Read More'){
            moreBtn[i].innerText='Read Less';
        }
        else{
            moreBtn[i].innerText='Read More'
        }
    })
    
}