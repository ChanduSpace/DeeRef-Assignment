import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  console.log("Navbar - user:", user); // Debug log

  const handleLogout = () => {
    logout();
    window.location.href = "/login"; // Force reload on logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          PDF Annotator
        </Link>
      </div>
      <ul className="navbar-nav">
        {user ? (
          <>
            <li>
              <Link to="/" className="nav-link">
                My Library
              </Link>
            </li>
            <li>
              <span className="nav-link">Welcome, {user.email}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
