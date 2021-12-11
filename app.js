window.addEventListener('scroll', reveal=>{
    var reveals = document.querySelectorAll('.appear');
    
    for(var i=0; i<reveals.length;i++){
        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;
        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
           
        }
    }
})
const scrollElements=document.querySelectorAll('.js-scroll');
scrollElements.forEach((el)=>{
    el.style.opacity=0;
})

const elementInView=(el,scrollOffset=0)=>{
    const elementTop=el.getBoundingClientRect().top;
    return(
        elementTop<=((window.innerHeight|| document.documentElement.clientHeight)-scrollOffset)
    );

};

const displayScrolledElement=(element)=>{
    element.classList.add("scrolled");
};
const hideScrollElement=(element)=>{
    element.classList.remove("scrolled");
};
const handleScrollAnimation=()=>{
    scrollElements.forEach((el)=>{
        if(elementInView(el,100)){
            displayScrolledElement(el);
        }
        else{
            hideScrollElement(el);
        };
    });
};
window.addEventListener('scroll',()=>{
    handleScrollAnimation();
})

// list JS 
stories = document.getElementsByClassName('story');     
for (var i = 0; i < stories.length; i++) {              // for each story
    stories[i].addEventListener("click", function () {  // add an onClick listener
        news = this.getElementsByClassName('news');     
        for (var j = 0; j < news.length; j++) {         // for each news in story
            news[j].classList.toggle('hide');           // toggle 'hide' on clicked
        }
    });
}

//list color
// document. getElementById('change'). onclick = changeColor;
// ​
// function changeColor() {
// document. body. style. color = "purple";
// return false;
// };




























const slider = document.querySelector('.wrapper');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

// buttons on card 

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('wrapid').scrollLeft += 150;
};
buttonLeft.onclick = function () {
  document.getElementById('wrapid').scrollLeft -= 150;
};
