require('dotenv').config();

const express = require('express');
const cors = require('cors');

const router = express.Router();

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de Datos
dbConnection();



//Rutas
app.use('/api/mensajes', require('./routes/mensaje'));

app.use('/orders', require('./routes/orders'));


module.exports = router;

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});