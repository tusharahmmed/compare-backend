const { Schema, model } = require("mongoose");

const DollarSchema = new Schema(
  {
    exchange_rate: {
      type: Number,
      min: [0,"Rate can't be negative."]
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const DollarExchange = model("dollar_rate", DollarSchema);

module.exports = DollarExchange;
