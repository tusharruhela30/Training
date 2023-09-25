

const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition =(opts) =>{
    const promise = new Promise((resolve, reject) =>{
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts);
    });
    return promise;
}


const setTimer =async (dur) =>{
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, dur);
    })
    return promise;
}

async function trackUserHandler() {
  console.log('Clicked!');
  try{
   const posData = await getPosition()
   const timerData = await setTimer(2000);
   console.log(timerData, posData);
  }catch(errr) {
    console.log(errr)
  }
   


//    .then((data)=>{
//     console.log(data);
//     return setTimer(2000)
//   }).then(newData=>{

//     console.log(newData)
//   }).catch(err=>{
//     console.log(err);
//   })


  setTimeout(()=>{
    console.log('Timer done!');
  },0)
  console.log("Hi ia m w0orking");
}

button.addEventListener('click', trackUserHandler);

Promise.race([
    getPosition(),
    setTimer(1000)
]).then(data=>{
    console.log(data);
});

Promise.all([
    getPosition(),
    setTimer(1000)
]).then(promiseData=>{  
    console.log(promiseData);
})

Promise.allSettled([
    getPosition(),
    setTimer(1000)
]).then(promiseData=>{
    console.log(promiseData);
})


// let result = 0;
// for (i=1 ; i<=100000000 ; ++i){

//     result +=1;
// }
// console.log(result);


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('It worked!');
//     }, 1000);
// });