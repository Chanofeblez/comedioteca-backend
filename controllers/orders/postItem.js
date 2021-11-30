const orders = require('../../models/orders');

//Generar nueva orden y guardar en base de datos

const postItem = async(req, res) => {
    try {
        const { amount, name } = req.body;
        const orderRes = await orders.create({
            name,
            amount
        })

        res.send({ data: orderRes })
    } catch (e) {
        res.status(500);
        res.send({ error: 'Algo ocurrio ' })
    }
}

module.exports = { postItem };