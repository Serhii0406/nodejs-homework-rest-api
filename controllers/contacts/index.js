const getAllContactsController = require('./getAllContactsController');
const getContactByIdController = require('./getContactByIdController');
const addContactController = require('./addContactController');
const removeContactController = require('./removeContactController');
const updateContactController = require('./updateContactController');
const toggleFavoriteController = require('./toggleFavoriteController');

module.exports = {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  updateContactController,
  toggleFavoriteController,
};