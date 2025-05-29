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

const namePattern= new RegExp("^[A-Za-z ]{2,50}$");
const emailPattern= new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");
function validateName(){
    const name=nameEle.value;
    if(name==''){
         nameErrorEle.textContent="Name is required";
    }
    else if(namePattern.test(name)==false){
         nameErrorEle.textContent="name must contain only alphabets ranging from 2 to 50";
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
    else if(emailPattern.test(emailid)==false){
         mailErrorEle.textContent="Please enter valid email id";
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
    else if(passwordPattern.test(password)==false){
         passErrorEle.textContent="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
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