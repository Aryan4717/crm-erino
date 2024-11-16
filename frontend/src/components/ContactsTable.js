import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";
import axios from "../services/api";

const ContactsTable = ({ fetchContacts, contacts }) => {
  const handleDelete = async (id) => {
    await axios.delete(`/contacts/${id}`);
    fetchContacts();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map((head) => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              {Object.values(contact).slice(1).map((val, i) => (
                <TableCell key={i}>{val}</TableCell>
              ))}
              <TableCell>
                <Button color="error" onClick={() => handleDelete(contact._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;


