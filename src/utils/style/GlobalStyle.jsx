import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/Context'

const StyleGlobal = createGlobalStyle`
   * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
        margin: 0;  
      
      } 
       a { 
        color : ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')}; 
        text-decoration : none;
       
    }
`

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext)
  return <StyleGlobal isDarkMode={theme === 'dark'} />
}

export default GlobalStyle

/*import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context/Context'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle

*/
