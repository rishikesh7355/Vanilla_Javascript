const  form = document.getElementById('ContactForm');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email')
const number = document.getElementById('mobile');
const feedback = document.getElementById('feedback');

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