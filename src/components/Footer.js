import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <StyledFooter>
      <FooterFooter>
        <Captions>
          <Caption>
            <Title>CONTACT US</Title>
            <p>
              (+90) 541-398-2220 <br /> mmtzclk@gmail.com
            </p>
          </Caption>
          <Caption>
            <Title>FOLLOW US</Title>
            <p>
              <Link to="//www.instagram.com/memolata1" target={"_blank"}>
                Instagram
              </Link>{" "}
              <br /> <Link to={"//www.linkedin.com/in/mmtzclk/"}>Linkedin</Link>
            </p>
          </Caption>
          <Caption>
            <Title>ADDRESS</Title>
            <p>
              Bucaspor <br /> İzmir
            </p>
          </Caption>
          <Caption>
            <Title>POLICY</Title>
            <p>
              Privacy <br /> Terms
            </p>
          </Caption>
        </Captions>
      </FooterFooter>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 72vw;
  margin-top: 10vw;
  margin-right: auto;
  margin-left: auto;
`;

const FooterFooter = styled.footer`
  position: relative;
  width: 100%;
  padding-top: 8vw;
  padding-bottom: 5vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-top: 1px solid rgba(13, 13, 13, 0.37);

  @media screen and (max-width: 768px) {
    padding-top: 5vw;
  }
`;

const Captions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Caption = styled.div`
  text-align: center;
  br {
    display: block;
    content: " ";
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
  p {
    @media screen and (max-width: 768px) {
      font-size: 2em;
    }
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 0.85vw;
  letter-spacing: -0.01em;
  line-height: 0.85vw;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export default Footer;
