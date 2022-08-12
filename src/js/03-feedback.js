const throttle = require('lodash.throttle');

const refs = {
   form:  document.querySelector(".feedback-form"),
   email: document.querySelector("[name='email']"),
   message: document.querySelector("[name='message']")
}

let formValueData = {};

function firstLoadPage () {
    if(localStorage.getItem("feedback-form-state")) {
      formValueData = JSON.parse(localStorage.getItem("feedback-form-state"));
      let {email = "", message = ""} = formValueData;
        refs.message.value = message;
        refs.email.value = email;
    }
}

function onClickSubmitBtn (event) {
    event.preventDefault();
    formValueData = {email: "", message: "", ...JSON.parse(localStorage.getItem("feedback-form-state"))}
    console.log(formValueData)
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
    return formValueData = {};

}

function inputFormValue (event) {
    formValueData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formValueData))
}

firstLoadPage ()

refs.form.addEventListener("submit", onClickSubmitBtn)

refs.form.addEventListener("input", throttle(inputFormValue, 500))
