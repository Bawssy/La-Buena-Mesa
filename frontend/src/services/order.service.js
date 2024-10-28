// src/services/orderService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los pedidos:', error);
    throw error;
  }
};

export const updateOrder = async (id, updateData) => {
  try {
    const response = await api.patch(`/orders/${id}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el pedido:', error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    await api.delete(`/orders/${id}`);
  } catch (error) {
    console.error('Error al eliminar el pedido:', error);
    throw error;
  }
};
