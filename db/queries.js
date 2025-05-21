const pool = require('./pool');

async function createMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}

async function getMessages() {
    const messages = await pool.query("SELECT * FROM messages");
    return messages;
}

async function getMessageById(id) {
    const message = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
    return message;
}

module.exports = {
    createMessage,
    getMessages,
    getMessageById
}

