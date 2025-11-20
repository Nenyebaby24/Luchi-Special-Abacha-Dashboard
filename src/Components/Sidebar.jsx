import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <h2 className="logo">Luchi Dashboard</h2>

      <ul>
        <li><NavLink to="/" onClick={() => setSidebarOpen(false)}>Dashboard</NavLink></li>
        <li><NavLink to="/orders" onClick={() => setSidebarOpen(false)}>Orders</NavLink></li>
        <li><NavLink to="/products" onClick={() => setSidebarOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/customers" onClick={() => setSidebarOpen(false)}>Customers</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
