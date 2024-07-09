const mercadopago = require("mercadopago");

const mercadopagoCtrl = {}

mercadopagoCtrl.createPreference = async(req, res) => {
    var client = new mercadopago.MercadoPagoConfig({ 
        accessToken: 'APP_USR-1182613218721804-070902-d698eb10ae39fee5d57db8564882b40a-1894150556', 
        options: { timeout: 5000, idempotencyKey: 'abc' } 
    });

    const body = {
        items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:4200/home",
			"failure": "http://localhost:4200/home",
			"pending": "http://localhost:4200/home"
		},
		auto_return: "approved",
    }

    const preference = new mercadopago.Preference(client);
    var preferenceCreate = await preference.create({ body });

    res.status(200).json(preferenceCreate);
}

module.exports = mercadopagoCtrl;