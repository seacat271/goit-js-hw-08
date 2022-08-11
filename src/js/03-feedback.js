const throttle = require('lodash.throttle');

const refs = {
   form:  document.querySelector(".feedback-form"),
   email: document.querySelector("[name='email']"),
   message: document.querySelector("[name='message']"),
   submitBtn: document.querySelector("[type='submit']"),
}


function firstLoadPage () {
    if(localStorage.getItem("inputFormData")) {
        
       const {email = "", message = "",} = JSON.parse(localStorage.getItem("inputFormData"));
        refs.message.value = message
        refs.email.value = email;
    }
}



firstLoadPage ()

const formValueData = {};

refs.form.addEventListener("input", throttle((event) => {
    console.log(event.target.name)
    formValueData[event.target.name] = event.target.value;
    localStorage.setItem("inputFormData", JSON.stringify(formValueData))
}, 500))

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem("inputFormData");
})




console.log(JSON.parse(localStorage.getItem("inputFormData")))