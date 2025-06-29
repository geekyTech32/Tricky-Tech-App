// window onload effects function 
const backBtn = document.querySelector(".online-light");
const title = document.querySelector(".title-resume")
const title_heading = document.querySelectorAll(".heading")
const content_heading = document.querySelectorAll(".heading-2")
const position = document.querySelector("#position")
const date = document.querySelectorAll(".date")
const content= document.querySelector(".content")
const skillContainer= document.querySelector(".content-container-list")
const unorderList= document.querySelector(".unordered-list")
const category_1= document.querySelectorAll(".category-1")
const category_2= document.querySelectorAll('.category-2')
const skillSet= document.querySelector("#skill-heading")
window.onload = function(){
    title.classList.add('slide-up')
    backBtn.classList.add('glitter')
    title_heading.forEach((heading) => {
        heading.classList.add('slide-in-1')})
    content_heading.forEach((heading) => {
        heading.classList.add('slide-in-2')})
    position.classList.add('slide-in-2')
    date.forEach((date) => {
        date.classList.add('slide-in-2')})
    content.classList.add('slide-in-2')
}


window.addEventListener("scroll", ()=>{
    // when window reached 1300 px down animation added to the skill set container plus hiden class will be removed
    if(window.scrollY >= 1300){
        category_1.forEach(element => {
            element.classList.add("slide-in-1")
        });
        category_2.forEach(element => {
            element.classList.add("slide-in-2")
        });
       
        skillContainer.classList.remove("hide")
        skillContainer.classList.add("show")
    }



})

