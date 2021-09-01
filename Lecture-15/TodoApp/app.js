// Mark todo as compeleted
$('ul').on('click','li',function () {
  
    $(this).toggleClass('completed');
})

// Remove the todo item

$('ul').on('click','span',function (event) {
    
    $(this).parent().fadeOut(800,function () {
        $(this).remove();
    })

    event.stopPropagation(); //to stop event bubbeling
})


// To add the todo
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        const todoText = $(this).val();

        const todo = `<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`;

        $('ul').append(todo);
        $(this).val("");
    }
});

$('#plus').click(function () {
    $('input[type="text"]').fadeToggle();
})

