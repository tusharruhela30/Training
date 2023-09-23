
const userChose = "Helelo";
const person = {
    name: 'Max',
    age: 30,
    [userChose]: "...",
    hobbies:["Sports","hi"],
    greet: function() {
        console.log('Hi, I am ' + this.name);
    },
    1.5: "hello"
};
delete person.age;
person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports','Cooking'];
const copiedArray = [...hobbies];

console.log(copiedArray);
// const numbers = [12,-456789,'asdasd']
// console.log(numbers);
//
// const toArray = (...args) => {
//     return args;
// }