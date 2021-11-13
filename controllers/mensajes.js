const Mensaje = require('../models/mensaje');
const { response } = require('express');


const getMensajes = async(req, res) => {

    const mensajes = await Mensaje.find();

    res.json({
        ok: true,
        mensajes
    });
}

const crearMensajes = async(req, res = response) => {

    const { nombre, email, mensaje } = req.body;

    try {

        const mensajes = new Mensaje(req.body);
        await mensajes.save();

        res.json({
            ok: true,
            mensajes
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}


module.exports = {
    getMensajes,
    crearMensajes,
}