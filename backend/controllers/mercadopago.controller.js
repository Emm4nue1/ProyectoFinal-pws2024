// import {MercadoPagoConfig, Payment, Preference} from 'mercadopago';

// const mercadopagoCtrl = {}

// function getClient(access_token){
//     const client = new MercadoPagoConfig({ access_token });
//     return client;
// }

// mercadopagoCtrl.createPreference = async(req, res) => {
//     const client = getClient(req.access_token);

//     const body = {
//         items: [
// 			{
// 				title: req.body.description,
// 				unit_price: Number(req.body.price),
// 				quantity: Number(req.body.quantity),
// 			}
// 		],
// 		back_urls: {
// 			"success": "http://localhost:4200/home",
// 			"failure": "http://localhost:4200/home",
// 			"pending": "http://localhost:4200/home"
// 		},
// 		auto_return: "approved",
//     }

//     const preference = new Preference(client);
//     var preferenceCreate = await preference.create(body);

//     console.log(preferenceCreate);
//     //return json(preferenceCreate);
// }

// mercadopagoCtrl.payment = async (req, res) => {
//     const client = getClient(req.access_token);
//     const payment = new Payment(client);

//     const body = {
//         transaction_amount: 12.34,
//         description: '<DESCRIPTION>',
//         payment_method_id: '<PAYMENT_METHOD_ID>',
//         payer: {
//             email: '<EMAIL>'
//         },
//     };

//     const requestOptions = {
//         idempotencyKey: 'abc',
//     };

    
//     var paymentCreate = await payment.create({ body, requestOptions }).then(console.log).catch(console.log);    
// }

// module.exports = mercadopagoCtrl;