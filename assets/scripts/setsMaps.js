const ids = new Set();
ids.add(1);
ids.add('abc');
ids.add(2);
ids.add(1);
ids.delete(1);

console.log(ids.has(1));

console.log([...ids]); 

for(const entry of ids.entries()){
    console.log(entry[0]);
}

const person1 = {name: "Max"};
const person2 = {name: "Manuel"};

const personData = new Map([[person1,[{date:'yesterday',price:10}]]]);

personData.set(person2,[{date:'two weeks ago',price:100}]);

console.log(personData)
console.log(personData.get(person2));

for(const [key,value] of personData.entries()){
    console.log(key,value);
}

for(const key of personData.keys()){
    console.log(key);
}

for(const value of personData.values()){
    console.log(value);
}

console.log(personData.size);


const persons = new WeakSet();
persons.add({id:"max"}); 
console.log(persons);

const personData2 = new WeakMap();
personData2.set(person1,'Extra info');
person1 = null;
console.log(personData2);
