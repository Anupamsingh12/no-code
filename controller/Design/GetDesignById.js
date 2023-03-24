const Design = require('../../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const getDesignById = async (req, res,next) => {
    try {
      const design = await Design.find({_id:new ObjectId(req.params.id)});
      res.status(200).json(design);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = getDesignById;