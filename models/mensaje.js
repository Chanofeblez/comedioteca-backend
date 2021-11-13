const { Schema, model } = require('mongoose');

const MensajeSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mensaje: {
        type: String
    },
});


MensajeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    return object;
})


module.exports = model('Mensaje', MensajeSchema);