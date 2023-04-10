const { Schema, model } = require("mongoose");

const DhlZoneSchema = new Schema(
  {
    country: {
      type: String,
      required: [true, "Contry name is required"],
      unique: [true, "Country name can't be same"],
      lowercase: true
    },
    zone_id: {
      type: String,
      lowercase: true,
      required: [true,"Zone id is required"]
    },
    status: {
      type: String,
      default: 'enabled',
      lowercase: true,
      enum: {
        values: ["enabled", "disabled"],
        message: "status can't be {VALUE}"
      }
    }
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const DhlZone = model("dhl_zone", DhlZoneSchema);

module.exports = DhlZone;
