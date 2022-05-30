
const submitted = document.querySelector("#submitted")
const form = document.querySelector("#form");

const yourName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const adress = document.querySelector("#adress");

const nameAlert = document.querySelector("#nameAlert");
const subjectAlert = document.querySelector("#subjectAlert");
const emailAlert = document.querySelector("#emailAlert");
const adressAlert = document.querySelector("#adressAlert");

form.addEventListener("submit", runForm);

function runForm(sub){
    sub.preventDefault();

    let inputName = yourName.value.trim();
    nameAlert.innerHTML = "";
    if (inputName.length < 2){
        nameAlert.innerHTML += "This name is to short";
    }
    if(/\d/.test(inputName)){
        nameAlert.innerHTML += "Don't use digits";
    }

    let inputSubject = subject.value.trim();
    subjectAlert.innerHTML = "";
    if(inputSubject.length < 10){
        subjectAlert.innerHTML += "Must be atleast 10 letters";
    }

    let inputAdress = adress.value.trim();
    adressAlert.innerHTML = "";
    if(inputAdress.length < 25){
        adressAlert.innerHTML += "Must be atleast 25 letters";
    }

    let inputEmail = email.value.trim();
    emailAlert.innerHTML = "";
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailPattern.test(inputEmail)) {
        emailAlert.innerHTML += "Enter valid email";
    }

    if (nameAlert.innerHTML === "" && emailAlert.innerHTML === "" && subjectAlert.innerHTML === "" && adressAlert.innerHTML === "") {
        submitted.innerHTML = "The form har been submitted";
        form.submit();
      } else {
        submitted.innerHTML = "You need to fix some errors";
      }
};

