// Math.random()

function randomInt(min,max){

    //return Math.random() * (max -  min +1) + min;
    //return Math.floor(Math.random() * 10) + 1;
}


// Number.Max
// undefined
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// 0.2 +0.4
// 0.6000000000000001
// 2==2
// true
// .2 ==.2
// true
// .2 +.4  ==.6
// false
// (1).toString()
// '1'
// (1).toString(2)
// '1'
// (.1).toString(2)
// '0.0001100110011001100110011001100110011001100110011001101'
// (5).toString(2)
// '101'
// (1/5).toString(2)
// '0.001100110011001100110011001100110011001100110011001101'
// 0.2.toFixed(20)
// '0.20000000000000001110'
// 0.2.toFixed(2)
// '0.20'
// 20.2*100
// 2020
// 9007199254740991n
// 9007199254740991n
// -9007199254740991n
// -9007199254740991n
// -9007199254740991n.11


function productDescription(strings,productName,productPrice) {
    console.log(strings)
    console.log(productName)
    console.log(productPrice)

    let priceCategory = "cheap";
    if(productPrice > 20){
        priceCategory = "fair";
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
    return "Product";
}

const name= "JavaScript Course";
const price = 22.78

const prodName = productDescription`This product (${name}) is ${price} ok dd`;
console.log(prodName)