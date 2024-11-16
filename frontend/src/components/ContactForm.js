import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "../services/api";

const ContactForm = ({ fetchContacts }) => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/contacts", formData);
    fetchContacts();
    setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      {["firstName", "lastName", "email", "phone", "company", "jobTitle"].map((field) => (
        <TextField key={field} name={field} label={field} value={formData[field]} onChange={handleChange} fullWidth margin="normal" />
      ))}
      <Button type="submit" variant="contained" color="primary">Add Contact</Button>
    </Box>
  );
};

export default ContactForm;


