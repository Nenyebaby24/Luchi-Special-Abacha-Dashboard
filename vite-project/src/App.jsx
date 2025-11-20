import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";


import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

