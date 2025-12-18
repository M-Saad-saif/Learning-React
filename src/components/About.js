import React from "react";

export default function About(props) {
  return (
    <div>
      <>
        <div className="About-container">
          <h2>About Us</h2>
          <div className="About-para">
            <p
              style={{
                backgroundColor:
                  props.mode === "dark" ? "#cbcbcbf8" : "#ccc7c7",
                color: props.mode === "dark" ? "black" : "#000000ff",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusamus aliquid, voluptas necessitatibus ea numquam voluptates,
              cumque, incidunt eum cupiditate repellendus? Repellat eligendi
              nostrum necessitatibus quo fugiat? Aliquid, fugiat placeat! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid
              molestiae quisquam nisi necessitatibus, tenetur accusantium qui
              voluptatem blanditiis commodi eveniet cupiditate dignissimos,
              voluptatum pariatur? Quis amet possimus aperiam blanditiis!
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
