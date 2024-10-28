// src/services/ingredient.service.js
import { AppDataSource } from "../config/configDb.js";
import { Ingredient } from "../entity/ingredient.entity.js";

// Crear un nuevo ingrediente
export const createIngredient = async ({ name, quantity, unit }) => {
  try {
    const ingredientRepository = AppDataSource.getRepository(Ingredient);
    const newIngredient = ingredientRepository.create({ name, quantity, unit });
    return await ingredientRepository.save(newIngredient);
  } catch (error) {
    throw new Error("Error al crear el ingrediente: " + error.message);
  }
};

// Obtener todos los ingredientes
export const getAllIngredients = async () => {
  try {
    const ingredientRepository = AppDataSource.getRepository(Ingredient);
    return await ingredientRepository.find();
  } catch (error) {
    throw new Error("Error al obtener los ingredientes: " + error.message);
  }
};

// Actualizar un ingrediente existente
export const updateIngredient = async (id, updateData) => {
  try {
    const ingredientRepository = AppDataSource.getRepository(Ingredient);
    const ingredient = await ingredientRepository.findOneBy({ id });
    if (!ingredient) {
      throw new Error("Ingrediente no encontrado");
    }
    Object.assign(ingredient, updateData);
    return await ingredientRepository.save(ingredient);
  } catch (error) {
    throw new Error("Error al actualizar el ingrediente: " + error.message);
  }
};

// Eliminar un ingrediente
export const deleteIngredient = async (id) => {
  try {
    const ingredientRepository = AppDataSource.getRepository(Ingredient);
    const ingredient = await ingredientRepository.findOneBy({ id });
    if (!ingredient) {
      throw new Error("Ingrediente no encontrado");
    }
    return await ingredientRepository.remove(ingredient);
  } catch (error) {
    throw new Error("Error al eliminar el ingrediente: " + error.message);
  }
};
