// src/entity/order.entity.js
import { EntitySchema } from "typeorm";

export const Order = new EntitySchema({
  name: "Order",
  tableName: "orders",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    tableNumber: {
      type: Number,
    },
    items: {
      type: "jsonb",
    },
    specialNotes: {
      type: "text",
      nullable: true,
    },
    waiter: {
      type: "text",
    },
    status: {
      type: "text",
      default: "pending",
    },
  },
});
