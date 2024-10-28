import { AppDataSource } from "../config/configDb.js";
import { Order } from "../entity/order.entity.js";

// Crear un nuevo pedido
const createOrder = async ({ tableNumber, items, specialNotes, waiter }) => {
  try {
    const orderRepository = AppDataSource.getRepository(Order);
    const newOrder = orderRepository.create({
      tableNumber,
      items,
      specialNotes,
      waiter,
    });
    return await orderRepository.save(newOrder);
  } catch (error) {
    throw new Error("Error al crear el pedido: " + error.message);
  }
};

// Obtener todos los pedidos
const getAllOrders = async () => {
  try {
    const orderRepository = AppDataSource.getRepository(Order);
    return await orderRepository.find();
  } catch (error) {
    throw new Error("Error al obtener los pedidos: " + error.message);
  }
};

// Modificar un pedido existente
const updateOrder = async (id, updateData) => {
  try {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error("Pedido no encontrado");
    }
    Object.assign(order, updateData);
    return await orderRepository.save(order);
  } catch (error) {
    throw new Error("Error al actualizar el pedido: " + error.message);
  }
};

// Eliminar un pedido
const deleteOrder = async (id) => {
  try {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error("Pedido no encontrado");
    }
    return await orderRepository.remove(order);
  } catch (error) {
    throw new Error("Error al eliminar el pedido: " + error.message);
  }
};

// Cancelar un pedido cambiando el estado a "cancelled"
const cancelOrder = async (id) => {
  try {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOneBy({ id });
    if (!order) {
      throw new Error("Pedido no encontrado");
    }
    order.status = "cancelled";
    return await orderRepository.save(order);
  } catch (error) {
    throw new Error("Error al cancelar el pedido: " + error.message);
  }
};

// Exportar todas las funciones como una exportación por defecto
export default {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
  cancelOrder
};
