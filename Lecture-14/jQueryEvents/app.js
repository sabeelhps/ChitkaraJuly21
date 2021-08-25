$('#btn').click(function(){
    console.log("Button Clicked");
})

$('div').click(function () {
    $(this).hide();
});

$('input[type="text"]').keypress(function (event) {
   
    if (event.keyCode === 13) {
        console.log($(this).val());
    }
   
})

$('#an-btn').on('click', function () {
    console.log("Button Clicked");
})