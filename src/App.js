import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";
import Footer from "./components/Footer";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";

const query = gql`
  query MyQuery {
    collections {
      id
      name
      slug
      photo {
        url
      }
    }
    categories {
      name
      slug
      id
      products {
        slug
        name
        poster {
          url
        }
        archive
        price
      }
    }
    products {
      archive
      brand
      delivery
      description
      id
      images {
        url
      }
      name
      poster {
        url
      }
      price
      quote
      size
      slug
    }
  }
`;

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    request(
      "https://api-eu-west-2.graphcms.com/v2/ckzgs88li1pn401xtfl422igc/master",
      query
    ).then((data) => setProducts(data));
  }, []);

  return (
    <Router>
      <StyledApp>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={<route.component products={products} />}
            />
          ))}
        </Routes>
        <Footer />
      </StyledApp>
    </Router>
  );
}

const StyledApp = styled.div`
  //ABACUS
  .ab-wrap.abf {
    width: 3vh;
    height: 4vh;
    margin-right: 0.2vw;

    @media screen and (max-width: 425px) {
      width: 2vh;
      height: 3vh;
    }
  }

  @keyframes page-anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .ab-wrap {
    position: relative;
    float: left;
  }

  .ab-face.abl {
    margin: 0.2vw;
  }

  .ab-side.abs {
    width: 3vh;
    height: 4vh;
    @media screen and (max-width: 425px) {
      width: 2vh;
      height: 3vh;
    }
  }

  .ab-side {
    background-color: #f6eee3;
  }

  .ab-face {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    box-shadow: 1px 1px 4px -2px rgb(0 0 0 / 52%);
  }

  .ab-letter.abl-2 {
    font-size: 3.33333vh;
    line-height: 3.33333vh;

    @media screen and (max-width: 425px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  }

  .ab-letter {
    margin-bottom: 1vw;
    font-family: Toy, sans-serif;
    text-align: center;
    text-transform: uppercase;
  }

  .p-ext {
    margin-right: 0.6vw;
    margin-left: 0.6vw;
    float: left;
    font-family: "AT Apoc", sans-serif;
    font-size: 3.85vw;
    line-height: 4vw;
  }

  user-select: none;
`;

export default App;
