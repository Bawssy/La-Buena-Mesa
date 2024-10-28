// controllers/supplierController.js
const SupplierOrder = require('../entity/SupplierOrder');

exports.generateOrder = async (req, res) => {
    try {
        const order = new SupplierOrder(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await SupplierOrder.findByIdAndUpdate(id, { status: 'Approved' }, { new: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};