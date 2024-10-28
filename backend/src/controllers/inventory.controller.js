// controllers/inventoryController.js
const Inventory = require('../entity/Inventory');

exports.updateInventory = async (req, res) => {
    try {
        const { ingredientId, quantity } = req.body;
        const ingredient = await Inventory.findById(ingredientId);
        ingredient.quantity += quantity;
        await ingredient.save();
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addIngredient = async (req, res) => {
    try {
        const { name, quantity, minimumLevel } = req.body;
        const newIngredient = new Inventory({ name, quantity, minimumLevel });
        await newIngredient.save();
        res.status(201).json(newIngredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};