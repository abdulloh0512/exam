import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition:  all 500ms;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition:  all 500ms;
  &:active{
    transform: scale(95%);
  }
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
a{
    text-decoration: none;
}
html{
    font-size: 62.5%;
    font-family: Nunito;
}
*, *::before, *::after {
  box-sizing: border-box;
}
/*
2. Remove default margin
*/

/*
6. Remove built-in form typography styles
*/
html, body, #root{
    height: 100%;
    width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

`;
