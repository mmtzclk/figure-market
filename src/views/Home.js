import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import CollectionRight from "../components/CollectionRight";

function Home({ products }) {
  document.title = "Figure Market";
  return (
    <StyledHome>
      <Hero />
      {products && (
        <main>
          <Collection order="001" product={products.collections[0]} />
          <CollectionRight order="002" product={products.collections[1]} />
          <Collection order="003" product={products.collections[2]} />
        </main>
      )}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding: 0 10vw;
  @media screen and (max-width: 1024px) {
    padding: 0 1vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: -80px;
    z-index: -1;
  }
  animation: page-anim 1s ease-in-out;
`;

export default Home;
