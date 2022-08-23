import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={ ({isActive})=> `nav-link ${isActive ? "active" : ""}` }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={ ({isActive})=> `nav-link ${isActive ? "active" : ""}` }
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={ ({isActive})=> `nav-link ${isActive ? "active" : ""}` }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
