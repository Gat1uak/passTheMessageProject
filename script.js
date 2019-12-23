console.log("Connection made");

const sendBtn = document.getElementById('sendBtn');
const messageIn = document.getElementById('messageIn');
const messageOut = document.getElementById('messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
   let message = messageIn.value;
   if (!message) {
      alert('Please enter a message');
   } else {
      messageOut.innerHTML = message;
      messageIn.value = '';
   }
}