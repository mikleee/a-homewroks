function ChattingService() {
    let me = this;
    let messages = [];
    let counterID = 0;
    this.getMessages = getMessages;
    this.sendMessage = sendMessage;


    function getMessages() {
        return messages
    }

    function sendMessage(content, userName) {
        if (userName == undefined || userName == '') {
            userName = 'Anonimchik'
        }
        let message = new Message(counterID++, new Date(), content, userName);
        messages.push(message);
        return message;
    }

    function Message(id, createdDate, content, userName) {
        this.id = id;
        this.createdDate = createdDate;
        this.content = content;
        this.userName = userName
    }


}
let chattingService= new ChattingService()