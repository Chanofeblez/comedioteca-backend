const express = require('express');
const router = express.Router();

const { getItem } = require('../controllers/orders/getItem');
const { postItem } = require('../controllers/orders/postItem');
const { updateItem } = require('../controllers/orders/updateItem');
const { checkItem } = require('../controllers/orders/checkItem');

//Generar una nueva orden
router.post('/', postItem);

//Obtener el detalle de una orden
router.get('/:id', getItem);

//Generar intencion de pago
router.patch('/:id', updateItem);

//Confirmar estatus del pago
router.patch('/confirm/:id', checkItem);

module.exports = router;