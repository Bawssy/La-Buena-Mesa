import { EntitySchema } from "typeorm";

export const Ingredient = new EntitySchema({
  name: "Ingredient",
  tableName: "ingredients",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: "text",
      unique: true,
    },
    quantity: {
      type: "float",
    },
    unit: {
      type: "text",
    },
  },
});
