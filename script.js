function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value;

    if (message === "") {
        return;
    }

    let chatBox = document.getElementById("chatBox");
    let newMessage = document.createElement("div");

    newMessage.className = "message";
    newMessage.innerText = message;

    chatBox.appendChild(newMessage);
    input.value = "";
}