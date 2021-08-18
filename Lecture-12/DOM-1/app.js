
const img = document.querySelector('img');


let isTrue = true;

const id=setInterval(() => {
    
    if (isTrue) {
        img.setAttribute('src', 'https://images.unsplash.com/photo-1627730433054-9ccb05ef8c6a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    }
    else {
        img.setAttribute('src', 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    }

    isTrue = !isTrue;

}, 2000);


setTimeout(() => {
    clearInterval(id);
}, 10000);
