// src/components/CreateOrder.js
import React, { useState, useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const CreateOrder = () => {
  const { addOrder } = useContext(OrderContext);
  const [tableNumber, setTableNumber] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 1 }]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [waiter, setWaiter] = useState('');

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ tableNumber, items, specialNotes, waiter });
    setTableNumber('');
    setItems([{ name: '', quantity: 1 }]);
    setSpecialNotes('');
    setWaiter('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Número de Mesa:
          <input
            type="number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
          />
        </label>
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <label>
            Plato/Bebida:
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
              required
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
              required
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Agregar Item
      </button>
      <div>
        <label>
          Notas Especiales:
          <input
            type="text"
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Mesero:
          <input
            type="text"
            value={waiter}
            onChange={(e) => setWaiter(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Crear Pedido</button>
    </form>
  );
};

export default CreateOrder;
