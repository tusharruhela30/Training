function add(n1, n2) {
    return n1 + n2;
  }
  console.log(add(31, 5223)); 
  console.log(add(112, 1125));
  
  // Impure
  function addRandom(n) { return n + Math.random() }
  console.log(addRandom(1));
  
  let previousResult = 0;
  
  function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
  }
  
  console.log(addMoreNumbers(1, 1));
  
  const hobbies = ['Sports', 'Cookng'];
  function printHobbies(data) {
    data.push('My Hobby');
    console.log(data);
  }
  printHobbies(hobbies);
  
  let multiplier = 1.1;
  
  function taxCalc(tax) {
    function calculateTax(amount) {
      return amount * tax * multiplier;
    }
    return calculateTax;
  }

  multiplier = 1.8;
  
  const vat= taxCalc(0.11);
  const taxAmount = taxCalc(0.31);
  
  console.log(vat(100));
  console.log(taxAmount(200));
  

  // closure 
  let userName = 'Max';
  function greetUser() {
     let name = 'Max22';
    console.log('Hi ' + userName);
    console.log(name);
  }
  
  let name = 'Max1';
  userName = 'Manu';
  greetUser();


  // Recursion

  function powerOf(x,n){
    // if(n===1){
    //   return x;
    // }
    // return x * powerOf(x, n-1);
    
    return n===1 ? x : x * powerOf(x, n-1);
  }

    console.log(powerOf(2,3));

const myself ={
    name: 'Max',
    friends: [
        {
            name: 'Manu',
            friends: [ {name: 'Chris'} ]
        },{
            name: 'Julia',
        }
    ]
}

function getFriendNames(person){
    const collectedNames = [];

    if(!person.friends){
        return [];
    }

    for(const friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }
    return collectedNames;
}

console.log(getFriendNames(myself));