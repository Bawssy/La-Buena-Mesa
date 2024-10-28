// src/components/OrderList.js
import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';

const OrderList = () => {
  const { orders, modifyOrder, removeOrder } = useContext(OrderContext);
  const [editingOrder, setEditingOrder] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  const handleEdit = (order) => {
    setEditingOrder(order.id);
    setUpdateData({ ...order });
  };

  const handleUpdateChange = (field, value) => {
    setUpdateData({ ...updateData, [field]: value });
  };

  const handleUpdateSubmit = async () => {
    await modifyOrder(editingOrder, updateData);
    setEditingOrder(null);
  };

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Mesa {order.tableNumber}: {order.items.map(item => `${item.name} x ${item.quantity}`).join(', ')} - Mesero: {order.waiter}
            <button onClick={() => removeOrder(order.id)}>Eliminar Pedido</button>
            <button onClick={() => handleEdit(order)}>Editar Pedido</button>
            {editingOrder === order.id && (
              <div>
                <input
                  type="number"
                  value={updateData.tableNumber}
                  onChange={(e) => handleUpdateChange('tableNumber', e.target.value)}
                />
                <button onClick={handleUpdateSubmit}>Guardar Cambios</button>
                <button onClick={() => modifyOrder(order.id, { status: 'cancelled' })}>Cancelar Pedido</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
