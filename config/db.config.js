const knex = require('knex');
const envalid = require('envalid');
const { str, bool } = envalid;
const env = envalid.cleanEnv(process.env, {
    DB_DEBUG: bool({ default: true }),
    DB_USER: str({ default: '' }),
    DB_PASSWORD: str({ default: '' }),
    DB_HOST: str({ default: '' }),
    DB_NAME: str({ default: '' })
});

const config =  {
    charset: 'utf8',
    client: 'mysql',
    debug: env.DB_DEBUG,
    pool: {
        max: 10,
    },
    connection: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        options: {
            encrypt: false
        },
    },
}
const connection = knex(config)
module.exports = connection;
