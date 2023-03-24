const Design = require('../../models/Design.model');
const { ObjectId } = require("mongoose").Types;
const createError = require("http-errors");
const formidable = require("formidable");
const uploadFile = require("../../helper/S3Upload")

const saveAsset = async (req, res,next) => {
    try {
        const {id}=req.params
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
              res.status(400);
              res.send(err);
            }
            const filesArray = Object.values(files);
            const allFileUploadedArray = await Promise.all(
              filesArray?.map(async (item) => {
                
                let location = item.filepath;
                if (!location) {
                    console.error(`Error: item.path is null or undefined for ${item.name}`);
                    return null; 
                  }
                const originalFileName = item.originalFilename;
                const fileType = item.mimetype;
                // uploads file.
                const data = await uploadFile.upload(
                  location,
                  originalFileName,
                  `Design/${id}/assets`
                );
                return {
                  url: data.Location,
                  type: fileType,
                };
              })
            );
            if (!allFileUploadedArray)
              throw createError.InternalServerError(
                "Your request could not be processed. Please contact support or try again after some time."
              );
            await Design.findOneAndUpdate(
              {_id: id},
              { $push: { assets: allFileUploadedArray[0]?.url } },
            );
            res.status(200).json({
              success: true,
              data: allFileUploadedArray[0]?.url,
            });
          });

    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  module.exports = saveAsset;