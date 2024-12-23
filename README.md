# **Contact Management System**

A simple contact management system that allows users to add, view, edit, and delete contact information. Built with a React frontend and a Node.js backend, this application is connected to a MongoDB database.  

---

## **Setup Instructions**

### **Backend Setup**

1. **Navigate to the backend directory:**  
   `cd backend`
   

2. **Install dependencies:**  
   `npm install`
   

3. **Create a `.env` file in the `backend` directory with the following content:**  
   `MONGO_URI=<your-mongodb-connection-string>`
   `PORT=5001`
   

4. **Start the backend server:**  
   `node app.js`
   

---

### **Frontend Setup**

1. **Go back to the root directory and navigate to the frontend directory:**  
   `cd ..`
   `cd frontend`
   

2. **Install dependencies:**  
   `npm install`
   

3. **Start the React app:**  
   `npm start`
     

4. **Access the frontend at:**  
   `http://localhost:3000`

---

## **Features**

- **Add New Contacts:** Create new contacts with essential details (name, email, phone, company, job title).  
- **View Contacts:** See a list of all saved contacts in a table.  
- **Edit Contacts:** Update any contact's details.  
- **Delete Contacts:** Remove outdated or unnecessary contacts.  
