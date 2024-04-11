const Item = require('../../models/item');

module.exports = {
    getItemDetails, 
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

async function getItemDetails(req, res){
    const getItems = await Item.find()
    res.json(getItems)
}