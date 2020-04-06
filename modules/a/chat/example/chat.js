function Chat() {
    let chattingService = new ChattingService();
    let smilesService = new SmilesService();
    let element = {
        nicknameForm: null,
        messageForm: null,
        sendMessage: null,
        messagesList: null,
        smilesList: null
    };


    this.startChat = startChat;


    function startChat(parentElement) {
        renderChat(parentElement)
    }

    function renderChat(parentElement) {
        parentElement.innerHTML =
            `<div class="chat-main">
                <div class="controls">
                    <div chat-item="form-container">
                        <input type="text" placeholder="name" chat-item="nickname-form">
                        <input type="text" placeholder="message" chat-item="message-form">
                        <button chat-item="send-message">Send</button>
                    </div>
                    <div chat-item="smiles-list"></div>
                </div>
                <div chat-item="messages-list"></div>
            </div>`;


        element.nicknameForm = parentElement.querySelector('[chat-item="nickname-form"]');
        element.messageForm = parentElement.querySelector('[chat-item="message-form"]');
        element.sendMessage = parentElement.querySelector('[chat-item="send-message"]');
        element.messagesList = parentElement.querySelector('[chat-item="messages-list"]');
        element.smilesList = parentElement.querySelector('[chat-item="smiles-list"]');

        element.sendMessage.onclick = function () {
            let message = sendMessage();
            renderMessage(message)
        };

        renderSmiles(element.smilesList);

    }

    function sendMessage() {
        let message = chattingService.sendMessage(element.messageForm.value, element.nicknameForm.value);
        element.messageForm.value = null;
        return message;
    }

    function renderMessage(message) {
        let messageText = document.createElement('div');

        let formattedDate = formatDate(message.createdDate);
        let messageContent = smilesService.smilify(message.content);


        messageText.innerHTML =
            `<div class="chat-message">
                <div class="chat-message-header">
                    <div class="chat-message-date">
                        <span>${message.id}</span>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="chat-message-user">${message.userName}</div>
                </div>
                <div class="chat-message-content">${messageContent}</div>
            </div>`;
        element.messagesList.appendChild(messageText)
    }


    function formatDate(date) {
        return date.toLocaleTimeString();
    }

    function renderSmiles(smilesListElement) {
        let smilesArray = smilesService.getSmiles();

        for (let smile of smilesArray) {
            let smileElement = document.createElement('img');
            smileElement.setAttribute('src', smile.url);
            smileElement.setAttribute('alt', smile.symbol);
            smileElement.classList.add("smile");
            smilesListElement.appendChild(smileElement);

            smileElement.onclick = function () {
                addSmileToMessage(smile);
            };
        }

    }

    function addSmileToMessage(smile) {
        let message = element.messageForm.value;
        element.messageForm.value = message + ' ' + smile.symbol;
    }


}
