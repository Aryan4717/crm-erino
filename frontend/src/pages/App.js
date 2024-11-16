import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import ContactForm from "../components/ContactForm";
import ContactsTable from "../components/ContactsTable";
import axios from "../services/api";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const { data } = await axios.get("/contacts");
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container>
      <h1>Contact Management</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactsTable fetchContacts={fetchContacts} contacts={contacts} />
    </Container>
  );
};

export default App;





