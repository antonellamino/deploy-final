const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connectMysql');

class Peliculas extends Model {}

 Peliculas = sequelize.define('Peliculas', {
    id_pelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Poster: DataTypes.STRING,
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Resumen: DataTypes.STRING,
    Temporadas: DataTypes.STRING,
    Duracion: DataTypes.STRING,
    Trailer: DataTypes.STRING,
    Lanzamiento: DataTypes.DATE,
    id_categoria: DataTypes.INTEGER,
    id_genero: DataTypes.INTEGER,
}, {
    tableName: 'peliculas',
    modelName: 'Peliculas',
    timestamps: false,
    // Otras opciones, como timestamps, pueden ir aquí
});
// Peliculas.init({
//     id_pelicula: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     Poster: DataTypes.STRING,
//     Titulo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     Resumen: DataTypes.STRING,
//     Temporadas: DataTypes.STRING,
//     Duracion: DataTypes.STRING,
//     Trailer: DataTypes.STRING,
//     Lanzamiento: DataTypes.DATE,
//     id_categoria: DataTypes.INTEGER,
//     id_genero: DataTypes.INTEGER,
// }, {
//     sequelize,
//     modelName: 'peliculas',
//     tableName: 'peliculas', // Nombre de la tabla en la base de datos
// });

module.exports = Peliculas;