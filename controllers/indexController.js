const db = require("../db/queries");

async function displayMessages(req, res) {
    const { rows } = await db.getMessages();
    console.log("messages:", rows);
    res.render("index", { messages: rows });
}

async function postMessage(req, res) {
    const username = req.body.username;
    const message = req.body.message;
    await db.postMessage(username, message);
    res.redirect("/");
}

async function displayMessageContent(req, res) {
    const id = req.params['id'];
    const { rows } = await db.getMessageById(id);
    console.log(rows);
    res.render("message", { username: rows[0].username, text: rows[0].message });
}

async function deleteMessage(req, res) {
    const id = req.params['id'];
    await db.deleteMessageById(id);
    res.redirect("/");
}

module.exports = {
    displayMessages,
    postMessage,
    displayMessageContent,
    deleteMessage
}