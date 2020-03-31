function Chat() {
    let chattingService = new ChattingService();
    let element = {
        nicknameForm: null,
        messageForm: null,
        sendMessage: null,
        messagesList: null
    };


    this.startChat = startChat;


    function startChat(parentElement) {
        renderChat(parentElement)
    }

    function renderChat(parentElement) {
        parentElement.innerHTML =
            `<div class="chat-main">
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
        let message = chattingService.sendMessage(element.messageForm.value, element.nicknameForm.value);
        return message;
    }

    function renderMessage(message) {
        let messageText = document.createElement('div');

        messageText.innerHTML =
            `<div class="chat-message">
                <div class="chat-message-header">
                    <div class="chat-message-date">
                        <span>${message.id}</span>
                        <span>${formatDate(message.createdDate)}</span>
                    </div>
                    <div class="chat-message-user">${message.userName}</div>
                </div>
                <div class="chat-message-content">${message.content}</div>
            </div>`;
        element.messagesList.appendChild(messageText)
    }


    function formatDate(date) {
        return  date.toLocaleTimeString();
    }

}
