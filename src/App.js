import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
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

  const appStyle = {
    color: mode === "dark" ? "white" : "#1f2937",
    backgroundColor: mode === "dark" ? "#1f2937" : "white",
  };

  return (
    <div style={appStyle}>
      <Navbar
        title="LearnReact"
        HomeTitle="Home"
        AboutTitle="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-5">
        <Textarea showAlert={showAlert} heading="Enter your text here👇" mode={mode} />
      </div>
    </div>
  );
}

export default App;
