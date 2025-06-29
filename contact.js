const backBtn= document.querySelector(".online-light")
const container_1 = document.querySelector("#contact-message-container")
const container_2 = document.querySelector("#contact-form")
const form = document.querySelector("#form")
let submitBtn = document.querySelector("#submit-button-container")


// On load effects for contact page
window.onload= () => {
    backBtn.classList.add("glitter")
    container_1.classList.add("slide-in-1");
    container_2.classList.add("slide-in-2");
}

// adding submit and reset  button when form is filled 

form.addEventListener("input", (e) => {
let form_name= document.querySelector("#name").value
let email= document.querySelector("#email").value
let phone= document.querySelector("#phone-number").value
let message=document.querySelector("#message").value
let name_count= Number(form_name.length)
let email_count= Number(email.length)
let phone_count= Number(phone.length)
let message_count= Number(message.length)

if(name_count > 0 && email_count > 0 && phone_count > 0 && message_count > 0){
    submitBtn.classList.remove("hide");
}
else{
    submitBtn.classList.add("hide");
}
}
)


// Form submitting function 

submitBtn.addEventListener("click", () => {
  const form_name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone-number").value;
  const message = document.querySelector("#message").value;

  const subject = encodeURIComponent("Message by user");
  const body = encodeURIComponent(
    `Dear Gautam,\n${message}\n${form_name}\n${phone}\nBest Regards`
  );

  const href_link = `mailto:gj75345@gmail.com?subject=${subject}&body=${body}`;

  // Use a temporary anchor to trigger the mail client
  const tempLink = document.createElement("a");
  tempLink.href = href_link;
  tempLink.style.display = "none";
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
});
