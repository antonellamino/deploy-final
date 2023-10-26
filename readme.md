## Tabla de contenidos
- [Tabla de contenidos](#tabla-de-contenidos)
  - [Información General](#información-general)
  - [Información para participantes](#información-para-participantes)
  - [Importar BD](#importar-bd)
  - [Tablas SQL](#tablas-sql)
  - [Consultas a la API](#consultas-a-la-api)
  - [Colaboradores](#colaboradores)

### Información General
***
<div class="warning" style='padding:0.1em; background-color:#E9D8FD; color:#69337A'>
<span>
<p style='margin-left:1em;'>
Se integro sequelize para la conexion a la base de datos con MySql</p>
</p></span>
</div>
 

### Información para participantes
***
<div class="warning" style='padding:0.1em; background-color:#E9D8FD; color:#69337A'>
<span>
<p style='margin-left:1em;'>
Se debe primero hacer:
<li>npm init </li>
<li>npm i express  --save  </li>
<li>npm i -d nodemon </li>
<li>npm i sequelize </li>
<li>npm install --save mysql2 </li>
       </p></span>
</div>
 
 
 
### Importar BD
***
<ul>
<li>
  <p >Se tiene que primero importar la bd de Trailerflix, para poder hacer las consultas y verificar que el puerto y la contraseña sean las mismas que el tu local. 
  <br>
    <b> DB_HOST="localhost"
    DB_USER="root"
    DB_PASS="1234"
    DB_NAME="trailerflix"</b>
      </p>
</li>
</ul>


### Tablas SQL
***
```javascript
// Abrir MYSQL y crear un Schema haciendo click con botón derecho de mouse. Seleccionar Create Schema:

  actores
  categorias
  generos
  peliculas
  peliculas_tags
  rankings
  repartos
  tags
  
```

### Consultas a la API
***
<div class="warning"  style='padding:0.3em; background-color:#ccd9ff; color:##696969 border-radius: 30px;'>
<span >
<p align="center">

<li> Ruta para obtener todas las series
http://localhost:3000/api/series </li>
<li> Ruta para obtener todas las peliculas
http://localhost:3000/api/peliculas </li>
<li> Ruta para buscar por título
http://localhost:3000/api/buscar?titulo= </li>


</p>
</p></span>
</div>



<!-- ### Graficos 
```mermaid

``` -->
### Colaboradores 
***
<a href="https://github.com/antonellamino/INGENIAS-Pre-entrega3/graphs/contributors" target="_blank">
<img alt="Carolina Mendez" title="Carolina Mendez" style=" width: 60px; /* Tamaño de los avatares */
  height: 60px;
  border-radius: 50%;" src="https://avatars.githubusercontent.com/u/49485102?s=60&v=4"></a>
  <a href="https://github.com/antonellamino/INGENIAS-Pre-entrega3/graphs/contributors" target="_blank">
<img alt="Antonella Mino" title="Antonella Mino" style=" width: 60px; /* Tamaño de los avatares */
  height: 60px;
  border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69389897?s=60&v=4"></a> 
   <a href="https://github.com/antonellamino/INGENIAS-Pre-entrega3/graphs/contributors" target="_blank">
<img alt="Cristina Tizio" title="Cristina Tizio" style=" width: 60px; /* Tamaño de los avatares */
  height: 60px;
  border-radius: 50%;" src="https://avatars.githubusercontent.com/u/92401813?s=60&v=4"></a> 
  