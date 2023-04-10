const { Schema, model } = require("mongoose");

// create schema
const providerSchema = new Schema(
  {
    providerName: {
      type: String,
      lowercase: true,
      unique: [true, "Name must bs unique"],
      required: [true,'Please provide a name']
    },
    fsc: {
      type: Number,
      min: [0,"FSC can't be negative"]
    },
    rates: {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l:[]
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

// create model

const Provider = model("Provider", providerSchema);

module.exports = Provider;
