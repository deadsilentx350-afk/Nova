const authMiddleware = require("../middleware/authMiddleware.js")
const express = require("express")
const router = express.Router()

const loginUser = require("../controllers/loginController.js");
const registerUser = require("../controllers/registerController.js");

router.post("/register",registerUser)
router.get("/register", (req,res)=>{
  res.send("register here ")
})
router.post("/login", loginUser)

module.exports = router