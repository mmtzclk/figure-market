import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Product({ product }) {
  return (
    <StyledProduct>
      {product && (
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={5} tiltReverse={true}>
          <Link draggable={false} to={`/product/${product.slug}`}>
            <Image>
              <img src={product.poster.url} alt={product.name} />
            </Image>
            <ProductInfo>
              <h2>{product.archive}</h2>
              <Block>
                <h3>{product.name}</h3>
              </Block>
              <Price>€ {product.price} </Price>
            </ProductInfo>
          </Link>
        </Tilt>
      )}
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  :hover {
    img {
      transform: scale3d(0.95, 0.95, 1);
    }
  }

  a {
    position: relative;
    right: 1vw;
    width: 22vw;
    height: 34vw;
    margin-right: 1vw;
    margin-bottom: 13vw;
    margin-left: 1vw;
    background-color: #e0cfb8;
    max-width: 100%;
    display: inline-block;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
      width: 34vw;
      height: 55vw;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
      height: 110vw;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  left: 2.4vw;
  top: -9.8vw;
  right: 0;
  width: 17vw;
  height: 100%;
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    transition: all 0.75s ease;
  }
  @media screen and (max-width: 768px) {
    width: 26vw;
    left: 4vw;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    left: 1.8rem;
  }
`;

const ProductInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 14vw;

  @media screen and (max-width: 768px) {
    bottom: 6.5vw;
  }
  @media screen and (max-width: 425px) {
    bottom: 3rem;
  }

  h2 {
    margin-bottom: 0.5vw;
    font-size: 1.2vw;
    line-height: 1.3vw;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 2.5em;
    }
    @media screen and (max-width: 425px) {
      font-size: 5em;
    }
  }

  h3 {
    height: 100%;
    margin-top: 1vw;
    margin-right: auto;
    margin-left: auto;
    transform-origin: 50% 0%;
    font-size: 3.4vw;
    line-height: 3vw;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 6em;
      margin-top: 2vw;
      line-height: 5vw;
    }
    @media screen and (max-width: 425px) {
      font-size: 10em;
      margin-top: 0.75rem;
      line-height: 2rem;
    }
  }
`;

const Block = styled.div`
  max-width: 14vw;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    max-width: 22vw;
  }
  @media screen and (max-width: 425px) {
    max-width: 100%;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 1.5vw;
  left: 50%;
  right: 50%;
  width: 6vw;
  transform: translate(-50%, -50%);
  font-family: "AT Apoc", sans-serif;
  font-size: 2vw;
  line-height: 2vw;
  text-align: center;
  letter-spacing: -0.03em;

  @media screen and (max-width: 768px) {
    font-size: 4em;
    width: 10vw;
    bottom: -4vw;
  }
  @media screen and (max-width: 425px) {
    font-size: 8em;
    width: 10rem;
    bottom: -2rem;
  }
`;

export default Product;
