import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
     

            <div className="links">
            <Link to="/">DASHBOARD</Link>
                <Link to="/sis.materdeicollege.com/api/venues/">VENUES</Link>
            </div>
    
      </nav>
    );
}
 
export default Navbar;