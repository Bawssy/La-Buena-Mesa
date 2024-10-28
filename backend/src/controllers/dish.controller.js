// controllers/dishController.js
const Dish = require('../entity/Dish');


exports.addDish = async (req, res) => {
    try {
        const { name, ingredients, price, tags } = req.body;
        const newDish = new Dish({ name, ingredients, price, tags });
        await newDish.save();
        res.status(201).json(newDish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDish = await Dish.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedDish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteDish = async (req, res) => {
    try {
        const { id } = req.params;
        await Dish.findByIdAndDelete(id);
        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};