import React from "react";
import styled from "styled-components";
import AbacusPrice from "../components/AbacusPrice";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const productArray =
    products && products.products.filter((product) => product.slug === id);

  const product = productArray && productArray[0];
  document.title = product && product.name + " | Figure Market";

  const navigate = useNavigate();

  return (
    <StyledProductDetail>
      {product && (
        <Split>
          <GoBack
            onClick={() => {
              navigate(-1);
            }}
          >
            <svg
              baseProfile="tiny"
              height="88px"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="88px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,9.059V6.5c0-0.256-0.098-0.512-0.293-0.708C11.512,5.597,11.256,5.5,11,5.5s-0.512,0.097-0.707,0.292L4,12l6.293,6.207  C10.488,18.402,10.744,18.5,11,18.5s0.512-0.098,0.707-0.293S12,17.755,12,17.5v-2.489c2.75,0.068,5.755,0.566,8,3.989v-1  C20,13.367,16.5,9.557,12,9.059z" />
            </svg>
          </GoBack>
          <Intro>
            <h1>{product.archive}</h1>
            <h3>{product.name}</h3>
            <Price>
              <PriceLine></PriceLine>
              <PriceText>
                <AbacusPrice title={product.price.toString()} />
              </PriceText>
              <PriceLine></PriceLine>
            </Price>
          </Intro>
          <Intro2>
            <Description>{product.description}</Description>
            <Image>
              <img src={product.poster.url} alt="hep" />
            </Image>
            <Cart>
              <form>
                <QuantityInput
                  type="number"
                  pattern="^[0-9]+$"
                  inputMode="numeric"
                  min={1}
                  defaultValue={1}
                />
                <AddToCartButton type="submit" value={"ADD TO CART"} />
                <Available>
                  <div className="p-disp">Available From: </div>
                  <div className="text-block">Available Now</div>
                </Available>
              </form>
            </Cart>
          </Intro2>
          <Info>
            <Details>
              <Tabs defaultIndex={1}>
                <TabList>
                  <Tab>QUOTE</Tab>
                  <Tab>GALLERY</Tab>
                  <Tab>BRAND</Tab>
                  <Tab>DELIVERY</Tab>
                </TabList>
                <TabPanel>
                  <PanelDesc>
                    <h3>"{product.quote}"</h3>
                  </PanelDesc>
                </TabPanel>
                <TabPanel>
                  <GalleryTitle>
                    <Title1>
                      <h3>Images</h3>
                    </Title1>
                    <Title2>
                      <h3>Gallery</h3>
                    </Title2>
                  </GalleryTitle>

                  <ImageList>
                    {product.images.map((image) => (
                      <GalleryImage key={image.url}>
                        <img src={image.url} alt={image.url} />
                      </GalleryImage>
                    ))}
                  </ImageList>
                </TabPanel>
                <TabPanel>
                  <PanelDesc className="panel-text">{product.brand}</PanelDesc>
                </TabPanel>
                <TabPanel>
                  <PanelDesc className="panel-text">
                    {product.delivery}
                  </PanelDesc>
                </TabPanel>
              </Tabs>
              <Size>
                <h3>{product.size}</h3> <span>cm</span>
              </Size>
            </Details>
          </Info>
          <Commons>
            <h2>©2022</h2>
            <CommonsText>
              The date of arrival of the product is indicative and may be
              subject to change. Reservation is required for the following
              article. The shipment will be dispatched as soon as it is
              available in our warehouse.
            </CommonsText>
          </Commons>
        </Split>
      )}
    </StyledProductDetail>
  );
}

const StyledProductDetail = styled.main`
  width: 100%;
  animation: page-anim 1s ease-in-out;
`;

const Split = styled.div`
  position: relative;
  top: 0;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 10vw 14vw 0;
  @media screen and (max-width: 768px) {
    padding: 7rem 3rem;
  }
  @media screen and (max-width: 425px) {
    padding: 5rem 2rem;
  }
`;

const Intro = styled.header`
  display: block;

  h1 {
    margin-bottom: 0.5vw;
    font-family: "AT Apoc", sans-serif;
    font-size: 2.4vw;
    line-height: 3vw;
    text-align: center;
    letter-spacing: -0.02em;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      font-size: 4em;
      line-height: 3rem;
    }
    @media screen and (max-width: 425px) {
      font-size: 7em;
      line-height: 2rem;
    }
  }

  h3 {
    margin-bottom: 2vw;
    overflow: hidden;
    max-width: 73vw;
    margin-right: auto;
    margin-left: auto;
    transform-origin: 50% 0%;
    font-size: 12vw;
    line-height: 10vw;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 15em;
      line-height: 5rem;
    }
    @media screen and (max-width: 425px) {
      font-size: 17em;
      line-height: 3rem;
    }
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 155.25px;
  @media screen and (max-width: 768px) {
    height: 8rem;
  }
  @media screen and (max-width: 425px) {
    height: 5rem;
  }
`;

const PriceLine = styled.div`
  height: 1px;
  background-color: #0d0d0d;
  flex: 1;
`;

const PriceText = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const Intro2 = styled.div`
  display: flex;
  height: 40vw;
  padding-top: 10vw;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
  @media screen and (max-width: 425px) {
    padding-top: 0;
    height: 16rem;
  }
`;

const Description = styled.div`
  max-width: 23vw;
  font-family: "Uxum Grotesque", sans-serif;
  font-size: 1.2vw;
  line-height: 1.5vw;
  @media screen and (max-width: 768px) {
    min-width: 35vw;
    font-size: 2.5em;
    line-height: 1.2rem;
    height: 12rem;
    overflow: scroll;
    margin-right: 3rem;
  }
  @media screen and (max-width: 425px) {
    min-width: 9rem;
    font-size: 2.7em;
    line-height: 0.7rem;
    height: 9rem;
    position: absolute;
    right: 0;
    text-align: right;
    overflow: scroll;
    text-overflow: ellipsis;
    margin-right: 0;
  }
`;

const Image = styled.div`
  width: 23vw;
  transform-origin: 50% 0%;
  margin-top: -10vw;

  @media screen and (max-width: 425px) {
    margin-top: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 9rem;
  }

  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;

const Cart = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  @media screen and (max-width: 425px) {
    position: absolute;
    right: 0;
    bottom: 2rem;
  }
`;

const QuantityInput = styled.input`
  width: 12.9vw;
  height: 0.5vw;
  margin-bottom: 0;
  padding: 2vw;
  border: 1px solid #0d0d0d;
  border-radius: 0;
  background-color: transparent;
  color: #0d0d0d;
  font-size: 1.5vw;
  line-height: 1.5vw;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 3em;
    width: 4rem;
    height: 0.75rem;
  }
`;

const AddToCartButton = styled.input`
  display: flex;
  text-decoration: none;
  align-items: center;
  appearance: none;
  width: 17vw;
  height: 5vw;
  margin-top: 1vw;
  padding: 2vw;
  justify-content: center;
  background-color: #0d0d0d;
  color: #f6eee3;
  font-size: 1.2vw;
  line-height: 1.2vw;
  text-align: center;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    font-size: 3em;
    width: 5rem;
    height: 1.2rem;
  }
`;

const Available = styled.div`
  margin-top: 1.5vw;

  .p-disp {
    float: left;
    font-size: 1.125vw;
    line-height: 1.125vw;
    text-decoration: underline;
    @media screen and (max-width: 425px) {
      font-size: 2em;
    }
  }
  .text-block {
    margin-left: 0.4vw;
    float: left;
    font-size: 1.125vw;
    line-height: 1.125vw;
    @media screen and (max-width: 425px) {
      font-size: 2em;
    }
  }
`;

const Info = styled.div`
  position: relative;
  height: 30vw;
  margin-bottom: 10vw;
  padding-top: 8vw;
  padding-bottom: 10vw;
  border-top: 1px solid #000;
  @media screen and (max-width: 425px) {
    height: 10rem;
  }
`;

const Details = styled.div`
  width: 100%;
  float: left;

  .react-tabs {
    position: relative;
  }

  .react-tabs__tab--selected {
    border: none;
    border-bottom: 1px solid black;
  }

  .panel-text {
    @media screen and (max-width: 768px) {
      font-size: 2em;
      line-height: 1.2rem;
    }
    @media screen and (max-width: 425px) {
      font-size: 3em;
      line-height: 1rem;
    }
  }

  ul {
    border: none;
    li {
      background-color: transparent;
      line-height: 1vw;
      position: relative;
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      padding: 9px 30px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        font-size: 2em;
      }
      @media screen and (max-width: 425px) {
        font-size: 3em;
        padding: 5px 12px;
      }
    }
  }
`;

const PanelDesc = styled.div`
  font-size: 1.125vw;
  line-height: 1.125vw;
  height: 20vw;
  max-width: 32vw;
  margin-top: 2vw;
`;

const Size = styled.div`
  position: absolute;
  right: 0;
  top: 12vw;

  @media screen and (max-width: 768px) {
    top: 7rem;
  }
  @media screen and (max-width: 425px) {
    top: 4.5rem;
  }

  h3 {
    display: inline-block;
    font-family: "AT Apoc", sans-serif;
    font-size: 8vw;
    line-height: 7vw;
    @media screen and (max-width: 425px) {
      font-size: 12em;
    }
  }
  span {
    margin-left: 0.5vw;
    font-size: 5vw;
    line-height: 5vw;
    display: inline-block;
    font-family: "AT Apoc", sans-serif;
  }
`;

const GalleryTitle = styled.div`
  position: absolute;
  top: -1.5vw;
  z-index: -1;
  @media screen and (max-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;

const Title1 = styled.div`
  position: relative;
  top: 3.7vw;
  overflow: hidden;

  h3 {
    float: right;
    transform-origin: 50% 0%;
    font-size: 3vw;
    line-height: 5vw;
    @media screen and (max-width: 425px) {
      font-size: 6em;
      line-height: 1.2rem;
    }
  }
`;
const Title2 = styled.div`
  overflow: hidden;

  h3 {
    display: inline-block;
    clear: both;
    transform-origin: 50% 0%;
    font-size: 9vw;
    line-height: 9vw;
    @media screen and (max-width: 425px) {
      font-size: 16em;
      line-height: 2.5rem;
    }
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 12vw;
  @media screen and (max-width: 425px) {
    top: 4rem;
  }
`;

const GalleryImage = styled.div`
  position: relative;
  float: left;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 425px) {
    padding-left: 2px;
    padding-right: 2px;
  }

  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;

const Commons = styled.div`
  border-top: 1px solid black;
  padding-top: 3rem;
  h2 {
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 8em;
    }
    @media screen and (max-width: 425px) {
      font-size: 12em;
    }
  }
`;
const CommonsText = styled.div`
  max-width: 27vw;
  margin-top: 1vw;
  margin-right: auto;
  margin-left: auto;
  line-height: 1.2vw;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2em;
    max-width: 20rem;
    line-height: 1rem;
  }
  @media screen and (max-width: 425px) {
    margin-top: 1rem;
    font-size: 3em;
    max-width: 15rem;
    line-height: 0.8rem;
  }
`;

const GoBack = styled.div`
  position: absolute;
  font-size: 3em;
  cursor: pointer;

  svg {
    @media screen and (max-width: 425px) {
      width: 33px;
      height: 33px;
    }
  }
`;

export default ProductDetail;
