//Arquivo que permite fazer as operações do bd, é utilizado em todos os arquivos que precisam de bd
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development)


module.exports = connection;