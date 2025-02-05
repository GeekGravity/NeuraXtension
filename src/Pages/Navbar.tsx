import logo from "./Pictures/logo.png";
import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Neruaxtension" width="70" height="70" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/About-Us"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item active mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Events"
                >
                  Events
                </a>
              </li>
              <li className="nav-item active mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Get-Involved"
                >
                  Get Involved
                </a>
              </li>
              <li className="nav-item active mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Contact-Us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
