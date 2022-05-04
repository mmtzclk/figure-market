import React from "react";

function AbacusPrice({ title }) {
  const words = title.split("");
  if (words.length === 2) {
    words.unshift("0");
  }
  if (words.length === 1) {
    words.unshift("0", "0");
  }

  return (
    <div>
      <div
        style={{ fontSize: "3.5vmax", lineHeight: "4vmax" }}
        className="p-ext"
      >
        $
      </div>
      <div style={{ width: "3vmax", height: "4vmax" }} className="ab-wrap abf">
        <div
          style={{ width: "3vmax", height: "4vmax" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vmax" }} className="ab-face abl">
          <div
            style={{ fontSize: "3vmax", lineHeight: "3.2vmax" }}
            className="ab-letter abl-2"
          >
            {words[0]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vmax", height: "4vmax" }} className="ab-wrap abf">
        <div
          style={{ width: "3vmax", height: "4vmax" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vmax" }} className="ab-face abl">
          <div
            style={{ fontSize: "3vmax", lineHeight: "3.2vmax" }}
            className="ab-letter abl-2"
          >
            {words[1]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vmax", height: "4vmax" }} className="ab-wrap abf">
        <div
          style={{ width: "3vmax", height: "4vmax" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vmax" }} className="ab-face abl">
          <div
            style={{ fontSize: "3vmax", lineHeight: "3.2vmax" }}
            className="ab-letter abl-2"
          >
            {words[2]}
          </div>
        </div>
      </div>

      <div className="p-ext">.</div>
      <div style={{ width: "3vmax", height: "4vmax" }} className="ab-wrap abf">
        <div
          style={{ width: "3vmax", height: "4vmax" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vmax" }} className="ab-face abl">
          <div
            style={{ fontSize: "3vmax", lineHeight: "3.2vmax" }}
            className="ab-letter abl-2"
          >
            0
          </div>
        </div>
      </div>
      <div style={{ width: "3vmax", height: "4vmax" }} className="ab-wrap abf">
        <div
          style={{ width: "3vmax", height: "4vmax" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vmax" }} className="ab-face abl">
          <div
            style={{ fontSize: "3vmax", lineHeight: "3.2vmax" }}
            className="ab-letter abl-2"
          >
            0
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbacusPrice;
