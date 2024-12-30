import { Link } from 'react-router-dom'
import "../css/Navbar.css";  

const Navbar = () => {

  return (
    <>
      <nav className="navbar-container">
        <h1 className="navbar-title">
          <Link to="/" >Movie App Project</Link>
        </h1>

        <div className="navbar-link">
            <Link to="/" className="nav-link">Beranda</Link>
            <Link to="/favorite" className="nav-link">Film Favorit</Link>
        </div>
      </nav> 
    </>
  );

};

export default Navbar;
