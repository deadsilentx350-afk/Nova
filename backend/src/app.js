const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const mongoSanitize = require("express-mongo-sanitize")

const authRoutes = require("../routes/authRoutes")

const app = express()

/* ---------------- SECURITY MIDDLEWARE ---------------- */

// Secure HTTP headers
app.use(helmet())

// Prevent MongoDB injection
app.use(mongoSanitize())

// Rate limiting (protect against brute force)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max requests per IP
  message: {
    status: 429,
    message: "Too many requests. Please try again later."
  }
})

app.use(limiter)

// Enable CORS
app.use(cors())

// Parse JSON body
app.use(express.json())

/* ---------------- ROUTES ---------------- */

// Health check
app.get("/", (req, res) => {
  res.send("working")
  res.status(200).json({
    status: "success",
    message: "Server running successfully"
  })
})

// Auth routes
app.use("/auth", authRoutes)

/* ---------------- ERROR HANDLER ---------------- */

app.use((err, req, res, next) => {
  console.error(err)

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal server error"
  })
})

module.exports = app