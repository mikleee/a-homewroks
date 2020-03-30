function Chat() {
    let chattingService = new ChattingService();
    this.startChat = startChat;
    let element = {
        nicknameForm: null,
        messageForm: null,
        sendMessage: null,
        messagesList: null
    };


    function startChat(parentElement) {
        renderChat(parentElement)

    }

    function renderChat(parentElement) {
        parentElement.innerHTML =
            `<div id="wrapper-chat">
                 <div chat-item="form-container">
                     <input type="text" placeholder="message" chat-item="message-form">
                     <input type="text" placeholder="name" chat-item="nickname-form">
                     <button chat-item="send-message">Send</button>
                </div>
                  <div chat-item="messages-list"></div>
            </div>`;


        element.nicknameForm = parentElement.querySelector('[chat-item="nickname-form"]');
        element.messageForm = parentElement.querySelector('[chat-item="message-form"]');
        element.sendMessage = parentElement.querySelector('[chat-item="send-message"]');
        element.messagesList = parentElement.querySelector('[chat-item="messages-list"]');

        element.sendMessage.onclick = function () {
            let message = sendMessage();
            renderMessage(message)

        }


    }

    function sendMessage() {
        let message = chattingService.sendMessage(element.nicknameForm.value, element.messageForm.value);
        return message;

    }

    function renderMessage(message) {
        let messageText = document.createElement('div');
        messageText.innerHTML =
            `<div class="date">${message.id} ${message.createdDate} </div>
             <div class="user-message">${message.content}</div>
             <div class="nick">${message.userName}</div>`;
        element.messagesList.appendChild(messageText)

    }
}
