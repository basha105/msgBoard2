const pool = require('./pool');

async function getMessages() {
    const messages = await pool.query("SELECT * FROM messages");
    return messages;
}

async function postMessage(username, message) {
    await pool.query(`INSERT INTO MESSAGES (username, message) VALUES ($1, $2)`, [username, message]);
}

async function getMessageById(id) {
    const message = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
    return message;
}

async function deleteMessageById(id) {
    await pool.query(`DELETE FROM messages WHERE id=${id}`);
}

module.exports = {
    getMessages,
    postMessage,
    getMessageById,
    deleteMessageById
}

