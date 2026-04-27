import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../img/react.png";

const Navbar = () => {
  return (
    <nav className="navWrapper">
    
        <div> 
        <Link to="/"> 
        <img src={logo} alt="Logo" className="logo" />
        </Link>
        </div>
        <ul className="navigationWrapper">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/personnel">Personnel</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
     
    </nav>
  );
};

export default Navbar;