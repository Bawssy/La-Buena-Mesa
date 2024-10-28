// services/alertService.js
const Inventory = require('../entity/Inventory');

exports.checkInventoryLevels = async () => {
    const lowStockItems = await Inventory.find({ quantity: { $lt: minimumLevel } });
    if (lowStockItems.length > 0) {
        // Notificar a los usuarios sobre los ingredientes bajos
        console.log('Alert: Low stock on some ingredients', lowStockItems);
    }
};