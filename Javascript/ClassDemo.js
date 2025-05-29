class Employee{

    #empId;#empName;#empSalary

    constructor(id=0,name='a', salary=0){
        this.#empId=id;
        this.#empName=name;
        this.#empSalary=salary;
    }

    get eid(){
        return this.#empId;
    }

    
    incrementSalary(amount){
        this.#empSalary= this.#empSalary+amount;
        return this.#empSalary
    }

}

const emp2=new Employee(1,'Manisha', 450000);
const emp3=new Employee(2,'Manisha');
const emp4=new Employee(3);
const emp1=new Employee();
console.log(emp2);

emp2.incrementSalary(100000);
console.log(emp2.#empSalary);


console.log(emp2.eid);
console.log(emp2.#empName);
console.log(emp2.#empSalary);

for(let key in emp2){
    console.log(key);
    console.log(emp2[key]);
}

