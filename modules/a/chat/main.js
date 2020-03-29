window.addEventListener('load', function (event) {
    let elementForChat = document.getElementById('chat');
    let chat = new ChatA();
    chat.startChat(elementForChat);
});