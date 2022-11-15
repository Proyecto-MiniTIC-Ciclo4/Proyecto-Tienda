const saleSchema = require('../models/sale');

module.exports = {
    createSale: async (req, res) => {
        const sale = await saleSchema(req.body);
        sale
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
}