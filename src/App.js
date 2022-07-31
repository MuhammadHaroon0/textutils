import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark Mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode has been enabled");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Text Utils"
        Abouttxt="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about"element={<About />}>
                      </Route>

          <Route path="/" element={<TextForm
              heading="Enter text to Analyze"
              mode={mode}
              showAlert={showAlert}
            />}>
            
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
