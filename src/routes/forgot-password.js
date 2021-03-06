const router = require("express").Router();

// Import account handler
const accountController = require("../controllers/account");

const validateHeader = require("../validations/header");
const validatePhoneNumber = require("../validations/phone-number");
const validatePassword = require("../validations/password");

router.post(
  "/forgot-password",
  validateHeader,
  validatePhoneNumber,
  validatePassword,
  accountController.resetPassword
);

module.exports = router;
