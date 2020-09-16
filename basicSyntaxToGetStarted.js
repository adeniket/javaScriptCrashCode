// var,let,const
//string, numbers, boolean,null,undefined
const name='john';
const age=50;
// const isCool= true;
// const rating= 34.6;
// const y=null;
// const z=undefined;
// let x;

// console.log(typeof x);

//template String
console.log('My name is ' + name + ' i am '+ age + 'years old');
console.log(`my name is ${name} i am ${age} years old`);

/*const s='Technology, Computer, IT, Code';
console.log(s.split(','));*/

// Array
/*const fruits= ['mango','fruit','Orange', 10,true]
fruits[5]= 'pears'; // adding an aray element to a list
fruits.push('Pawpaw') // populating an arrray element 
fruits.unshift('Strawberry') // adding element to the beginning of an array list
fruits.splice(1,1) //to remove an element from array list specifying the start and end 
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('Orange'));
console.log(fruits);
*/

/*
// Object Notation
const person={
    FisrtName:'Adebowale',
    LastName:'Taiwo',
    Age:30,
    Hobbies:['sport', 'Movies','Fun'],
    Address:{
        Town:'50 main str',
        City: 'Lagos',
        Country:'Nigeria'
    }
}
console.log(person.Address.Town);
*/

// object notation inside an array

const todos=[
    {
        id:1,
        text:'Out of Trash',
        IsCompleted:true,
    },
    {
        id:2,
        text:'Meeting with the boss',
        IsCompleted:true,
    },
    {
        id:3,
        text:'Dentist App',
        IsCompleted:false,
    }
]
//console.log(todos[1].text);

/*const Jsontodo= JSON.stringify(todos);
console.log(Jsontodo);*/

/*
listing element of an array:method 1
for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    console.log(element.text);
    
}*/

/*
method 1
for (let todo of todos) {
    console.log(todo.text);
    
}*/
// foreach,map, fliter
/*todos.forEach(function(todo){
console.log(todo.id,todo.text)

})
    
const todoText= todos.map(function(todo){
    return todo.text;
})
console.log(todoText);

const todoCompleted= todos.filter(function(todo){
    return todo.IsCompleted==false;
})
console.log(todoCompleted);
*/

/*const addNums=(num1, num2) =>{
    return num1 + num2
}

console.log(addNums(5,34));*/

//constructor function 
//line 111-122 and line 123-137 does the same thing
/*function person(lastName, firstName,dob) {
    this.lastName=lastName;
    this.firstName=firstName;
    this.dob = new Date(dob);
    this.getBirthYear= function(){
        return this.dob.getFullYear();
    }
    this.getFullName= function(){
        return `${this.lastName} ${this.firstName}`;
    }
}
*/
class person{
    constructor(lastName, firstName,dob){
    this.lastName=lastName;
    this.firstName=firstName;
    this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();

    }
    getFullName(){
        return `${this.lastName} ${this.firstName}`;

    }
}


//instantiate object
const person1= new person('Joe','Mary','10-10-2016');
const person2= new person('Smith','Martins','03-03-1940');
console.log(person1);

// console.log(person1.getBirthYear());
// console.log(person2.getFullName());
