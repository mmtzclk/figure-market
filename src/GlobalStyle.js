import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @font-face {
  font-family: 'AT Apoc';
  src: url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e29be8ab7c9a8696a735798_AT%20Apoc-Revelations.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e29be6db7c9a8a1567356be_AT%20Apoc-Revelations.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Toy';
  src: url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e29be8a911106d14c04a9be_Toy-Regular.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e29be6db7c9a84b657356bf_Toy-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Uxum Grotesque';
  src: url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e32ba46685ac85dc22f9e81_Uxum%20Grotesque-Regular.woff2') format('woff2'), url('https://uploads-ssl.webflow.com/5e170b5b3f577b3e29048ec7/5e32ba3808b7059dfbce71b2_Uxum%20Grotesque-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Uxum Grotesque',sans-serif;
    color: #0d0d0d;
    font-size: .85vw;
    line-height: .85vw;
    font-weight: 400;
    letter-spacing: -.01em;
    text-transform: none;
    background-color: #EADAC6;
    user-select: none;
    
    }

    img{
      -webkit-user-drag: none;
    }

    a{
        text-decoration: none;
        color: initial;
    }

    h3 {
      margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    font-family: Toy,sans-serif;
    color: #0d0d0d;
    font-size: 5vw;
    line-height: 5vw;
    font-weight: 400;
    letter-spacing: -.02em;
    }

    h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'AT Apoc',sans-serif;
    font-size: 6vw;
    line-height: 6vw;
    font-weight: 400;
    letter-spacing: -.04em;
}

    h1 {
      margin-top: 0;
    margin-bottom: 0;
    font-family: Toy,sans-serif;
    font-size: 8vw;
    line-height: 7vw;
    font-weight: 400;
    letter-spacing: -.03em;
    }
    
    input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    font: inherit;
}

ul
{
list-style: none;
padding: 0;
margin: 0;
}
`;
