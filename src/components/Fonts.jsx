import {Global} from '@emotion/react'


const Fonts = () =>{
  <Global
    styles={
      `@font-face {
        font-family: 'Poppins';
        src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap') format('stylesheet');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Roboto Condensed',;
        src: url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700;800&display=swap') format('stylesheet');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Abel';
        src: url('https://fonts.googleapis.com/css2?family=Abel&display=swap') format('stylesheet');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `
    }
  />
}
export default Fonts;
