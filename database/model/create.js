const { DataTypes } = require("sequelize")

const Actores = sequelize.define('actores', {
id_actor: {
    type: DataTypes.INTEGER, primarykey:true, AUTO_INCREMENT:true, allowNull:false

},
NombreYApellido : {
    type: DataTypes.STRING(100), allowNull:true

}
}
)

module.export = Actores

Actores.create ({
    NombreYApellido: 'Carolina Mendez'
}).then((actores) => {
    console.log('ACTOR CREADO' , actores);
})
.catch ((error) => {
    console.error('Error al crear el actor ', error)
})


// // CREATE TABLE `actores` (
// //   `id_actor` int NOT NULL AUTO_INCREMENT,
// //   `NombreYApellido` varchar(100) DEFAULT NULL,
// //   PRIMARY KEY (`id_actor`)
// // ) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb3;

// CREATE TABLE `categorias` (
//   `id_categoria` int NOT NULL AUTO_INCREMENT,
//   `Descripcion` varchar(45) DEFAULT NULL,
//   PRIMARY KEY (`id_categoria`)
// ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

// CREATE TABLE `generos` (
//   `id_genero` int NOT NULL AUTO_INCREMENT,
//   `Descripcion` varchar(45) DEFAULT NULL,
//   PRIMARY KEY (`id_genero`)
// ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
 