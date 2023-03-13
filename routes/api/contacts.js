const express = require('express')

const router = express.Router();

const {getContact, getContactById, createContact, deleteContact, updateContact} = require('../../controllers/contactsController')

router.get("/", getContact);

router.get("/:contactId", getContactById);

router.post("/", createContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", updateContact);

module.exports = router;
