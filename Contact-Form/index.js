const  form = document.getElementById('contactForm');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email')
const number = document.getElementById('mobile');
const feedback = document.getElementById('feedback');

const fNameErr = document.getElementById('fNameErr');
const lNameErr = document.getElementById('lNameErr');
const emailErr = document.querySelector('#emailErr');
const mobNumberErr = document.querySelector('#mobNumberErr');

let fName="";
let lName="";
let mail="";
let num="";
let fback=""

firstName.addEventListener('change', (e)=>{
    fName = e.target.value;
})

lastName.addEventListener('change', (e)=> {
    lName = e.target.value;
})

email.addEventListener('change', (e)=>{
    mail =  e.target.value;
})

number.addEventListener('change', (e)=> {
    num = e.target.value;
})
const showError = (element, errTag, message) => {
    errTag.textContent = message;
    element.style.border = "1px solid red";
}

const validateForm = () => {
    let err = false;
    if(fName.length ===0){
        showError(firstName, fNameErr, "First Name cannot be empty");
        err = true;
    }else{
        err = false;
    }
    if(lName.length ===0){
        showError(lastName, lNameErr, "Last Name cannot be empty");
        err= true;
    }else{
        err = false;
    }
    if(email.length ===0){
        showError(mail, email, "Email cannot be empty");
        err = true;
    }else{
        er = false;
    }
    if(num.length ===0){
        showError(number, mobNumberErr, "mobile number cannot be empty");
        err= true;
    } else if(num.length <10 || num.length >10) {
        showError(number, mobNumberErr, "Mobile number must be of 10 digits");
        err = true;
    }else{
        err = false;
    }
    
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
    console.log('err', err);
    if(err === false){
        alert("Form submitted successfully");
    }
})