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
    if(num.length >10) {
        num=num.slice(0, 10);
    }
})
const showError = (element, errTag, message) => {
    errTag.textContent = message;
    element.style.border = "1px solid red";
}

const removeError = (element, errTag ) => {
    errTag.textContent = "";
    element.style.border = "1px solid black";
}

const validateForm = () => {
    let err=[];
    if(fName.length ===0){
        showError(firstName, fNameErr, "First Name cannot be empty!");
        err.push("Error in First Name");
    } else {
       removeError(firstName, fNameErr);
    }
    if(lName.length ===0){
        showError(lastName, lNameErr, "Last Name cannot be empty!");
        err.push("Error in Last Name");
    }else{
       removeError(lastName, lNameErr);

    }
    if(email.length ===0){
        showError(mail, email, "Email cannot be empty!");
        err.push("Error in Email");
    }else{
        removeError(email, emailErr);
    }
    if(num.length ===0){
        showError(number, mobNumberErr, "mobile number cannot be empty!");
       err.push("Mobile number cannot be empty");
    } else if(num.length <10 || num.length >10) {
        showError(number, mobNumberErr, "Mobile number must be of 10 digits");
        err.push("Mobile number must be of 10 digits");
    }else{
        removeError(number, mobNumberErr);
    }
    return err;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isErr = validateForm();
    if(isErr.length ===0){
        alert("Form submitted successfully");
    }
})