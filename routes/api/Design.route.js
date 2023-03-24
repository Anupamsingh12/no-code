const express = require('express');
const router = express.Router();
const Design = require('../../models/Design.model');

//importing middlewares.
const validateToken=require('../../middlewares/JwtValidation')
const authorizeCreator=require('../../middlewares/AuthorizeDesign')


// importing controllers...
const saveDesign = require("../../controller/Design/SaveDesign")
const getAll = require("../../controller/Design/getAll")
const getDesignById = require("../../controller/Design/GetDesignById")
const removeDesign = require("../../controller/Design/RemoveDesign")
const updateDesign = require("../../controller/Design/UpdateDesign")
const uploadAsset = require("../../controller/Design/UploadAsset")
const getDesignAssets = require("../../controller/Design/GetDesignAssets")

// defining routes.
router.post('/',validateToken,saveDesign);
router.get('/all',getAll );
router.get('/search',getAll );
router.put('/:id', validateToken,authorizeCreator,updateDesign);
router.delete('/:id',validateToken,authorizeCreator,removeDesign);
router.get('/:id', getDesignById);
router.post('/asset/:id',validateToken, authorizeCreator,uploadAsset);
router.get('/asset/:id', getDesignAssets);


module.exports = router;
