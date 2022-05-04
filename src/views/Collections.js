import React from "react";
import styled from "styled-components";
import AbacusText from "../components/AbacusText";
import Collection from "../components/Collection";
import CollectionRight from "../components/CollectionRight";

function Collections({ products }) {
  document.title = "Collections | Figure Market";
  return (
    <StyledCollections>
      <header>
        <h1>Collections</h1>
        <h3>OF</h3>
        <AbacusIntro>
          <LineLeft></LineLeft>
          <AbacusText title={"mamos"} />
          <LineRight></LineRight>
        </AbacusIntro>
        <Desc>
          Mamos is an independent online store, selling high-end iconic
          collectibles of action figures and props for lovers and newbies
          worldwide.
        </Desc>
      </header>
      {products && (
        <Main>
          <Collection order="001" product={products.collections[0]} />
          <CollectionRight order="002" product={products.collections[1]} />
          <Collection order="003" product={products.collections[2]} />
        </Main>
      )}
    </StyledCollections>
  );
}

const StyledCollections = styled.div`
  position: relative;
  top: 0;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 10vw 14vw 0;

  animation: page-anim 1s ease-in-out;

  header {
    h1 {
      width: 72vw;
      margin-right: auto;
      margin-left: auto;
      padding-top: 5vw;
      padding-right: 1vw;
      padding-bottom: 5vw;
      font-size: 16vw;
      line-height: 10vw;
      text-align: center;
      letter-spacing: 0;
      text-transform: uppercase;
    }
    h3 {
      text-align: center;
      font-size: 8vw;
      padding-bottom: 1vw;
    }
  }
`;

const LineLeft = styled.div`
  width: 35%;
  height: 1px;
  position: absolute;
  left: 0;
  background-color: #0d0d0d;
`;
const LineRight = styled.div`
  width: 35%;
  height: 1px;
  position: absolute;
  right: 0;
  background-color: #0d0d0d;
`;

const AbacusIntro = styled.div`
  display: flex;
  position: relative;
  margin-top: 3vw;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.div`
  margin-top: 7vw;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  font-family: Toy, sans-serif;
  color: #0d0d0d;
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: center;
`;

const Main = styled.section`
  padding-top: 10vw;
  padding-bottom: 8vw;
`;

export default Collections;
