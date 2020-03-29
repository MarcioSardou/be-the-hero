//Arquivo que permite fazer as operações do bd, é utilizado em todos os arquivos que precisam de bd
const knex = require('knex');
const configuration = require('../../knexfile');

const cfg = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(cfg)


module.exports = connection;