
class Aged{
    // constructor(){
    
    //     console.log(this.age);
    // }
    printAge(){
        console.log(this.age);
    }
}

class Person extends Aged {
    name ="Max";

    constuctor(){
        this.age = 30;
        
    }
    greet = () => {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    }
}


// function Person() {
//     this.age = 30;
//     this.name = "Max";
//     this.greet = function() {
//         console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
//     };
// }

// Person.describe = function(){
//     console.log("Creating person");
// }

// Person.prototype ={
//     printAge() {
//         console.log(this.age);
//     }
// }

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(Person.prototype);

// const p2 = new person.__proto__.constructor();
// console.log(p2);
// console.log(Object.prototype.__proto__)


// const  p = new Person();
// console.log(p)

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course  = {
    title: 'JavaScript - The Complete Guide',
    rating: 5
};
console.log(course.__proto__);
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function(){
        console.log(`${this.rating}/5`);
    }
});
const student = Object.create({printProgress: function(){console.log("1")}});
student.name ="Maxx"
console.log(student);
student.printProgress()
// console.dir({course});
// Object.defineProperty(course, 'price', {
//     value: 100,     
//     writable: false
// });