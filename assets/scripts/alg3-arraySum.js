
function sumUp(n){
let sum =0;

for(let i=0;i<n.length;i++){
    sum += n[i];
}
return sum;
}  // O(n)


const array = [1,2,3];

console.log(sumUp(array));