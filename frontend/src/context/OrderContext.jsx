// src/context/OrderContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getAllOrders, createOrder, updateOrder, deleteOrder } from '../services/order.service';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getAllOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };
    fetchOrders();
  }, []);

  const addOrder = async (orderData) => {
    try {
      const newOrder = await createOrder(orderData);
      setOrders([...orders, newOrder]);
    } catch (error) {
      console.error('Error al agregar el pedido:', error);
    }
  };

  const modifyOrder = async (id, updateData) => {
    try {
      const updatedOrder = await updateOrder(id, updateData);
      setOrders(orders.map(order => (order.id === id ? updatedOrder : order)));
    } catch (error) {
      console.error('Error al actualizar el pedido:', error);
    }
  };

  const removeOrder = async (id) => {
    try {
      await deleteOrder(id);
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.error('Error al eliminar el pedido:', error);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, modifyOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
