const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String },
        role: { type: String, default: "user", enum: ["user", "admin"] },
        gender: {
          type: String,
          trim: true,
          valueType: "String",
        },
        password:{ type: String, required: true }
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
      })
    const User = model("User", userSchema, "user");
    module.exports = User;
    