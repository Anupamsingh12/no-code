const Design = require('../../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const updateDesign = async (req, res,next) => {
    try {
      
      const {title,description,price}= req.body
      const design = await Design.findOneAndUpdate(
        {_id:new ObjectId(req.params.id)},
        {title,description,price},
        {new:true}
        );
      res.status(200).json(design);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = updateDesign;