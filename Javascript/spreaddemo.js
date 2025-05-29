

function add(...arr2){
    return arr2.reduce((acc,num)=>acc+num, 0)
}

add();
add(2);
add(3,2);
add(4,32,1);
console.log( add(5,4,3,2,1));




let arr1=[4,2,3];
let arr2=[...arr1];



let o1={name:'hari',id:1};
let o2={...o1, sal:34000}


const person={  name:'ashish'};
person.name="abhishek";
console.log(person.name);

//person={age:567};



