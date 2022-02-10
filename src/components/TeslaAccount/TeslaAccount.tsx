import { Close, Menu } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/userSlice";
import Car from "../Car/Car";
import "./TeslaAccount.css";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.userSlice.user);

  const logoutOfApp = () => {
    dispatch(logout());
  };

  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            <img src={"images/TeslaLogoHD.png"} alt="Tesla" />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link to="" onClick={logoutOfApp}>
            Log out
          </Link>

          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Close className="teslaAccount__closeMenu" />
            ) : (
              <Menu />
            )}
          </div>
        </div>
      </div>

      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName} + "'s"</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="">Home</Link>
          <Link to="">Account</Link>
          <Link to="">History</Link>
          <Link to="" onClick={logoutOfApp}>
            Sign out
          </Link>
        </div>
      </div>

      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
};

export default TeslaAccount;
