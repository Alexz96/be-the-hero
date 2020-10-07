const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/listar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deletar uma informação no Back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users;
  * Query Builder: table('users').select('*').where();
  */



app.listen(3333);