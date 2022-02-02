import { Navigate, Route } from "react-router-dom";
import AddContact from "../components/pages/contacts/AddContact";
import Contacts from "../components/pages/contacts/Contacts";
import Dashboard from "../components/pages/Dashboard";
import UpdateContact from "../components/pages/contacts/UpdateContact";
import Posts from "../components/pages/posts/Posts";

export default [
    <Route path="/" element={<Navigate to="/dashboard" />} key="default" />,
    <Route path="/dashboard" element={<Dashboard />} key="dashboard" />,
    <Route path="/contacts" element={<Contacts />} key="contacts" />,
    <Route path="/addContact" element={<AddContact />} key="addContact" />,
    <Route path="/updateContact/:id" element={<UpdateContact />} key="updateContact" />,
    <Route path="/posts" element={<Posts />} key="posts" />
]