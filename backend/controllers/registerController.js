require('dotenv').config()
const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
  try {

    const { name, dob, phonenumber, email, password } = req.body
    
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      })
    }
    
   const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = new User({
      name,
      dob,
      phonenumber,
      email,
      hashedPassword
    })

    await user.save()
    
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(201).json({
      message: "User registered successfully",
      token
    })

  } catch (err) {
    console.error("Error:", err)
    res.status(500).json({ message: "Server error" })
  }
}



module.exports = registerUser