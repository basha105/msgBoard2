const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: "postgresql://postgres:eBgOdhVeRqyKUGlbVUqPJrZBYEOTcBrn@trolley.proxy.rlwy.net:17677/railway",
    ssl: {
        rejectUnauthorized: false
    }
});