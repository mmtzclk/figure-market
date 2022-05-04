import React from "react";
import styled from "styled-components";
import Abacus from "./Abacus";
import { Link } from "react-router-dom";

function Collection({ product, order }) {
  const nameArray = product && product.name.split(" ");
  return (
    <StyledCollection>
      {product && (
        <div>
          <Left>
            <Picture>
              <Image>
                <img src={product.photo.url} alt="ig" />
              </Image>
              <Order>
                <Abacus title={order && order} />
              </Order>
            </Picture>
            <Info>
              {" "}
              <div className="cap-1">From The Archive - &nbsp;</div>
              <div className="cap-2">Brook One Piece</div>
            </Info>
          </Left>
          <Title>
            <h3 className="mp-head">{nameArray && nameArray[0]}</h3>
            <h3 className="mp-head mp-2">{nameArray && nameArray[1]}</h3>
          </Title>
          <ShopTitle>
            <div>
              <ShopLink>
                <Link to={`/category/${product.slug}`}>Shop Now</Link>
              </ShopLink>
            </div>
            <Arrow>
              <svg viewBox="0 0 25.6 16.9">
                <polygon points="16.9,0.4 15.5,1.8 21.1,7.4 5.5,7.4 4.9,7.4 0.7,7.4 0.7,9.4 4.9,9.4 4.9,9.4 21.1,9.4 15.5,15 16.9,16.4 24.9,8.4 "></polygon>
              </svg>
            </Arrow>
          </ShopTitle>
        </div>
      )}
    </StyledCollection>
  );
}

const StyledCollection = styled.section`
  margin-top: 10vw;
  width: 72vw;
  margin-right: auto;
  margin-left: auto;
  position: relative;
`;

const Left = styled.div``;

const Picture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43vw;
  height: 40vw;
  background-color: #e5d4bd; ;
`;

const Image = styled.div`
  width: 19vw;
  img {
    max-width: 100%;
  }
`;

const Order = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 2vw;
  margin-left: 2vw;
`;

const Info = styled.div`
  margin-top: 1vw;
  display: flex;
  align-items: center;

  .cap-1 {
    display: inline-block;
    font-size: 1.125vw;
    line-height: 1.125vw;
  }
  .cap-2 {
    display: inline-block;
    font-family: Toy, sans-serif;
    font-size: 1.6vw;
    line-height: 1.6vw;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 5vw;
  right: -3vw;
  padding-left: 10vw;

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    font-family: Toy, sans-serif;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  .mp-head {
    float: left;
    font-size: 14vw;
    line-height: 15vw;
  }

  .mp-head.mp-2 {
    position: relative;
    right: 8.3vw;
    bottom: 2vw;
    clear: both;
    line-height: 11vw;
  }
`;

const ShopTitle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  margin-bottom: 3vw;
  align-items: center;
`;

const ShopLink = styled.div`
  margin-right: 1vw;
  position: relative;
  cursor: pointer;
  padding: 0 0 0.5vw 0;

  :hover {
    border-bottom: 2px solid black;
  }

  a {
    font-family: Toy, sans-serif;
    font-size: 3vw;
    line-height: 3vw;
    font-weight: 400;
    background-color: transparent;
    min-width: 0;
    margin-left: 0;
    padding: 0.3vw 0 0;
    color: #0d0d0d;
    text-decoration: none;
  }
`;

const Arrow = styled.div`
  width: 3vw;
  margin-top: 0.4vw;
`;

export default Collection;
