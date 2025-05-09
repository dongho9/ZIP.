import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../fonts/EHNormalTrial-Regular.otf";
const GlobalStyles = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

ul,li{
  list-style: none;
}

a{
  text-decoration: none;
  color:inherit;
}

:root {
  --light-color: #fff;
  --dark-color: #000;
  --border-color: #ccc;
  --accent: #dc143c;
  --subTitle: #838383;
  --lightGray: #D3D3D3;
  --event-color: #ACE0FF;
}

html {
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  font-family: "Pretendard";
  background: var(--light-color);
  overflow-x: hidden;
}

@font-face {
  font-family: "EHNormalTrial";
  src: url("/fonts/EHNormalTrial-Thin.otf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "EHNormalTrial";
  src: url("/fonts/EHNormalTrial-Regular.otf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "EHNormalTrial";
  src: url("/fonts/EHNormalTrial-Bold.otf") format("truetype");
  font-weight: 700;
}
`;

export default GlobalStyles;
