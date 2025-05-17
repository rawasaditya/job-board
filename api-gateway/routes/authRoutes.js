const express = require("express");
const axios = require("axios");
const router = express.Router();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

router.post("/register", async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/register`, req.body);
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { error: "Auth service error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { error: "Auth service error" });
  }
});

module.exports = router;
