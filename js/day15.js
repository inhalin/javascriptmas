const prev=document.querySelector('.previous');
const next=document.querySelector('.next');
const gallery=document.querySelector('.gallery');
let position=0;

function handleNext(event){
  if(position > -880){
    position-=220;
    gallery.style.transform=`translateX(${position}px)`;
    prev.style.opacity=1.0;
  }
  if(position===-880){
    next.style.opacity=.3;
  }
}

function handlePrev(event){
  if(position<0){
    position+=220;
    gallery.style.transform=`translateX(${position}px)`;
    next.style.opacity=1.0;
  }
  if(position===0){
    prev.style.opacity=.3;
  }
}

function init(){
  prev.addEventListener('click',handlePrev);
  next.addEventListener('click',handleNext);
}

init();