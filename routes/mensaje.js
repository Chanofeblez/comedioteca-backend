/*
    Ruta: /api/mensaje
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { getMensajes, crearMensajes } = require('../controllers/mensajes')

const router = Router();


router.get('/', getMensajes);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Formato incorrecto del email').isEmail(),
        validarCampos,
    ],
    crearMensajes);


module.exports = router;