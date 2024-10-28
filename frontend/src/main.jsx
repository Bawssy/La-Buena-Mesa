// main.jsx
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '@pages/Login';
import Home from '@pages/Home';
import Users from '@pages/Users';
import Register from '@pages/Register';
import Error404 from '@pages/Error404';
import Root from '@pages/Root';
import OrdersPage from '@pages/Order'; // Asegúrate de importar OrdersPage correctamente
import InventoryPage from '@pages/Inventory';
import ProtectedRoute from '@components/ProtectedRoute';
import { OrderProvider } from '@context/OrderContext'; // Importa el OrderProvider
import '@styles/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/users',
        element: (
          <ProtectedRoute allowedRoles={['administrador']}>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: '/orders',
        element: (
          <ProtectedRoute allowedRoles={['administrador', 'mesero']}>
            <OrdersPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/inventory', // Nueva ruta para la página de inventario
        element: (
          <ProtectedRoute allowedRoles={['administrador']}>
            <InventoryPage />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/auth',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <OrderProvider>
    <RouterProvider router={router} />
  </OrderProvider>
);
