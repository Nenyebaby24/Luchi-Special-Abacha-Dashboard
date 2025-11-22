import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";

import "./Styles/global.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      {/* BACK TO PORTFOLIO BUTTON */}
      <a
        href="https://your-portfolio-url.com"   // <-- replace with your real portfolio link
        style={{
          display: "inline-block",
          margin: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#333",
        }}
      >
        ← Back to Portfolio
      </a>

      <div className="container">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Dashboard setSidebarOpen={setSidebarOpen} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

