import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been Enable", "success ");
    } else {
      setMode("light");
      showAlert("Light mode has been Enable", "success ");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#1f2937";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1f2937";
    }
  }, [mode]);

  return (
    <Router>
      <Navbar
        title="LearnReact"
        HomeTitle="Home"
        AboutTitle="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert}/>

      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <Textarea
                showAlert={showAlert}
                heading="Enter your text here👇"
                mode={mode}
              />
            }
          />

          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
