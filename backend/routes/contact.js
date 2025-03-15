const express= require("express");
const { add, show } = require("../control/contact");
const router=express.Router();


router.post("/add", add);
router.get("/show", show);
module.exports = router;