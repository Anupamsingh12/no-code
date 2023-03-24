const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
//   id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  tags: { type: Array, required: false },
  assets: { type: Array, required: false },
},
{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const design = mongoose.model('Design', designSchema);

module.exports = design;
