import React, { useLayoutEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <StyledHeader>
      <Left>
        <Logo>
          <Link to={"/"}>
            justy <br />
          </Link>
        </Logo>
        <Navigation>
          <StyledMenu openMenu={openMenu}>
            <MenuLeft>
              <ul>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    to={"/"}
                  >
                    <h3>Index</h3>
                    <div>01</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    activeclassname="active"
                    to={"/category/all"}
                  >
                    <h3>Shop</h3>
                    <div>02</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    activeclassname="active"
                    to={"/collections"}
                  >
                    <h3>Collections</h3>
                    <div>03</div>
                  </NavLink>
                </li>
              </ul>
            </MenuLeft>
            <Line>
              <MenuCircle2
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <Circle>
                  <SvgDiv>
                    <svg viewBox="0 0 25 25">
                      <title>Close</title>
                      <g>
                        <path d="M1.1,23.8c-0.5,0.6,0.8,0.9,1.2,0.5c3.6-3.6,7-7.3,10.3-11.2c0.3-0.3,0.5-0.6,0.8-0.9c0.1,0.1,0.3,0.3,0.4,0.4c3,3.5,6.1,7.3,9.7,10.2c0.3,0.2,1.1,0,0.8-0.4c-2.7-3.7-6.1-7-9-10.5c-0.3-0.3-0.6-0.7-0.8-1c2.5-3,5-6.1,7.1-9.4c0.2-0.3-0.6-0.4-0.8-0.2C18.4,4.1,16,7,13.6,9.9c-2.5-3-5.1-6-7.8-8.9C5.1,0.6,3.7,1,4.3,1.7c2.6,3.2,5.4,6.4,8.1,9.5c-0.4,0.5-0.8,0.9-1.2,1.4C7.9,16.4,4.4,20,1.1,23.8z"></path>
                      </g>
                    </svg>
                  </SvgDiv>
                </Circle>
              </MenuCircle2>
            </Line>
            <MenuRight>
              <MenuList>
                <MenuOrder>
                  <Title>
                    <h3>Contact</h3>
                  </Title>
                  <p>
                    <Link to={"//mailto:mmtzclk@gmail.com"}>
                      mmtzclk@gmail.com
                    </Link>
                  </p>
                </MenuOrder>
                <MenuOrder>
                  <Title>
                    <h3>Follow Us</h3>
                  </Title>
                  <p>
                    <Link to={"//www.instagram.com/uyan.mamos/"}>
                      Instagram
                    </Link>
                  </p>
                  <p>
                    <Link to={"//www.instagram.com/uyan.mamos/"}>LinkedIn</Link>
                  </p>
                </MenuOrder>
              </MenuList>
            </MenuRight>
            <MenuCircle
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Circle>
                <SvgDiv>
                  <svg viewBox="0 0 25 25">
                    <title>Close</title>
                    <g>
                      <path d="M1.1,23.8c-0.5,0.6,0.8,0.9,1.2,0.5c3.6-3.6,7-7.3,10.3-11.2c0.3-0.3,0.5-0.6,0.8-0.9c0.1,0.1,0.3,0.3,0.4,0.4c3,3.5,6.1,7.3,9.7,10.2c0.3,0.2,1.1,0,0.8-0.4c-2.7-3.7-6.1-7-9-10.5c-0.3-0.3-0.6-0.7-0.8-1c2.5-3,5-6.1,7.1-9.4c0.2-0.3-0.6-0.4-0.8-0.2C18.4,4.1,16,7,13.6,9.9c-2.5-3-5.1-6-7.8-8.9C5.1,0.6,3.7,1,4.3,1.7c2.6,3.2,5.4,6.4,8.1,9.5c-0.4,0.5-0.8,0.9-1.2,1.4C7.9,16.4,4.4,20,1.1,23.8z"></path>
                    </g>
                  </svg>
                </SvgDiv>
              </Circle>
            </MenuCircle>
          </StyledMenu>
          <div className="navlinks">
            <NavLink to="/">Index</NavLink>
            <NavDiv />
            <NavLink to="/category/all">Shop</NavLink>
            <NavDiv />
            <NavLink to="/collections">Collections</NavLink>
          </div>
        </Navigation>
      </Left>
      <Burger onClick={() => setOpenMenu(true)}>
        <NavTrigger>
          <NavCircle>
            <NavLines>
              <div className="nav-line"></div>
              <div className="nav-line"></div>
              <div className="nav-obl"></div>
            </NavLines>
          </NavCircle>
        </NavTrigger>
      </Burger>
      <Basket>Bag 0</Basket>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2vw 3vw;
  font-size: calc(0.8vw + 0.8vh + 0.1vmin);
  z-index: 999;
  .active {
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 425px) {
    top: 30px;
  }
`;

const Logo = styled.div`
  font-family: "Monoton", cursive;
  font-size: 2.2vw;
  line-height: 2vw;
  @media screen and (max-width: 425px) {
    font-size: 10vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    padding: 8px 0;
  }
  margin-left: 5vw;

  .navlinks {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Left = styled.div`
  display: flex;
`;

const NavDiv = styled.div`
  height: 0.8px;
  background-color: black;
  width: 25px;
  margin: 0 10px;
`;

const Burger = styled.div`
  cursor: pointer;
  position: absolute;
  left: 47.9vw;
  top: 1vw;
  flex: 0 auto;

  @media screen and (max-width: 425px) {
    top: -5vw;
    left: 40vw;
  }
`;

const Basket = styled.div`
  padding-right: 7vw;

  @media screen and (max-width: 425px) {
    font-size: 6vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
const StyledMenu = styled.div`
  display: ${(props) => (props.openMenu ? "flex" : "none")};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: ${(props) => (props.openMenu ? "block" : "none")};
  }
`;

const MenuLeft = styled.div`
  z-index: 2;
  display: flex;
  width: 73vw;
  height: 100%;
  padding-left: 9vw;
  align-items: center;
  background-color: #0d0d0d;
  @media screen and (max-width: 768px) {
    padding-left: 3vw;
    padding-right: 7vw;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    padding-right: 0;
  }

  @keyframes open-left-menu {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes open-left-menu-m {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: open-left-menu 0.5s;
  @media screen and (max-width: 425px) {
    animation: open-left-menu-m 0.5s;
  }
  ul {
    height: calc(55vh + 1.2963vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    @media screen and (max-width: 768px) {
      justify-content: space-around;
    }

    @media screen and (max-width: 425px) {
      height: 15rem;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
      margin-top: -15vw;
    }

    li {
      overflow: hidden;
      padding-right: 1.3vw;
    }

    a {
      background-color: transparent;
      min-width: 0;
      margin-left: 0;
      padding: 0.3vw 0 0;
      color: #0d0d0d;
      text-decoration: none;
      position: relative;
      display: inline-block;

      @keyframes text-anim {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(0);
        }
      }

      animation: text-anim 0.75s both;
      animation-delay: 0.5s;

      @keyframes hover-text {
        0% {
        }
        100% {
          letter-spacing: 5px;
        }
      }
      @keyframes unhover-text {
        0% {
          letter-spacing: 5px;
        }
        100% {
        }
      }
      h3 {
        font-size: 8vw;
        line-height: 14vh;
        color: #f6eee3;
        display: inline-block;

        @media screen and (max-width: 425px) {
          font-size: 14vw;
          line-height: 12vh;
        }

        :hover {
          animation: hover-text 0.7s both;
        }
        animation: unhover-text 0.7s both;
      }

      div {
        font-size: 2vw;
        line-height: 5vh;
        position: relative;
        display: inline-block;
        margin-left: 2.5vh;
        font-family: "AT Apoc", sans-serif;
        color: #f6eee3;
        @media screen and (max-width: 425px) {
          font-size: 3vw;
        }
      }
    }
  }
`;

const MenuRight = styled.div`
  z-index: 2;
  display: flex;
  width: 50vw;
  height: 100%;
  padding-left: 22vw;
  align-items: center;
  background-color: #0d0d0d;

  @media screen and (max-width: 425px) {
    width: 100vw;
    height: 60%;
    animation: open-right-menu-m 0.5s;
  }

  @keyframes open-right-menu {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes open-right-menu-m {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: open-right-menu 0.5s;
`;

const MenuCircle = styled.div`
  position: absolute;
  z-index: 3;
  width: 22.7vw;
  height: 22.7vw;
  transform: scale(0);
  @keyframes menu-circle {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: menu-circle 1s both;
  animation-delay: 0.5s;
`;
const MenuCircle2 = styled.div`
  display: none;
  z-index: 3;
  width: 22.7vw;
  height: 22.7vw;
  transform: scale(0);
  @keyframes menu-circle {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: menu-circle 1s both;
  animation-delay: 0.5s;

  @media screen and (max-width: 425px) {
    display: block;
    position: absolute;
    left: 40%;
    top: 45%;
  }
`;

const SvgDiv = styled.div`
  position: absolute;
  width: 6vw;
  fill: #0d0d0d;
  font-size: 6vw;
  text-align: center;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 3;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 21vw;
  height: 21vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 0.85vw solid #242424;
  border-radius: 100%;
  background-color: #f6eee3;
  cursor: pointer;

  @keyframes hover-circle {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.75);
    }
  }
  @keyframes unhover-circle {
    0% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: unhover-circle 0.5s;

  :hover {
    animation: hover-circle 0.5s both;
  }
`;

const Line = styled.div`
  z-index: 2;
  width: 10px;
  height: 100%;
  background-color: #f6eee3;

  @media screen and (max-width: 425px) {
    width: 100vw;
    height: 8px;
    animation: line-anim-m 1s both;
    animation-delay: 0.5s;
  }

  @keyframes line-anim {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  @keyframes line-anim-m {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  animation: line-anim 1s both;
  animation-delay: 0.5s;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(45vh + 1.2963vw);

  @media screen and (max-width: 425px) {
    flex-direction: row;
    height: inherit;
    width: 60%;
  }
`;

const MenuOrder = styled.div`
  padding-bottom: 15vw;
  overflow: hidden;
  h3 {
    padding-bottom: 1vw;
    color: #f6eee3;
    font-size: 4vw;
    line-height: 3.4vw;
    animation: text-anim 0.5s both;
    animation-delay: 0.5s;

    @media screen and (max-width: 768px) {
      font-size: 7vw;
      line-height: 8vw;
    }
    @media screen and (max-width: 425px) {
      font-size: 10vw;
      line-height: 8vw;
    }
  }
  p {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 1vw;
    float: left;
    clear: both;

    a {
      display: block;
      color: #f6eee3;
      font-size: 1.5vw;
      line-height: 2.4vw;
      text-decoration: none;
      animation: text-anim 0.75s both;
      animation-delay: 0.8s;

      @media screen and (max-width: 768px) {
        font-size: 2vw;
      }
      @media screen and (max-width: 425px) {
        font-size: 2.5vw;
      }
    }
  }
`;

const Title = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-bottom: 1vw;
  float: left;
  clear: both;
`;

const NavLines = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .nav-line {
    width: 30px;
    height: 1px;
    margin-bottom: 4px;
    background-color: #0d0d0d;
    @media screen and (max-width: 425px) {
      width: 25px;
    }
  }

  .nav-obl {
    position: absolute;
    top: 3px;
    width: 30px;
    height: 1px;
    background-color: #0d0d0d;
    transform: rotate(-45deg);
    @media screen and (max-width: 425px) {
      width: 25px;
    }
  }
`;

const NavCircle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 100%;
  background-color: rgba(246, 238, 227, 0.3);
`;

const NavTrigger = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
  @keyframes scale-up-top {
    0% {
      transform: scale(1);
      transform-origin: 50% 0;
    }
    100% {
      transform: scale(1.5);
      transform-origin: 50% 0;
    }
  }
  @keyframes scale-up-exit {
    0% {
      transform: scale(1.5);
      transform-origin: 50% 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0;
    }
  }

  animation: scale-up-exit 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  :hover {
    animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

export default Header;
