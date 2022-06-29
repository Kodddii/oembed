require("dotenv").config();
const express = require("express");
const router = express.Router();
const {oembed} = require("../controller/oembedController")
router.get('/oembed/',oembed)
module.exports = router;