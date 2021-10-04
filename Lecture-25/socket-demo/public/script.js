const socket = io();

$('#send-btn').click(() => {
    
    const msgText = $('#inp-msg').val();

    socket.emit('send-msg', {
        msg: msgText
    })

    $('#inp-msg').val("");
    
});

socket.on('recieved-msg', (data) => {
    $('#chat').append(`<li>${data.id} say --> ${data.msg}</li>`)
})