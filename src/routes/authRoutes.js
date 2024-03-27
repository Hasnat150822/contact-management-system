import { Navigate, Route } from "react-router-dom";
import AddContact from "../components/pages/contacts/AddContact";
import Contacts from "../components/pages/contacts/Contacts";
import Dashboard from "../components/pages/Dashboard";
import UpdateContact from "../components/pages/contacts/UpdateContact";
import Posts from "../components/pages/posts/Posts";
import AutoCorrection from "../components/pages/hackerRank/AutoCorrection";
import SpeechToText from "../components/pages/SpeechToText";

export default [
    <Route path="/" element={<Navigate to="/dashboard" />} key="default" />,
    <Route path="/dashboard" element={<Dashboard />} key="dashboard" />,
    <Route path="/contacts" element={<Contacts />} key="contacts" />,
    <Route path="/addContact" element={<AddContact />} key="addContact" />,
    <Route path="/updateContact/:id" element={<UpdateContact />} key="updateContact" />,
    <Route path="/posts" element={<Posts />} key="posts" />,
    <Route path="/autoCorrect" element={<AutoCorrection />} key="autoCorrect" />,
    <Route path="/aws" element={<SpeechToText />} key="speechToText" />
]