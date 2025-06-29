

/**Function for changing normal content into data scientist or web developer content  */
function changeContent() {
    const profession_1= document.querySelector('.profession_1');
    const profession_2= document.querySelector('.profession_2');
    const content_title = document.querySelector(".content-title")
    let content = document.querySelector(".content");

    profession_1.addEventListener('click', () => {
        // 
        // content
        content.innerHTML = `Hi there! I'm a Data Scientist. I love working with data, building models, and extracting insights to help businesses make informed decisions. My expertise includes machine learning, statistical analysis, and data visualization. Let's explore the world of data together!`;
        content_title.innerHTML= "A bit about my Data Science Skill's "
        // toggle class
        if (content.classList.contains("slide-in-2")){
            content.classList.add('fade-in');
            content.classList.remove('slide-in-2');
        }
        else if (content.classList.contains("fade-in")){
            content.classList.remove('fade-in');
            content.classList.add('fade-out');
        }
        else if (content.classList.contains("fade-out")){
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        }
    })

    profession_2.addEventListener('click', () => {
        content_title.innerHTML="A bit about Web Developing Skill's"
        // changing content
        content.innerHTML = `Hello! I'm a Web Developer. I enjoy creating beautiful and functional websites. My skills include HTML, CSS, JavaScript, and various frameworks. Whether it's front-end or back-end development, I'm passionate about building user-friendly web applications. Let's create something amazing on the web!`;
        // toggle class
            if (content.classList.contains("slide-in-2")){
            content.classList.add('fade-in');
            content.classList.remove('slide-in-2');
        }
        else if (content.classList.contains("fade-in")){
            content.classList.remove('fade-in');
            content.classList.add('fade-out');
        }
        else if (content.classList.contains("fade-out")){
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        }
    

    })
}

changeContent();


/**Function for when main html loaded in the web */

const heading_tag= document.querySelector('.heading_tag');
const second_heading_tag= document.querySelector(".content-title")
const content= document.querySelector(".content");
const navItems=  document.querySelectorAll('.link');
const imgContainer = document.querySelector(".profile_img_container")
const backBtn= document.querySelector(".online-light")

window.onload = function() {
    // Adding classes to the elements for animation

    // Adding classes to the heading tag, second heading tag, content, and nav items
   heading_tag.classList.add("slide-in");
   second_heading_tag.classList.add("slide-in-2");
   content.classList.add("slide-in-2");
   backBtn.classList.add("glitter-online")

    navItems.forEach((item) => {
        item.classList.add("slide-in-2");
    }  );

    // Adding a class to the img container to animate the image

    imgContainer.classList.add("slide-in-2");
  

} 

// Function for hovaring on the nav items 

navItems.forEach(item =>{
    item.addEventListener('mouseover', () => {
     if (item.classList.contains("slide-in-2")) {
        item.classList.remove("slide-in-2");
        item.classList.add("glitter");
     }
        else if (item.classList.contains("none")) {
            item.classList.remove("none");
            item.classList.add("glitter");
        }
     
    });
        
})

navItems.forEach(item =>{
    item.addEventListener('mouseout', () => {
     if (item.classList.contains("glitter")) {
        item.classList.remove("glitter");
        item.classList.add("none");
     }
    });
})


// function for connecting mail link directly to the mail app
const mailLink = document.querySelector("#mail-link")

mailLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "mailto:gautamjaiswal331@gmail.com";
})



