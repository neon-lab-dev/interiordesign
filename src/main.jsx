import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import NavHome from "./Components/Nav/NavHome.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import App from "./App.jsx";
import "bootstrap";
import "./index.css";
import "./styles/custom.scss";
import { Toaster } from "sonner";

// Component to manage conditional Nav rendering
const ConditionalNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Adjust this path if your home route is different
  return isHome ? <NavHome /> : <Nav />;
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConditionalNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<App />} />
    </Routes>
    <Footer />
    <Toaster position="top-center" />
  </BrowserRouter>
);
