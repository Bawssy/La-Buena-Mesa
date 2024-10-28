import orderService from "../services/order.service.js";

// Crear un nuevo pedido
export const createOrder = async (req, res) => {
  try {
    const { tableNumber, items, specialNotes, waiter } = req.body;
    const order = await orderService.createOrder({ tableNumber, items, specialNotes, waiter });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los pedidos
export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modificar un pedido existente
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedOrder = await orderService.updateOrder(id, updateData);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un pedido
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await orderService.deleteOrder(id);
    res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
