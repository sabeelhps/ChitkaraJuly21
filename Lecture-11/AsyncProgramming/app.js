
// function fun() {
//     console.log("Inside Fun");
// }


// function delay(n) {
    

//     for (let i = 1; i <= n; i++){
//         const x = new Date().getTime();
//         while(new Date().getTime() < 1000+x){}
//     }

//     fun();

// }

console.log("START");

setTimeout(function cb() {
    console.log("Inside CallBack");
}, 5000);


const id=setInterval(() => {
    console.log("Hello!!");
}, 1000);


setTimeout(() => {
    clearInterval(id);
},10000)

console.log("END");