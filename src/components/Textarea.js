import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  // uppercase function
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper cases", "success");
  };

  // Lowercase function
  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower cases", "success");
  };

  const handleCLearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared Text", "success");
  };

  // onchange function
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // state function
  const [text, setText] = useState("");
  return (
    <>
      <div className="container mb-8 ">
        <h4 id="Text-heading">{props.heading}</h4>
        <textarea
          className="form-control"
          id="mybox"
          rows="5"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#cdcccc6d" : "#eae9e9",
            color: props.mode === "dark" ? "white" : "#1f2937",
          }}
        ></textarea>
        <button
          type="button"
          className="btn btn-outline-secondary my-2 mx-2"
          disabled={text.length === 0}
          onClick={handleUPClick}
        >
          Convert to Upper case
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary my-2 mx-2"
          disabled={text.length === 0}
          onClick={handleLOClick}
        >
          Convert to Lower case
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary my-2 mx-2"
          disabled={text.length === 0}
          onClick={handleCLearClick}
        >
          Clear All
        </button>
      </div>

      <div className="container my-3">
        <h4>Your text summary</h4>
        <p>
          {/* counting the words and removing the 1st word */}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <div id="Preview-container">
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
}

Textarea.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};


