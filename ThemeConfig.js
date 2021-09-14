import { createGlobalStyle} from "styled-components"
import styled from "styled-components";


export const lightTheme = {
  body: 'white',
  text: 'black',
  toggleBorder: '#6B8096',
  background: '#0e141b',
  titlColor:'#003566',
  blogtitle:'#F61E61',
  dateColor:'#464646'

}

export const darkTheme = {
  body: '#282C35',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#0e141b',
  titlColor:'#A2D2FF',
  blogtitle:'#F73772',
  dateColor:'#dddddd',




}


export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Nunito;
    transition: all 0.50s linear;
    margin:0px;
  }


a{
  text-decoration: none;
  color: ${({ theme }) => theme.titlColor};

}

h2{
  color: ${({ theme }) => theme.blogtitle};

}

p{
  color: ${({ theme }) => theme.dateColor};

}






`

