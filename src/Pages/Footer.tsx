import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import logo from "./Pictures/logo.png";

function Footer() {
  return (
    <div className="container-fluid">
      <footer className="py-4 row align-items-center">
        <div className="col-lg-4 text-center text-light">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Neruaxtension" width="70" height="70" />
          </a>
        </div>
        <div className="col-lg-4 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} NeuraXtension. All Rights
            Reserved.
          </p>
          <div className="pt-3">
            <a
              href="https://www.linkedin.com/company/neuraxtension/posts/?feedView=all"
              className="text-light mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://discord.gg/8r9MahEN8f"
              className="text-light mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/sfu_neuraxtension/"
              className="text-light mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 Navigation">
          <h3>NAVIGATION</h3>
          <a href="/">
            Home
            <br />
          </a>
          <a href="/About-Us">
            About Us
            <br />
          </a>
          <a href="/Events">
            Events
            <br />
          </a>
          <a href="/Get-Involved">
            Get Involved
            <br />
          </a>
          <a href="/Contact-Us">
            Conatact Us
            <br />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
