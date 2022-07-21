import styled from 'styled-components'
import errorImg from '../../assets/404.svg'
import colors from '../../utils/style/colors.js'

const Container = styled.div`
  position: relative;
  left: 5%;
  width: 90%;
  height: 100vh;
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
`

const SvgError = styled.img`
  width: 700px;
  height: 500px;
  margin: 0 auto;
  float: left;
`

const Span = styled.span`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
`

const Explain = styled.p`
  text-align: center;
  font-size: 24px;
`

function Error() {
  return (
    <Container>
      <Span>Oups...</Span>
      <SvgError src={errorImg} />
      <Explain>Il semblerait qu'il y ait un problème</Explain>
    </Container>
  )
}

export default Error
