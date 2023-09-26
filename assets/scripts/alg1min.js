function getMin(n){

    if(!n.length){
        throw new Error("Should not be emptyy");
}   

    if(n.length ===1 ){
        return n[0];
    }
 let min = n[0];
    for(let i = 0; i < n.length; i++){
        if(n[i] < min){
            min = n[i];
        }
    }
    return min;
}

function getMin2(n){

    if(!n.length){
        throw new Error("Should not be emptyy");
}   

    // let sortedNumbers;
    for(let i=0;i<n.length;i++){
        let outerElement = n[i];
        for(let j=i+1;j<n.length;j++){
            let innerElement = n[j]
            if(outerElement > innerElement){

                n[i] = innerElement;
                n[j] = outerElement;

                outerElement = n[i];
                innerElement = n[j];
            }
        }
    }
    return n[0];
}




const testNumbers =[-1,-5,1,1,2,2,3,4,-8];
const min = getMin2(testNumbers);

console.log(min)