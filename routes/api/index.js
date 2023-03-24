const router = require("express").Router();
const authRoutes = require("./Auth.route");
const designRoutes = require("./Design.route");
// const {validateToken} =  require('../../middlewares/JwtValidation');

router.use("/auth", authRoutes);
router.use("/design", designRoutes);



module.exports = router;