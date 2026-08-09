import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizzing: border-box;
    font-family: 'Anuphan', sans-serif;
 }
html{
    font-size: 62.5%;
    overflow-x: hidden;

}
body{
    overflow-x:hidden;
}


a{
text-decoration: none;

}
li{
 list-style: none

}

/*
media queries
*/
//998px
// @media (max-width: ${({theme}) => theme.media.mobile }) {
   
//     .container1{
//         padding: 0;

//     }
//     .homebtn{
//         align-items: center;

//       }


// }
//     @media (max-width: ${({theme}) => theme.media.tab }) {
   
//         .container1{
//             padding:0;
//         }
//     }





`