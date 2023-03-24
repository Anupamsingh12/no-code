const Design = require('../../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const saveDesign = async (req, res,next) => {
    try {
      const {title,description,price,tags}= req.body
      const {  userId } = req.user
      const design = new Design({
        title,
        description,
        creator:new ObjectId(userId),
        price,
        tags
      });
  
      const newDesign = await design.save();
      res.status(201).json(newDesign);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = saveDesign;