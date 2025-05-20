const pool = require('./pool');

async function createMessage(user, message) {
    await pool.query("INSERT INTO messages (user, message) VALUES ($1, $2)", [user, message]);
}