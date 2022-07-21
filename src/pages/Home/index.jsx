import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import Illustration from '../../assets/home-illustration.svg'

const PresentationShiny = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const HomeIllustration = styled.img`
  width: 500px;
  height: 600px;
  margin-right: 100px;
`

const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: #fff;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  margin-left: 100px;
`

const StyledContainer = styled.div`
  background-color: ${colors.backgroundLight};
  width: 90%;
  height: 100vh;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 45px;
    margin-left: 100px;
  }
`



function App() {
  return (
    <StyledContainer>
      <PresentationShiny>
        <p>
          Repérez vos besoins, <br />
          on s’occupe du reste, <br />
          avec les meilleurs <br />
          talents
        </p>
        <StyledButton>Faire le test</StyledButton>
      </PresentationShiny>
      <HomeIllustration src={Illustration} alt="HomePage" />
    </StyledContainer>
  )
}

export default App
