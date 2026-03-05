require("dotenv").config();

const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri:
    process.env.MONGODB_URI || "mongodb://localhost:27017/sports-management",
  jwtSecret: process.env.JWT_SECRET || "fallback-secret-key",
  jwtExpire: process.env.JWT_EXPIRE || "7d",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
};

module.exports = config;
