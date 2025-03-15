const express= require("express");
const { Login, Register, show1, FPass } = require("../control/login");
const router=express.Router();


router.post("/Register", Register);
router.post("/Login", Login);
router.get("/show1", show1);
router.post("/FPass", FPass);
module.exports = router;