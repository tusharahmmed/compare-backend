const { Schema, model } = require("mongoose");

// costsSchema
const CostSchema = new Schema(
  {
    official_cost: {
      type: Number,
      min: [0,"Official cost can't be negative."]
    },
    hr_cost: {
      type: Number,
      min: [0,"HR cost can't be negative."]
    },
    transport_cost: {
      type: Number,
      min: [0,"Transport cost can't be negative."]
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const CostCollection = model("cost", CostSchema);

module.exports = CostCollection;
