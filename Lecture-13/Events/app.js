const btn = document.querySelector('#btn');


function shout() {
    console.log("SHOUTT!!!");
}


function scream() {
    console.log("SCREAM!!!");
}



// btn.onclick = function (event) {
//     console.log(event.target);
//     console.log("Dont Click Me!!");
// }


// Problem with onclick
// btn.onclick = shout;
// btn.onclick = scream;


// -------------------------Event Listener---------

btn.addEventListener('click', shout);
btn.addEventListener('click', scream);


