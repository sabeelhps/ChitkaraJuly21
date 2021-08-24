const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
const inp = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const para = document.querySelector('p');

// console.log(buttons);

// buttons[0].addEventListener('click', () => {
//     console.log("Clicked");
// })

// buttons[1].addEventListener('click', () => {
//     console.log("Clicked");
// })

// buttons[2].addEventListener('click', () => {
//     console.log("Clicked");
// })

// Click Event

// h1.addEventListener('dblclick', () => {
//     console.log("h1 Clicked");
// })


// for (let btn of buttons) {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target.innerText);
//         console.log("Someone clicked the button");
//     })
// }



// Mouse Events
// for (let btn of buttons) {
//     btn.addEventListener('mouseenter', () => {
//         btn.style.border = '3px solid black';
//         btn.style.backgroundColor = 'lightgreen';
//         btn.style.fontWeight = 'bold';
//     })

//     btn.addEventListener('mouseleave', () => {
//         btn.style.border = "";
//         btn.style.backgroundColor = "";
//         btn.style.fontWeight = "";
//     })

// }


// Keyboard Events

// inp.addEventListener('keypress', (e) => {
//     // console.log(e.key);
//     if (e.which === 13) {
//         console.log("YOU HIT THE ENTER KEY!!");
//     }
//     // console.log("key pressed");
// })


// form events

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = form.elements[0].value;
//     const height = form.elements[1].value;
//     console.log(username, height);
// })


// Other events

para.addEventListener('copy', () => {
    alert('STOP COPYING NOW 😠😠😠😠😠😠😠');
})



