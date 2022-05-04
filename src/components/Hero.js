import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import hero from "../images/hero.png";
import hero2 from "../images/hero2.png";
import hero4 from "../images/hero4.png";
import hero5 from "../images/hero5.png";
import hero6 from "../images/hero6.png";

import "swiper/css";
import "swiper/css/effect-flip";

import { Autoplay, EffectCreative } from "swiper";
import Abacus from "./Abacus";

function Hero() {
  return (
    <StyledHero>
      <HeroDesc>
        <h3>
          It is an independent store, selling iconic collectibles of action
          figures and props.
        </h3>
      </HeroDesc>
      <HeroImg>
        <Swiper
          modules={[Autoplay, EffectCreative]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          grabCursor={true}
          className="mySwiper"
          creativeEffect={{
            prev: {
              shadow: false,
              origin: "left center",
              translate: ["-20%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["20%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
        >
          <SwiperSlide>
            <img src={hero} alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero4} alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero5} alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero6} alt="hero" />
          </SwiperSlide>
        </Swiper>
      </HeroImg>
      <HeroRight>
        <h3>
          <span>
            <Abacus title={"not"} />
          </span>
          Just <br /> toys.
        </h3>
      </HeroRight>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 425px) {
    height: 520px;
  }
`;

const HeroDesc = styled.div`
  position: absolute;
  bottom: 5.7vw;
  left: 14vh;
  width: 40%;

  @media screen and (max-width: 768px) {
    left: 5vh;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    bottom: -20px;
  }

  h3 {
    font-size: calc(3.33333vh + 0.3vw);
    line-height: 4vh;
    margin-bottom: 2.5vw;
  }
`;

const HeroImg = styled.div`
  position: absolute;
  right: 10%;
  bottom: 10vh;

  @media screen and (max-width: 768px) {
    right: 5%;
  }

  @media screen and (max-width: 425px) {
    bottom: 100px;
    right: 0rem;
  }
  @media screen and (max-width: 375px) {
    bottom: 140px;
    right: 20px;
  }

  .swiper {
    width: 600px;
    @media screen and (max-width: 1440px) {
      width: 400px;
    }
    @media screen and (max-width: 768px) {
      width: 350px;
    }
    @media screen and (max-width: 425px) {
      width: 150px;
    }
    @media screen and (max-width: 375px) {
      width: 120px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
const HeroRight = styled.div`
  position: absolute;
  left: 14vh;
  top: 30vh;

  @media screen and (max-width: 768px) {
    left: 5vh;
  }

  @media screen and (max-width: 425px) {
    left: 40px;
    top: 200px;
  }

  h3 {
    position: relative;
    font-family: "Toy";
    padding-top: 0.4vw;
    padding-bottom: 1vw;
    padding-left: 0.2vw;
    font-size: 25vh;
    line-height: 14vh;
    font-weight: 400;
    @media screen and (max-width: 425px) {
      font-size: 160px;
      line-height: 90px;
    }
    @media screen and (max-width: 375px) {
      font-size: 140px;
      line-height: 80px;
    }
    span {
      position: absolute;
      top: -1vh;
      left: 30%;
    }
  }
`;

export default Hero;
