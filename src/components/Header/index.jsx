import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import dackLogo from '../../assets/lightlogo.png'
import lightlogo from '../../assets/darklogo.png'

let isLightTheme = true

const StyledLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color:${colors.primary};`};
`

const StyledNav = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  padding: 10px;
`

function Header() {
 // const { currentURL } = useLocation()
  return (
    <StyledNav>
      <div className="logo">
        <StyledLogo src={isLightTheme ? lightlogo : dackLogo} alt="logo" />
      </div>
      <div className="links">
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances"> Freelances</StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
