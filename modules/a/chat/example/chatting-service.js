function ChattingService() {
    let me = this;

    let messages = [];
    let sequence = 0;

    this.getMessages = getMessages;
    this.sendMessage = sendMessage;


    function getMessages() {
        return messages;
    }

    function sendMessage(content, userName) {
        if (userName == undefined || userName == '') {
            userName = 'Anonymous';
        }

        let message = new Message(
            sequence++,
            new Date,
            content,
            userName
        );
        messages.push(message);

        return message;
    }


    function Message(id, createdDate, content, userName) {
        this.id = id;
        this.createdDate = createdDate;
        this.content = content;
        this.userName = userName;
    }


}