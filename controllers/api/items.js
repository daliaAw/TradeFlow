const Item = require('../../models/item');

module.exports = {getItemDetails}

async function getItemDetails(req, res, next) {
    try {
        const { _id } = req.params;
        const item = await Item.findById(_id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(400).json(err);
    }
}