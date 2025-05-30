// access all elements using id

const nameEle=$("#myname");
const ageEle=$("#age");
const emailEle=$("#mail");
const passEle=$("#pass");
const cpassEle=$("#cpass");

const nameErrorEle=$("#nameerror");
const ageErrorEle=$("#ageerror");
const mailErrorEle=$("#mailerror");
const passErrorEle=$("#passerror");
const cpassErrorEle=$("#cpasserror");

nameEle.keyup(()=>validateName())
ageEle.keyup(()=>validateAge())
emailEle.keyup(()=>validateEmail())
passEle.keyup(()=>validatePassword())
cpassEle.keyup(()=>validateConfirmPassword())

$("#regform").submit(()=>validateAll())

const namePattern= new RegExp("^[A-Za-z ]{2,50}$");
const emailPattern= new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const passwordPattern= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
function validateName(){
    const name=nameEle.val();
    if(name==''){
         nameErrorEle.text("Name is required");
       //  alert("name is required");
         return false;
    }
    else if(namePattern.test(name)==false){
         nameErrorEle.text("name must contain only alphabets ranging from 2 to 50");
          return false;
    }
    else{
        nameErrorEle.text(""); 
        return true;
    }
}

function validateAge(){
    const age=ageEle.val();
    if(age==''){
         ageErrorEle.text("Age is required");
         return false;
    }
    else if(age<20 || age>50){
         ageErrorEle.text("age between 20 to 50 allowed");
          return false;
    }
    else{
        ageErrorEle.text(""); 
        return true;
    }
}
function validateEmail(){
   const emailid=emailEle.val();
    if(emailid==''){
         mailErrorEle.text("Please enter emailid");
         return false;
    }
    else if(emailPattern.test(emailid)==false){
         mailErrorEle.text("Please enter valid email id");
         return false;
    }
    else{
        mailErrorEle.text(""); 
        return true;
    }
}
function validatePassword(){
    const password=passEle.val();
    if(password==''){
         passErrorEle.text("Password is required");
          return false;
    }
    else if(passwordPattern.test(password)==false){
         passErrorEle.text("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character");
         return false;
    }
    else{
        passErrorEle.text(""); 
         return true;
    }
}
function validateConfirmPassword(){
    const confirmpassword=cpassEle.val();
    const password=passEle.val();
    if(confirmpassword==''){
        cpassErrorEle.text("Password confirmation is required");
        return false;
    }
    else if(confirmpassword!=password){
        cpassErrorEle.text("Password must match");
        return false;
    }
    else{
        cpassErrorEle.text(""); 
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