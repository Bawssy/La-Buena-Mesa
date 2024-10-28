// src/controllers/ingredient.controller.js
import * as ingredientService from "../services/ingredient.service.js";

export const createIngredient = async (req, res) => {
  try {
    const { name, quantity, unit } = req.body;
    const ingredient = await ingredientService.createIngredient({ name, quantity, unit });
    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await ingredientService.getAllIngredients();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedIngredient = await ingredientService.updateIngredient(id, updateData);
    res.status(200).json(updatedIngredient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    await ingredientService.deleteIngredient(id);
    res.status(200).json({ message: "Ingrediente eliminado exitosamente." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
