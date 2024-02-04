const socket = io.connect('http://localhost:3000')

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    console.log('buraya girdi');
    // socket.emit('chat', {
    //     message: message.value,
    //     sender: sender.value
    // });
});


socket.on('chat',data =>{
    console.log('test2');
    output.innerHTML += '<p><strong>' + data.sender + '</strong>' + data.message + '</p>'
})

console.log('sa')