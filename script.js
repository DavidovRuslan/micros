// burger
let burgerBtnA = document.querySelector(".burger__btn-a")
let burgerBtn = document.querySelector(".burger__btn")
let burger = document.querySelector(".burger")
let container = document.querySelector(".container")

burgerBtnA.addEventListener("click", function(e){
    e.preventDefault;
    burgerBtnA.classList.toggle("burger__btn-a_active")
  })
burgerBtn.addEventListener("click",function(e){
    e.preventDefault;
    burger.classList.toggle("burger__active")
    container.classList.toggle("container__active")
  })
  

  //main slider
let sliderImg = document.querySelectorAll(".slider__img")
let sliderDot = document.querySelectorAll(".slider__dot")
let index = 0;

function setImage(event){
  sliderImg[index].classList.remove("slider__img-active")
  sliderDot[index].classList.remove("slider__dot-active");
  index = event.currentTarget.dataset.target;
  sliderImg[index].classList.add("slider__img-active");
  sliderDot[index].classList.add("slider__dot-active");
}

sliderDot.forEach(elem => {
    elem.addEventListener("click", setImage);
});

// recommend slider
let prevBtn = document.querySelector(".recommend__arrow-prev")
let nextBtn = document.querySelector(".recommend__arrow-next")
let mainText = document.querySelectorAll(".recommend__slide-p")
let photo = document.querySelectorAll(".recommend__people-img")
let nameMail = document.querySelectorAll(".recommend__people-text")
let i = 0;

function recomSliderPlus(){
 mainText[i].classList.add("recommend__slide-p-active")
 photo[i].classList.add("recommend__people-img-active")
 nameMail[i].classList.add("recommend__people-text-active")
 mainText[i-1].classList.remove("recommend__slide-p-active")
 photo[i-1].classList.remove("recommend__people-img-active")
 nameMail[i-1].classList.remove("recommend__people-text-active")
}
function recomSliderMinus(){
  mainText[i].classList.add("recommend__slide-p-active")
  photo[i].classList.add("recommend__people-img-active")
  nameMail[i].classList.add("recommend__people-text-active")
  mainText[i+1].classList.remove("recommend__slide-p-active")
  photo[i+1].classList.remove("recommend__people-img-active")
  nameMail[i+1].classList.remove("recommend__people-text-active")
 }
 function colorBtn(){
   if(i!=0){
    prevBtn.classList.add("recommend__arrow-active")
   }else{
    prevBtn.classList.remove("recommend__arrow-active")
   }
   if(i!=mainText.length-1){
    nextBtn.classList.add("recommend__arrow-active")
   }else{
    nextBtn.classList.remove("recommend__arrow-active")
   }
   
 }
prevBtn.addEventListener("click",function(){
  if(i>0){
    i--
  recomSliderMinus()
  colorBtn()
  }
})
nextBtn.addEventListener("click",function(){
  if(i<mainText.length-1){
    i++
    recomSliderPlus()
    colorBtn()
  }
})
