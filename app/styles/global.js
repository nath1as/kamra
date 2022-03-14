import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line
// add global disable, so any component that gets disabled=true
// gets opacity 0.8 and click event none

//@font-face {
//font-family: "Fixedsys";
//src: url("/fonts/Fixedsys.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "Minecraft";
//src: url("/fonts/minecraft.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "Alagard";
//src: url("/fonts/alagard.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "Early GameBoy";
//src: url("/fonts/early_gameboy.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe";
//src: url("/fonts/PetMe.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe1";
//src: url("/fonts/PetMe1282Y.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe2";
//src: url("/fonts/PetMe128.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe3";
//src: url("/fonts/PetMe2X.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe4";
//src: url("/fonts/PetMe2Y.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
//@font-face {
//font-family: "PetMe5";
//src: url("/fonts/PetMe642Y.ttf");
//font-style: normal;
//font-weight: 400;
//font-display: swap;
//}
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "CinzelDecorative";
  src: url("/fonts/CinzelDecorative-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "CinzelDecorative Bold";
  src: url("/fonts/CinzelDecorative-Bold.ttf");
  font-style: bold;
  font-weight: 800;
  font-display: swap;
}

  height: 100%;
  width: 100%;
  user-select: none;
 * {
  user-select: none;
  scrollbar-width: none;
     ::-webkit-scrollbar {
    display: none;
  }
  *,
  *::after,
  *::before {
    outline: none;
    padding: 0;
    margin: 0;
    user-drag: none;
    font-size: 14px;
  }
  input, textarea {
    user-select: auto;
    pointer-events: auto;
    user-drag: auto;
    cursor: pointer;
    cursor: url('/purple_pointer.cur'), pointer;
  }
  img {
    pointer-events: none;
    border: none;
    outline: none;
    background: ${(props) => props.theme.secondary};
  }
  a {
    text-decoration: none;
    outline:none;
    font-size: var(--size0);
    color: ${(props) => props.theme.links};
    cursor: url('/purple_pointer.cur'), pointer;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    height: 100vh;
    width: 100vw;
    font-family: CinzelDecorative;
  }
  :root {
    // --bigFont: 'Erica One', regular;
    // heights
      --headerHeight: 45px;
      --footerHeight: 0px;
      --borderHeight: 0.2vh;
    // spacing
      --ratio: 1.2;
      --size-5: calc(var(--size-4) / var(--ratio));
      --size-4: calc(var(--size-3) / var(--ratio));
      --size-3: calc(var(--size-2) / var(--ratio));
      --size-2: calc(var(--size-1) / var(--ratio));
      --sze-1: calc(var(--size0) / var(--ratio));
      --size0: 1rem;
      --size1: calc(var(--size0) * var(--ratio));
      --size2: calc(var(--size1) * var(--ratio));
      --size3: calc(var(--size2) * var(--ratio));
      --size4: calc(var(--size3) * var(--ratio));
      --size5: calc(var(--size4) * var(--ratio));
  }
`;

export default GlobalStyle;
