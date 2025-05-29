

let empnames=['omkar', 'praTik','viveK', 'omprakash', 'snehal','abhishek', 'om'];

empnames.forEach(function(name, index, ref){
    console.log(name+" "+index)
    //console.log(empnames==ref);
   // ref[1]='vina';
}
);

empnames.forEach((name, index, ref)=>console.log(name+" "+index+" "+ref));
empnames.forEach((name, index)=>console.log(name+" "+index));
empnames.forEach((name)=>console.log(name));

empnames.find((name)=>{
    return name.toLowerCase().startsWith('a')
})
console.log("--------------");
const found=empnames.find((name)=>name.toLowerCase().startsWith('a'))
console.log(found);

const founds=empnames.filter((name)=>name.toLowerCase().startsWith('a'))
console.log(founds);
/* NEO-Amol */



const mappedarray=empnames.map(
    (name)=>"NEO-"+name.charAt(0).toUpperCase()+name.substring(1).toLowerCase())
console.log(mappedarray);
console.log(empnames);

/* save length of each name in new array */
/* filter names having om in their name */
empnames
    .filter((name)=>name.toLowerCase().includes('om'))
    .forEach((name)=>console.log(name))


const ages=[10,2,3,4,2];

let sum=0;
for(let age of ages){
    sum=sum+age;
}
console.log(sum);

/* reduce */

const agesum=ages.reduce((sum, age)=>{
    console.log(sum); //10 , 12, 15, 19 , 21
    console.log(age); //2 , 3 , 4, 2 ended
    return sum+age; //12, 15, 19, 21
});
console.log(agesum);

console.log("---------");

ages.reduce((sum, age)=>{
    console.log(sum); //0
    console.log(age); //10  
    return sum+age;
}, 0);
const agesumm=ages.reduce((sum, age)=>sum+age);
console.log(agesumm);

const agesumm2=ages.reduce((sum, age)=>sum+age, 0);

let numarray1=[4,1,7,2];
let numarray2=[2,5,7,1];

const sum1=numarray1.reduce((sum, num)=>sum+num)
const totalsum=numarray2.reduce((sum,num)=>sum+num,sum1);
console.log(totalsum);


empnames=['omkar', 'praTik','viveK', 'omprakash', 'snehal','abhishek', 'om'];
//OPVOSAO

const finalstring=empnames.map((name)=>name.charAt(0).toUpperCase()).join("");
console.log(finalstring);

const finalstring2=empnames
    .map((name)=>name[0].toUpperCase())
    .reduce((acc,letter)=>acc+letter);
console.log(finalstring2);
