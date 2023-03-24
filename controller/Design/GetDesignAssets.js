const Design = require('../../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const getDesignAssets = async (req, res,next) => {
    try {
      const design = await Design.findOne({_id:new ObjectId(req.params.id)}).select({ "_id": 1, "assets": 1});
      res.status(200).json(design);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = getDesignAssets;