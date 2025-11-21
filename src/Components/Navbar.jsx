import "../Sgityles/navbar.css";
import { MdMenu } from "react-icons/md";

function Navbar({ setSidebarOpen }) {
  return (
    <div className="navbar">
      <button className="hamburger" onClick={() => setSidebarOpen(true)}>
        <MdMenu size={28} />
      </button>

      <h3>Dashboard</h3>

      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default Navbar;
