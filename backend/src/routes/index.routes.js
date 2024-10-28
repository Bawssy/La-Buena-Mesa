"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import orderRoutes from "./order.routes.js"
import ingredientRoutes from "./ingredient.routes.js";

const router = Router();

router
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/orders", orderRoutes)
    .use("/ingredients", ingredientRoutes);

export default router;