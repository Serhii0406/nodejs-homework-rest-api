const loginController = require("./loginController");
const logoutController = require("./logoutController");
const registerController = require("./registerController");
const currentUserController = require("./currentUserController");
const updateSubscriptionController = require("./updateSubscriptionController");
const updateAvatarController = require("./updateAvatarController");

module.exports = {
  logoutController,
  loginController,
  registerController,
  currentUserController,
  updateSubscriptionController,
  updateAvatarController,
};