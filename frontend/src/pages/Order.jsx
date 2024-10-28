import React from 'react';
import CreateOrder from '../components/CreateOrder';
import OrderList from '../components/OrderList';

const OrdersPage = () => {
  return (
    <div>
      <h1>Gestión de Pedidos</h1>
      <CreateOrder />
      <OrderList />
    </div>
  );
};

export default OrdersPage;
