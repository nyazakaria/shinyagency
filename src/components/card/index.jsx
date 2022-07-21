import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  border-radius: 50%;
  text-align: center;
`

const CardPicture = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardPicture src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card
