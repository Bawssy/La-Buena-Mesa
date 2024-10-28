import React, { useState, useEffect } from 'react';
import { getAllIngredients, createIngredient, deleteIngredient } from '../services/ingredient.service'; 

const InventoryPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({ name: '', quantity: 0, unit: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const data = await getAllIngredients();
        setIngredients(data);
      } catch (error) {
        setError('Error al obtener los ingredientes.');
        console.error(error);
      }
    };
    fetchIngredients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseFloat(value) : value,
    }));
  };

  const handleAddIngredient = async () => {
    if (!newIngredient.name || newIngredient.quantity <= 0 || !newIngredient.unit) {
      alert('Por favor, rellene todos los campos correctamente.');
      return;
    }
    
    try {
      const ingredient = await createIngredient(newIngredient);
      setIngredients(prev => [...prev, ingredient]);
      setNewIngredient({ name: '', quantity: 0, unit: '' });
    } catch (error) {
      setError('Error al agregar el ingrediente.');
      console.error(error);
    }
  };

  const handleDeleteIngredient = async (id) => {
    try {
      await deleteIngredient(id);
      setIngredients(prev => prev.filter(ingredient => ingredient.id !== id));
    } catch (error) {
      setError('Error al eliminar el ingrediente.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Inventario de Ingredientes</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="ingredient-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newIngredient.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={newIngredient.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="unit"
          placeholder="Unidad (Ej. gramos, litros)"
          value={newIngredient.unit}
          onChange={handleInputChange}
        />
        <button onClick={handleAddIngredient}>Agregar Ingrediente</button>
      </div>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className="ingredient-item">
            {ingredient.name} - {ingredient.quantity} {ingredient.unit}
            <button onClick={() => handleDeleteIngredient(ingredient.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;
