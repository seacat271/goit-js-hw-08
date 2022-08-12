const throttle = require('lodash.throttle');

const refs = {
   form:  document.querySelector(".feedback-form"),
   email: document.querySelector("[name='email']"),
   message: document.querySelector("[name='message']")
}

let formValueData = {};

function firstLoadPage () {
    if(localStorage.getItem("inputFormData")) {
      formValueData = JSON.parse(localStorage.getItem("inputFormData"));
      let {email = "", message = ""} = formValueData;
        refs.message.value = message;
        refs.email.value = email;
    }
}

function onClickSubmitBtn (event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem("inputFormData");
}

function inputFormValue (event) {
    formValueData[event.target.name] = event.target.value;
    localStorage.setItem("inputFormData", JSON.stringify(formValueData))
}

firstLoadPage ()

refs.form.addEventListener("submit", onClickSubmitBtn)

refs.form.addEventListener("input", throttle(inputFormValue, 500))
