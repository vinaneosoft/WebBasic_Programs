/* dynamically typed language : data types are dynamically assigned depends on value */

let s1="hello";
var s2="neosoft"
const s3=56;
var s2="rabale"; /* var type variables can be redeclared */
//let s1=567; /* let type variables can not be redeclared */

let n1="one hundred";
console.log(typeof n1); //string
n1=100;
console.log(typeof n1);// number
n1=true;
console.log(typeof n1); //boolean

let company;
console.log(company);
console.log(typeof company);

let emp1=null;
console.log(typeof emp1);

function add(n1, n2){
    console.log(n1);
    console.log(n2);
    return n1+n2;
}
let result=add();
console.log(result);
console.log(add(23));
console.log(add(45,67));
console.log(add(56,34,23));


const fun=function(n1,n2){
 console.log(n1);
    console.log(n2);
    return n1+n2;
}
fun(12,11);

const arrowfun=(n1,n2)=>{
    console.log(n1+n2);
    
}
console.log(arrowfun(43,23));

(num)=>{
    console.log(num*num*num);
}
/* if arrow function accepting single formal argument then () optional */
num=>{
     console.log(num*num*num);
}
const arrow2=num=>console.log(num*num*num);
arrow2(3);


