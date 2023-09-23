const numbers  =[1,2,3];
console.log(numbers);

const moreNumbers = new Array('Hi','Welcome');
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


const hobbies = ['Cooking','Sports'];
const personalData = [30,'Max',{moreDetail: []}];
const analyticsData = [[1,1.6],[2,2.7]];
// const allData = [...hobbies,...personalData] // spread operator

const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

const [age,userName,moreDetail] = personalData;
console.log(age,userName,moreDetail);

const [firstResult,secondResult] = analyticsData;
console.log(firstResult,secondResult);

// Array of array
for(const data of analyticsData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}

console.log(personalData[1]);

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

hobbies.unshift('Coding');
console.log(hobbies);

const poppedValue = hobbies.pop();
console.log(hobbies);

hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
console.log(hobbies);

hobbies.splice(1,0,'Good Food');
console.log(hobbies);

hobbies.splice(0,1);
console.log(hobbies);

hobbies.splice(0,1,'Good Food');
console.log(hobbies);

hobbies.splice(0,1,'Good Food','Programming');
console.log(hobbies);

hobbies.splice(0,2,'Good Food','Programming');
console.log(hobbies);


const testResults = [1,5.3,1.5,10.99,-5,10];
const storedResults = testResults.slice(2);
console.log(storedResults,testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

const personData = [{name:'Max'},{name:'Manuel'}];
console.log(personData.indexOf({name:'Manuel'}));

const manuel = personData.find((person,index,persons) => {
    return person.name === 'Manuel';
})

manuel.name = 'Anna';

console.log(manuel,personData);

let maxIndex = personData.findIndex((person,index,persons) => {
    return person.name === 'Max';
})

maxIndex++; 
console.log(maxIndex);

const prices = [10.99,5.99,3.99,6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
for (let i=0 ;i<prices.length;++i){
    taxAdjustedPrices.push(prices[i] * (1+tax));
}
console.log(taxAdjustedPrices);

const taxAdjustedPrices2 = prices.map((price,index,prices) => {
    const priceObj = {index: index, taxAdjPrice: price * (1+tax)};
    return priceObj;
})

console.log(prices,taxAdjustedPrices2);

// const sortedPrices = prices.sort((a,b) => {
//     if(a>b){ return 1;
//     } else if (a === b){ return 0;
//     } else { return -1; }
// })
// console.log('sorted',sortedPrices.reverse());

const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);

let sum = 0;
prices.forEach((price,index,prices) => {
    sum += price;
})

console.log(sum);

const sum2 = prices.reduce((prevValue,curValue,curIndex,prices) => {
    return prevValue + curValue;
},0)

console.log(sum2);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
console.log(transformedData);

// const nameFragments = ['Max','Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments,copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name:'Max',age:30},{name:'Manuel',age:31}];
// const copiedPersons = persons.map(person => ({
//     name: person.name,
//     age: person.age
// }));

// persons.push({name:'Anna',age:29});
// persons[0].age = 311;
// console.log(persons,copiedPersons);


const nameFragments = ['Max','Schwarz'];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName,lastName] = nameFragments;
console.log(firstName,lastName);













