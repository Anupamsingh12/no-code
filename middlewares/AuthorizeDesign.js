const Design = require('../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const authorizeCreator = async (req, res, next) =>{
    try{
    const userId = req.user.userId;
    const design = await Design.findOne({_id:new ObjectId(req.params.id)});
    if (design.creator.equals(userId)) {
      next();
    } else {
      return res.status(403).json({ message: 'You are not authorized to perform this action.' });
    }
}
catch(e){
    return res.status(500).json({"message":e.message})
}
  }

  module.exports=authorizeCreator
  