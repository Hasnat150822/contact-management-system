import { Navigate, Route } from "react-router-dom";
import AddContact from "../pages/AddContact";
import ContactList from "../pages/ContactList";
import Dashboard from "../pages/Dashboard";
import UpdateContact from "../pages/UpdateContact";

export default [
    <Route path="/" element={<Navigate to="/dashboard" />} key="default" />,
    <Route path="/dashboard" element={<Dashboard />} key="dashboard" />,
    <Route path="/contacts" element={<ContactList />} key="contact" />,
    <Route path="/addContact" element={<AddContact />} key="addContact" />,
    <Route path="/updateContact/:id" element={<UpdateContact />} key="updateContact" />
]