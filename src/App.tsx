import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Signup from "./components/Signup/Signup";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const user = useAppSelector((state) => state.userSlice.user);
  const auth = getAuth(firebaseApp);
  const dispatch = useAppDispatch();

/* importante,vamos a suscribirnos al state de la auth.Si el usuario esta autenticado y entra a la app */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in already
        dispatch(login({
          email: user.email,
          displayName: user.displayName || JSON.parse(localStorage.getItem('user')!) || '',
          uid: user.uid,
        }));
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, []);

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
     
           <Route
            path="/login"
            element={ !user ? ( <Login />) : ( <Navigate to="/teslaaccount" replace />) }
          />
           <Route
            path="/signup"
            element={ !user ? ( <Signup />) : ( <Navigate to="/login" replace />) }
          />

          <Route
            path="/teslaaccount"
            element={
              user ? (
                <>
                  <TeslaAccount
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
