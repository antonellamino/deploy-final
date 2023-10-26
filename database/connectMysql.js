const Sequelize = require('sequelize');
const { database } = require('../config');
const express = require('express');
const app = express();



const conexion = new Sequelize(database.DB_NAME, database.DB_USER, database.DB_PASS, {
  host: database.DB_HOST,
  port: database.DB_PORT,
  dialect: database.dialect
});

//   async function Conectarme() {
//     try {
//         await conexion.authenticate();
//         console.log("Conexion authenticated");
//         await Desconectarme();
//     } catch (err) {
//         console.error(err, "Error authenticating");
//     }
// }

// async function Desconectarme() {
//     try {
//         await conexion.close();
//         console.log("Conexion closed successfully")
//     } catch (err) {
//      console.error(err, "Error closing connection");   
//     }
// }

// Conectarme()
// setTimeout(() => Desconectarme(), 1000);



conexion.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports = conexion;