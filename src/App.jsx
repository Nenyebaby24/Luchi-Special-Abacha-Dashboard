import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";

import "./styles/global.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard setSidebarOpen={setSidebarOpen} />} />
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
