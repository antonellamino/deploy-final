
module.exports = {
    database: {
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASS: process.env.DB_PASS || 'pass123',
        DB_NAME: process.env.DB_NAME || 'trailerflix',
        DB_PORT: process.env.DB_PORT,
        dialect: "mysql"
    }
}