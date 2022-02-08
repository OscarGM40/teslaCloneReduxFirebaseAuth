import { Close,Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";


import './Header.css';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const Header = ({isMenuOpen,setIsMenuOpen}: Props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src={"images/TeslaLogoHD.png"}
            alt=""
          />
        </Link>
      </div>

      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>

      <div className="header__right">
        <Link to="/" className={isMenuOpen ? "header__link--hidden" : ""}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen ? "header__link--hidden" : ""}>
          Tesla Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
