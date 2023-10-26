const express = require('express');
const router = express.Router();
const Peliculas = require('../database/model/ModelPelicula'); // Importa el modelo de Peliculas
const { Op } = require('sequelize');


// Ruta para obtener todas las películas
router.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Peliculas.findAll({
            where: {
                id_categoria: 2 // Filtra por id_categoria igual a 2 (peliculas)
            }
        });
        res.json(peliculas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
});

// app.use('/api/peliculas', require('./routes/peliculas'));


// Ruta para obtener todas las series
router.get('/series', async (req, res) => {
    try {
        const series = await Peliculas.findAll({
            where: {
                id_categoria: 1 // Filtra por id_categoria igual a 1 (series)
            }
        });
        res.json(series);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las series' });
    }
});

// Ruta para buscar películas por título
router.get('/buscar', async (req, res) => {
    const { titulo } = req.query;

    if (!titulo) {
        return res.status(400).json({ error: 'Debes proporcionar un título para la búsqueda.' });
    }

    try {
        const peliculas = await Peliculas.findAll({
            where: {
                Titulo: {
                    [Op.like]: `%${titulo}%` // Búsqueda que incluye el título proporcionado
                }
            }
        });

        res.json({ peliculas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar películas por título' });
    }
});



module.exports = router;
