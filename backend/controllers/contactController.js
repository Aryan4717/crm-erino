const Contact = require("../models/contactModel");

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }
    const contact = await Contact.create({ firstName, lastName, email, phone, company, jobTitle });
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


