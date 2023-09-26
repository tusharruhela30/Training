// const name = "Max";
// console.log(`Hi ${name}!`);

const ages =[30,29,54];
ages.push(60)
ages.unshift(10);

const myAge = ages[1];

const namePopularity = [{
    name: "Max",
    usages: 134
},{
    name: "Manuel",
    usages: 22
}]

const manuUsage = namePopularity.find(pers => pers.userName === 'Max').usages;
console.log("The number of Max's uses is "+manuUsage+'.');


const nameMap = { 'Max': 5, 'Manuel': 6
}

const maxName = nameMap['Max'];
console.log(maxName);