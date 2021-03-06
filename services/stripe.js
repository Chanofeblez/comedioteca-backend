const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SK)

/**
 * Generar intencion de PAGO
 */

const generatePaymentIntent = async({ amount, name, payment_method }) => {
    const resPaymentIntent = await stripe.paymentIntents.create({
        amount: parseFloat(amount) * 100,
        currency: process.env.STRIPE_CURRENCY,
        payment_method_types: ['card'],
        payment_method,
        description: `Donacion echa por: ${name}`
    });
    return resPaymentIntent
}

/**
 * Confirmar pago
 */

const confirmPaymentIntent = async(id, token) => {
    const paymentIntent = await stripe.paymentIntents.confirm(
        id, { payment_method: token }
    )

    return paymentIntent
}

/**
 * Crear fuente
 */

const generatePaymentMethod = async(token) => {
    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: { token },
    });
    return paymentMethod
}


/**
 * Consultar detalle de ordne
 */

const getPaymentDetail = async(id) => {
    const detailOrder = await stripe.paymentIntents.retrieve(id);
    return detailOrder
}

module.exports = {
    generatePaymentIntent,
    getPaymentDetail,
    confirmPaymentIntent,
    generatePaymentMethod
}