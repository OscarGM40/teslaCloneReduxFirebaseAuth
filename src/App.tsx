import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {

  const [ isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <Router>
      <div className="App">
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} />
        {/* HeaderBlock */}
      </div>
    </Router>
  );
}

export default App;
