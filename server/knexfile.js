// Update with your config settings.
require('dotenv').config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_DEV_HOST,
            port: process.env.DB_DEV_PORT,
            user: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASSWORD,
            database: process.env.DB_DEV_DB,
            charset: "utf8"
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    },

    staging: {
        client: "pg",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "pg",
        connection: {
            host: process.env.DB_PROD_HOST,
            port: process.env.DB_PROD_PORT,
            user: process.env.DB_PROD_USER,
            password: process.env.DB_PROD_PASSWORD,
            database: process.env.DB_PROD_DB,
            charset: "utf8"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
