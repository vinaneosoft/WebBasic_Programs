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

nameEle.addEventListener("input", ()=>validateName())
ageEle.addEventListener("input", ()=>validateAge())
emailEle.addEventListener("input", ()=>validateEmail())
passEle.addEventListener("input", ()=>validatePassword())
cpassEle.addEventListener("input", ()=>validateConfirmPassword())

const namePattern= new RegExp("^[A-Za-z ]{2,50}$");
const emailPattern= new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
function validateName(){
    const name=nameEle.value;
    if(name==''){
         nameErrorEle.textContent="Name is required";
         return false;
    }
    else if(namePattern.test(name)==false){
         nameErrorEle.textContent="name must contain only alphabets ranging from 2 to 50";
          return false;
    }
    else{
        nameErrorEle.textContent=""; 
        return true;
    }
}
function validateAge(){
    const age=ageEle.value;
    if(age==''){
         ageErrorEle.textContent="Age is required";
         return false;
    }
    else if(age<20 || age>50){
         ageErrorEle.textContent="age between 20 to 50 allowed";
          return false;
    }
    else{
        ageErrorEle.textContent=""; 
        return true;
    }
}
function validateEmail(){
   const emailid=emailEle.value;
    if(emailid==''){
         mailErrorEle.textContent="Please enter emailid";
         return false;
    }
    else if(emailPattern.test(emailid)==false){
         mailErrorEle.textContent="Please enter valid email id";
         return false;
    }
    else{
        mailErrorEle.textContent=""; 
        return true;
    }
}
function validatePassword(){
    const password=passEle.value;
    if(password==''){
         passErrorEle.textContent="Password is required";
          return false;
    }
    else if(passwordPattern.test(password)==false){
         passErrorEle.textContent="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character";
         return false;
    }
    else{
        passErrorEle.textContent=""; 
         return true;
    }
}
function validateConfirmPassword(){
    const confirmpassword=cpassEle.value;
    const password=passEle.value;
    if(confirmpassword==''){
        cpassErrorEle.textContent="Password confirmation is required";
        return false;
    }
    else if(confirmpassword!=password){
        cpassErrorEle.textContent="Password must match";
        return false;
    }
    else{
        cpassErrorEle.textContent=""; 
        return true;
    }
}
function validateAll(){
    const b1=validateName();
    const b2=validateEmail();
    const b3=validateAge();
    const b4=validatePassword();
    const b5=validateConfirmPassword();
    console.log(b1 && b2 && b3 && b4 && b5);
    return b1 && b2 && b3 && b4 && b5;
}