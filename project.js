const container_1 = document.querySelectorAll(".project-description-container")
const backBtn = document.querySelector(".online-light");
const container_2 = document.querySelectorAll(".project-link-container-out")
const title = document.querySelector(".project-title");
const profession_1= document.querySelector(".profession_1");
const profession_2= document.querySelector(".profession_2");
let main_wrapper = document.querySelector(".main-wrapper-body");
const container =  document.querySelectorAll(".container")
const unclickBtn= document.querySelectorAll(".unclick")
const fullContainer= document.querySelectorAll(".container")
let mediaRange = window.matchMedia('(min-width: 320px) and (max-width: 884px)')
// On load effects for project page
window.onload= () => {

    if (mediaRange.matches){
    backBtn.classList.add("glitter")
    fullContainer.forEach((container) => {
    container.classList.add("slide-in-1");  
    })
    title.classList.add("slide-up");
    }

    else{
    backBtn.classList.add("glitter")
    container_1.forEach((container) => {
        container.classList.add("slide-in-1");  
    })

    container_2.forEach((container) => {
        container.classList.add("slide-in-2");
    })
    title.classList.add("slide-up");
    }

    ;}

// Function for showing project related to profession 

profession_1.addEventListener("click", () => {
  container.forEach((item) => {
    if (item.classList.contains("data-science")) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else {
      item.classList.add("hide");
      item.classList.remove("active");
    }
  });
});

profession_2.addEventListener("click", () => {
  container.forEach((item) => {
    if (item.classList.contains("web-dev")) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else {
      item.classList.add("hide");
      item.classList.remove("active");
    }
  });
});

