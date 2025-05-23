const { Client } = require('pg');
const SQL = `
DROP TABLE messages
`
async function main() {
    console.log("Clearing db...");
    const client = new Client({
        connectionString: "postgresql://postgres:eBgOdhVeRqyKUGlbVUqPJrZBYEOTcBrn@trolley.proxy.rlwy.net:17677/railway",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Cleared db.");
}

main();