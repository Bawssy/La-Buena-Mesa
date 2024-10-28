// src/services/ingredient.service.js
import axios from 'axios';

// Configuración básica de Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Asegúrate de que este URL sea el correcto para tu API backend
});

// Obtener todos los ingredientes
export const getAllIngredients = () => {
  return api.get('/ingredients').then(response => response.data);
};

// Crear un nuevo ingrediente
export const createIngredient = (ingredientData) => {
  return api.post('/ingredients', ingredientData).then(response => response.data);
};

// Actualizar un ingrediente existente
export const updateIngredient = (id, updateData) => {
  return api.patch(`/ingredients/${id}`, updateData).then(response => response.data);
};

// Eliminar un ingrediente
export const deleteIngredient = (id) => {
  return api.delete(`/ingredients/${id}`).then(response => response.data);
};