function Chat() {
    let me = this;
    let elements = {
        userNameInput: null,
        userFormInput: null,
        sendBtn: null,
        messagesListInput: null
    };
    this.startChat = startChat;


    function startChat(parentElement) {
        renderChat(parentElement)

    }

    function renderChat(parentElement) {
        parentElement.innerHTML = `<div>
            <div class="chat-wrapper"></div>
                <input type="text" chat-attr="userName">
                <input type="text" chat-attr="userForm">
                <button chat-attr="btn">Send</button>
                <div chat-attr="messagesList"</div>
         </div>`;

        elements.userNameInput = parentElement.querySelector('[chat-attr="userName]');
        elements.userFormInput = parentElement.querySelector('[chat-attr="userForm]');
        elements.sendBtn = parentElement.querySelector('[chat-attr="btn"]');
        elements.messagesListInput = parentElement.querySelector('[chat-attr="messagesList"]')

        elements.sendBtn.onclick = function () {
            let message = sendMessage();
            renderMessage(message);
        };
    }

    function renderMessage(message) {
        debugger
        let messageElement = document.createElement('div');
        messageElement.innerHTML =
            `<div class="chat-message">
                <div>
                    <div>${message.createdDate}</div>
                    <div>${message.userName}</div>
                </div>
                <div>${message.content}</div>
             </div>`;
        elements.messagesListInput.appendChild(messageElement)

    }

    function sendMessage() {

        let messageRes = chattingService.sendMessage(
            elements.messagesListInput.value,
            elements.userNameInput
        );
        return messageRes
    }


}