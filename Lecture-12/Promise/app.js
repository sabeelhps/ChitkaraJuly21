

// const x = new Promise(function (resolve, reject) {
    
//     setTimeout(() => {
//         const randomNum = Math.random();
//         console.log(randomNum);
//         if (randomNum < 0.5) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 2000);
   
// });


// x.then(() => {
//     console.log("Resolve");
// })
// .catch(() => {
//     console.log("Promise Rejected");
// });


// ---------------------------------------------------------


function fun() {

    return new Promise(function (resolve, reject) {
        const randomNum = Math.random();
        console.log(randomNum);
        if (randomNum < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    });

}

fun().then(() => {
    console.log("Promise Resolved");
})
.catch(() => {
    console.log("Promise Rejected");
})
