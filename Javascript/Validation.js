// access all elements using id

const nameEle=document.getElementById("myname");
const ageEle=document.getElementById("age");
const emailEle=document.getElementById("mail");
const passEle=document.getElementById("pass");
const cpassEle=document.getElementById("cpass");

const nameErrorEle=document.getElementById("nameerror");
const ageErrorEle=document.getElementById("ageerror");
const mailErrorEle=document.getElementById("mailerror");
const passErrorEle=document.getElementById("passerror");
const cpassErrorEle=document.getElementById("cpasserror");

nameEle.addEventListener("blur", ()=>validateName())
ageEle.addEventListener("blur", ()=>validateAge())
emailEle.addEventListener("blur", ()=>validateEmail())
passEle.addEventListener("blur", ()=>validatePassword())
cpassEle.addEventListener("blur", ()=>validateConfirmPassword())

function validateName(){
    const name=nameEle.value;
    if(name==''){
         nameErrorEle.textContent="Name is required";
    }
    else{
        nameErrorEle.textContent=""; 
    }
}
function validateAge(){
    const age=ageEle.value;
    if(age==''){
         ageErrorEle.textContent="Age is required";
    }
    else{
        ageErrorEle.textContent=""; 
    }
}
function validateEmail(){
   const emailid=emailEle.value;
    if(emailid==''){
         mailErrorEle.textContent="Please enter emailid";
    }
    else{
        mailErrorEle.textContent=""; 
    }
}
function validatePassword(){
    const password=passEle.value;
    if(password==''){
         passErrorEle.textContent="Password is required";
    }
    else{
        passErrorEle.textContent=""; 
    }
}
function validateConfirmPassword(){
    const confirmpassword=cpassEle.value;
    if(confirmpassword==''){
        cpassErrorEle.textContent="Password confirmation is required";
    }
    else{
        cpassErrorEle.textContent=""; 
    }
}