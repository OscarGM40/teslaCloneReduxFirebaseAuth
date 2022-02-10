import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";
import { useAppSelector } from "./app/hooks";
import Signup from "./components/Signup/Signup";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const user = useAppSelector((state) => state.userSlice.user);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          ></Route>
          {!!!user ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Navigate to="/teslaaccount" replace />
          )}
          {!!!user ? (
            <Route path="/signup" element={<Signup />} />
          ) : (
            <Navigate to="/login" replace />
          )}
        
          <Route
            path="/teslaaccount"
            element={
              !user ? (
                <>
                  <TeslaAccount
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
