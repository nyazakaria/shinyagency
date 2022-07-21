import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/card'
import styled from 'styled-components'
const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'UX Designer',
    picture: DefaultPicture,
  },
]

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 380px);
  margin-left: 50%;
  margin-top: 50px;
  transform: translateX(-50%);
`
const PresentationShiny = styled.div`
  text-align: center;
`

//const FreelancesContainer = styled.div``

export default function freelances() {
  return (
    <PresentationShiny>
      <h1>Trouvez votre prestataire</h1>
      <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>
      <CardContainer>
        {freelanceProfiles.map((profil, index) => (
          <Card
            key={`${profil.name}-${index}`}
            label={profil.jobTitle}
            picture={profil.picture}
            title={profil.name}
          />
        ))}
      </CardContainer>
    </PresentationShiny>
  )
}
