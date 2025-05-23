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

module.exports = {
    displayMessages,
    postMessage
}