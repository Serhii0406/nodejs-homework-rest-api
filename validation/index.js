const {validateContact} = require("./contactValidation");
const {validateAuth,validateSubscription} = require("./authValidation");

module.exports = {
  validateAuth,validateSubscription,
  validateContact,
};