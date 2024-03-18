// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

type User = {
    name:string,
    age: number,
    company: string

    }

 
 


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type dayofweek="Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday";



// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

 

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        salary: number
    )
    {

        super(firstName, lastName);
    }
}


// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Address {
    street:string;
    city:string;
    zipcode:number;
}
interface Employee {
    name:string;
    salaray:number;
    address:Address;
}
 
//CODEWARS
//Vowel count
function getCount(str){
    var vowelsCount= 0
    const vowels = ['a','e','i','o','u']
    for (let char of str) {
        if (vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount
}

//2. Remove exclamation marks
function removeExclamationMarks(s) {
    let result = ""
    for (let i =0; i <s.length; i++){ 
      if (s[i] !='!'){
        result +=s[i]
  }
    }
    return result
  }
