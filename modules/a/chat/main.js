window.addEventListener('load', function (event) {
    let elementForChat = document.getElementById('chat');
    let chat = new Chat();
    chat.startChat(elementForChat);
});