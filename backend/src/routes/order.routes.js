import express from "express";
import { createOrder, getAllOrders, updateOrder, deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
