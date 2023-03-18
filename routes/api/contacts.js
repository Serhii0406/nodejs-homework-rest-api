const express = require('express')

const router = express.Router();

const { getAllContacts, getContactById, addContact, removeContact, updateContact, toggleFavorite } = require('../../controllers/contactsController')

const { validateContact } = require("../../validation/contactsValidation");

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateContact, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateContact, updateContact);

router.patch("/:contactId/favorite", toggleFavorite);

module.exports = router;
