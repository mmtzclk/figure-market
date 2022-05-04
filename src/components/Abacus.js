import React from "react";
import styled from "styled-components";

function Abacus({ title }) {
  const words = title.split("");
  return (
    <StyledAbacus>
      <div className="ab-wrap abf">
        <div className="ab-side abs"></div>
        <div className="ab-face abl">
          <div className="ab-letter abl-2">{words[0]}</div>
        </div>
      </div>
      <div className="ab-wrap abf">
        <div className="ab-side abs"></div>
        <div className="ab-face abl">
          <div className="ab-letter abl-2">{words[1]}</div>
        </div>
      </div>
      <div className="ab-wrap abf">
        <div className="ab-side abs"></div>
        <div className="ab-face abl">
          <div className="ab-letter abl-2">{words[2]}</div>
        </div>
      </div>
    </StyledAbacus>
  );
}

const StyledAbacus = styled.div``;

export default Abacus;
