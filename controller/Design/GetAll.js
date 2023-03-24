const Design = require('../../models/Design.model');
const getAll = async (req, res,next) => {
    try {
      const design = await Design.find({
        
      });
      res.status(201).json(design);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = getAll;