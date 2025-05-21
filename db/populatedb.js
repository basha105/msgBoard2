#! /usr/bin/env/node

require('dotenv').config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 15 ),
    message VARCHAR ( 255 )
);

INSERT INTO MESSAGES (username, message)
VALUES
    ('Brent', 'Hello'),
    ('Omar', 'Hows it going'),
    ('Charlie', 'Get on fortnite'),
    ('Ion', 'SGA is MVP'),
    ('Cristiano', 'Jokic overrated flopper')
`;

async function main() {
    console.log('Populating db...');
    const client = new Client({
        connectionString: "postgresql://postgres:eBgOdhVeRqyKUGlbVUqPJrZBYEOTcBrn@trolley.proxy.rlwy.net:17677/railway",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();