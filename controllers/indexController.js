const db = require('../db/queries');

async function displayMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { messages: messages });
}

async function addMessage(req, res) {
    await db.createMessage(req.body.user, req.body.message);
    res.redirect("/");
}

async function displayMessageContent(req, res) {
    const id = Number(req.params['id']);
    const message = await db.getMessageById(id);
    res.render("message", { user: message.user, message: message.message });
}

module.exports = {
    displayMessages,
    addMessage,
    displayMessageContent
}