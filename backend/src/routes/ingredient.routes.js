import express from "express";
import {
  createIngredient,
  getAllIngredients,
  updateIngredient,
  deleteIngredient,
} from "../controllers/ingredient.controller.js";

const router = express.Router();

router.post("/", createIngredient);
router.get("/", getAllIngredients);
router.patch("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

export default router;
