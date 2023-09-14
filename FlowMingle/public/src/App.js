import React from "react"; 
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import { About } from "./pages/About";
import SetAvatar from "./components/SetAvatar";
import { Contacts } from "./pages/Contacts"
import Dashboard from "./components/Dashboard";
import News from "./components/news/News";
import CreateNews from "./components/news/CreateNews";
import EditNews from "./components/news/EditNews";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="createNews" element={<CreateNews />} />
        <Route path="editNews/:id" element={<EditNews />} />
      </Routes>
    </BrowserRouter>
  );
}
