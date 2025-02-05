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
                  href="/Mission"
                >
                  About Us
                </a>
              </li>
              {/* <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Mission">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Team">
                      Team
                    </a>
                  </li>
                </ul>
              </li> */}
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
