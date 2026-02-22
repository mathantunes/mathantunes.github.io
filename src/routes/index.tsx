import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {
  return (
    <AnimatePresence>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="projects" element={<Home />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  );
}