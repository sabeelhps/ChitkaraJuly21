const inp = document.querySelector('input');
const list = document.getElementById('list');


inp.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        const todoText = inp.value;
        
        const li = document.createElement('li');

        li.innerHTML = todoText;

        li.addEventListener('click', () => {
            li.remove();
        })

        list.append(li);

        inp.value = "";
    }
})  