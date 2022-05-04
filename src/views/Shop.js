import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

function Shop({ products }) {
  const { categoryName } = useParams();
  const categoryArray =
    products &&
    products.categories.filter((category) => category.slug === categoryName);

  const category = categoryArray && categoryArray[0];
  document.title = `${
    (category && category.name) || "All"
  } Products | Figure Market`;

  return (
    <StyledShop>
      <ProductsIntro>
        <ProductsTitle>
          <h1>
            <svg viewBox="0 0 217 126">
              {" "}
              <title>Shop</title>{" "}
              <g>
                {" "}
                <path d="M11.4,19.9c2.7-3.3,6.8-5.4,12.2-6c3.5-0.4,7.6-0.2,12.1,0.6l2-1l0.9-4.3l2.8-0.3l10.3,31.9l-2.7,1C40.9,24,32.5,15.6,24,16.7c-2.2,0.3-4,1.1-5.2,2.5c-1.4,1.4-1.8,3.3-1.6,5.4c0.5,3.8,3.4,8,8.7,13l16.8,15.5c5.9,5.6,10.2,10.6,12.9,15c2.7,4.6,4.4,10,5.2,16.6c2.1,17.1-3.4,26.5-16.9,28.2c-3.5,0.4-7.3,0.5-11.3,0l-8.3,1l-9.7-37.9l2.7-0.8c3.6,9.8,7.1,17.4,10.2,22.7c3.1,5.4,5.9,8.7,8.5,10.2c2.4,1.5,5.2,2.2,8.3,1.8c7.4-0.9,10.5-6,9.4-15.3c-0.5-3.9-1.8-7.7-3.8-11.4s-4.1-6.7-6.1-9c-2.1-2.1-4.9-5-8.5-8.4L18.4,50.5c-5.9-5.5-9.2-11.4-10-17.8C7.7,27.6,8.8,23.4,11.4,19.9z"></path>{" "}
                <path d="M59.7,106.4l4.9-0.2l2.7-2.2L63,15.8l-2.9-2L55.9,14l-0.1-2.8l18.8-3l2,40.6l1.4-0.1c2.6-6.2,7.5-9.5,14.9-9.8c9.8-0.5,15,5.3,15.6,17.5l2.2,45.4l2.9,2l4.9-0.2l0.1,2.8l-27.3,1.3l-0.1-2.8l4.9-0.2l2.7-2.2l-2.1-44c-0.4-8-3.7-11.7-9.7-11.4c-3.5,0.2-5.9,1.7-7.6,4.4c-1.7,2.9-2.4,6.4-2.1,10.8l2,41.2l2.9,2l4.9-0.2l0.1,2.8l-27.3,1.3L59.7,106.4z"></path>{" "}
                <path d="M122.1,46.9c4.5-5.6,10-8.4,16.6-8.2c6.6,0.2,12,3.3,16.3,9.1c4.2,5.9,6.2,14.7,5.9,26.5c-0.3,11.8-2.8,20.5-7.3,26.1c-4.6,5.6-10.2,8.4-16.7,8.2c-6.6-0.2-12-3.3-16.1-9.1c-4.3-5.9-6.3-14.7-6-26.5C115,61.3,117.5,52.5,122.1,46.9z M137,105.8c6.6,0.2,9.9-5.3,10.2-16.5l0.8-30.8c0.3-11.2-2.8-16.9-9.4-17.1s-9.9,5.3-10.2,16.5l-0.8,30.8C127.3,100,130.4,105.6,137,105.8z"></path>{" "}
                <path d="M159.7,116.9l3-1.8l6.8-69l-2.6-2.4l-4.2-0.4l0.3-2.8l17.6-0.4l-0.8,7.7l1.4,0.1c1.3-2.1,3.3-3.8,5.8-5.1c2.5-1.2,5.2-1.6,8.1-1.3c5.6,0.5,9.8,3.4,12.5,8.4c2.7,5.2,3.7,12.7,2.7,22.6c-1,10.6-3.8,18.2-8,23c-4.3,4.8-9.1,7-14.6,6.4c-5.4-0.5-8.7-3.2-9.8-8l-1.4-0.1l-2.2,22.3l2.6,2.4l4.9,0.5l-0.3,2.8l-27.2-2.7l0.3-2.8L159.7,116.9z M185.7,95.6c2.9,0.3,5.3-1.2,7.2-4.2c1.8-3.1,3.3-9.2,4.2-18.6c0.9-9.3,0.9-16-0.1-20.1c-1.1-4.1-3.2-6.2-6.4-6.5c-4.6-0.5-7.8,2.3-9.9,8.2l-2.5,25.8C177.1,89.8,179.7,95,185.7,95.6z"></path>{" "}
              </g>{" "}
            </svg>
          </h1>
        </ProductsTitle>
        <Categories>
          <Category>
            <Link to="/category/all">All</Link>
          </Category>
          <Category>
            <Link to="/category/accesories">Accesories</Link>
          </Category>
          <Category>
            <Link to="/category/funko-pop">Funko-POP</Link>
          </Category>
          <Category>
            <Link to="/category/movies">Movies</Link>
          </Category>
          <Category>
            <Link to="/category/manga">Manga</Link>
          </Category>
          <Category>
            <Link to="/category/heroes">Heroes</Link>
          </Category>
        </Categories>
      </ProductsIntro>
      {categoryName === "all" ? (
        products && (
          <Products>
            {products.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Products>
        )
      ) : (
        <Products>
          {category &&
            category.products.map((product) => (
              <div key={product.slug}>
                <Product key={product.id} product={product} />
              </div>
            ))}
        </Products>
      )}
    </StyledShop>
  );
}

const StyledShop = styled.div`
  padding-top: 8vw;
  position: relative;
  top: 0;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 8vw 14vw 0;
  animation: page-anim 1s ease-in-out;
  @media screen and (max-width: 768px) {
    top: 3em;
  }
  @media screen and (max-width: 425px) {
    top: 10em;
  }
`;

const ProductsIntro = styled.div`
  display: flex;
  height: auto;
  padding-bottom: 3vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(13, 13, 13, 0.37);
`;

const ProductsTitle = styled.div`
  width: 14vw;
  @media screen and (max-width: 768px) {
    width: 18vw;
  }
  svg {
    fill: #0d0d0d;
  }
`;

const Categories = styled.div`
  display: flex;
  margin-top: 1.5vw;
  text-align: center;

  font-size: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 5vw;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 425px) {
    margin-top: 6vw;
    font-size: 0.6rem;
  }
`;

const Category = styled.div`
  margin: 0 1vw;
`;

const Products = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  margin-top: 12vw;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export default Shop;
