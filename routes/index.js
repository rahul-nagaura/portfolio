const express = require("express");
const { handleSendEmailController } = require("../controllers/index");
const {handleSendMail } = require("../mialSender");
const router = express.Router();

router.post("/sendEmail", handleSendMail);

module.exports = router;

