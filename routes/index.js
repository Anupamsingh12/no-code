const router = require("express").Router();
const createError = require("http-errors");

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports=router