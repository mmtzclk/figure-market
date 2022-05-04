import React from "react";

function AbacusText({ title }) {
  const words = title.split("");
  if (words.length === 2) {
    words.unshift("");
  }
  if (words.length === 1) {
    words.unshift("", "");
  }
  return (
    <div>
      <div style={{ width: "3vw", height: "4vw" }} className="ab-wrap abf">
        <div
          style={{ width: "3vw", height: "4vw" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vw" }} className="ab-face abl">
          <div
            style={{ fontSize: "2.85vw", lineHeight: "3.2vw" }}
            className="ab-letter abl-2"
          >
            {words[0]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vw", height: "4vw" }} className="ab-wrap abf">
        <div
          style={{ width: "3vw", height: "4vw" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vw" }} className="ab-face abl">
          <div
            style={{ fontSize: "2.85vw", lineHeight: "3.2vw" }}
            className="ab-letter abl-2"
          >
            {words[1]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vw", height: "4vw" }} className="ab-wrap abf">
        <div
          style={{ width: "3vw", height: "4vw" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vw" }} className="ab-face abl">
          <div
            style={{ fontSize: "2.85vw", lineHeight: "3.2vw" }}
            className="ab-letter abl-2"
          >
            {words[2]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vw", height: "4vw" }} className="ab-wrap abf">
        <div
          style={{ width: "3vw", height: "4vw" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vw" }} className="ab-face abl">
          <div
            style={{ fontSize: "2.85vw", lineHeight: "3.2vw" }}
            className="ab-letter abl-2"
          >
            {words[3]}
          </div>
        </div>
      </div>
      <div style={{ width: "3vw", height: "4vw" }} className="ab-wrap abf">
        <div
          style={{ width: "3vw", height: "4vw" }}
          className="ab-side abs"
        ></div>
        <div style={{ margin: "0.3vw" }} className="ab-face abl">
          <div
            style={{ fontSize: "2.85vw", lineHeight: "3.2vw" }}
            className="ab-letter abl-2"
          >
            {words[4]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbacusText;
