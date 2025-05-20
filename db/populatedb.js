require('dotenv').config();

const Client = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user VARCHAR ( 15 ),
    message VARCHAR ( 255 )
);

INSERT INTO MESSAGES (user, message)
VALUES
    ('Brent', 'Hello'),
    ('Omar', 'Hows it going'),
    ('Charlie', 'Get on fortnite'),
    ('Ion', 'SGA is MVP'),
    ('Cristiano', 'Jokic overrated flopper'),
`;

async function main() {
    console.log('Populating db...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();