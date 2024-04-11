const Item = require('../../models/item');

module.exports = {

    getItemDetails,
    getHomePageItems
    create

}

async function create(req, res){
    try {
        const createItem = await Item.create({...req.body, user: req.user._id})
        console.log(Item)
        res.json(createItem)
    }
    catch (error) {
        console.log(error)
    }
}

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

async function getHomePageItems(req, res) {
    const homeCategories = ['Technology and Electronics', 'Fashion and Apparel', 'Health and Wellness'];
    const categoryItems = [];

    try {
        for (const category of homeCategories) {
            const items = await Item.find({ category: category });
            categoryItems.push({category:category, items:[...items]})
        }
        console.log(categoryItems);
        res.json(categoryItems);
    } catch (err) {
        console.log(err)
    }
