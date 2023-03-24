const Design = require('../../models/Design.model');
const searchDesign = async (req, res,next) => {
    try {
        const { q } = req.query;
      // const {title,description,price}= req.body
      // const { _id: userId, } = req.user
      const design = await Design.find({
        $or: [
            { title: { $regex: q, $options: 'i' } }, 
            { description: { $regex: q, $options: 'i' } }, 
            { tags: { $in: [q.toLowerCase()] } } 
          ]
      });
      res.status(201).json(design);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = searchDesign;