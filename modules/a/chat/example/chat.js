function Chat() {
    let me = this;
    let chattingService = new ChattingService();
    let elements = {
        userNameInput: null,
        messageContentInput: null,
        sendButton: null,
        listMessagesContainer: null
    };

    this.startChat = startChat;


    function startChat(parentElement) {
        renderChat(parentElement);
    }


    function renderChat(parentElement) {
        parentElement.innerHTML =
            `<div class="chat">
                <div chat-role="form">
                    <input type="text" chat-role="userName"/>
                    <input type="text" chat-role="messageContent"/>
                    <button chat-role="send-message">Send</button>
                </div>
                <div chat-role="list-messages" class="chat-list-messages"></div>
            </div>`;

        elements.userNameInput = parentElement.querySelector('[chat-role="userName"]');
        elements.messageContentInput = parentElement.querySelector('[chat-role="messageContent"]');
        elements.sendButton = parentElement.querySelector('[chat-role="send-message"]');
        elements.listMessagesContainer = parentElement.querySelector('[chat-role="list-messages"]');


        elements.sendButton.onclick = function () {
            let message = sendMessage();
            renderMessage(message);
        };
    }

    function renderMessage(message) {
        let formattedDate = formatDate(message.createdDate);

        let messageElement = document.createElement('div');
        messageElement.innerHTML =
            `<div class="chat-message">
                <div>
                    <div>${formattedDate}</div>
                    <div>${message.userName}</div>
                </div>
                <div>${message.content}</div>
            </div>`;
        elements.listMessagesContainer.appendChild(messageElement);
    }

    function sendMessage() {
        let messageResult = chattingService.sendMessage(
            elements.messageContentInput.value,
            elements.userNameInput.value
        );

        elements.messageContentInput.value = null;
        return messageResult;
    }


    function formatDate(date) {
        if (date == null) {
            return '';
        } else {
            return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
    }


}