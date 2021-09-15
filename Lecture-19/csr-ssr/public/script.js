
const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');


function refreshList() {
    
    $('#list').empty();

    $.get('/todo', function (data) {
        
        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`);
        }
    });
}

refreshList();



btn.addEventListener('click', () => {
    
    const todoText = inp.value;

    console.log(todoText);

    $.post('/todo', { todo: todoText }, function (data) {
        console.log(data);
        console.log("SENT");
        refreshList();
    });

    inp.value = "";
})


