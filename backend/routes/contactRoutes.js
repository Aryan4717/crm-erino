const express = require("express");
const { getContacts, addContact, updateContact, deleteContact } = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts).post(addContact);
router.route("/:id").put(updateContact).delete(deleteContact);

module.exports = router;


