

const empnames=['Ashish','Amol', 'pratik','vivek','snehal','abhishek'];

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



