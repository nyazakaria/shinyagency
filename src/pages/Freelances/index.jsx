import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/card'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
`
const PresentationShiny = styled.div`
  text-align: center;
`

//const FreelancesContainer = styled.div``

function reducer(state, action) {
  switch (action.type) {
    case 'startDisplayFreelances':
      return { ...state, loading: true }
    case 'endDisplayFreelances':
      return { ...state, freelances: action.freelance, loading: false }
    default:
      throw new Error()
  }
}

export default function Freelances() {
  /*  const [{loading, freelances}, dispatch] = useReducer(reducer, {
      loading: false,
      freelances: {}
    }) */

  const [loading, setLoading] = useState(false)
  const [freelances, setFreelances] = useState({})
  //`http://localhost:8000/survey`   `http://localhost:8000/freelances`

  /*  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/freelances`)
      .then((response) => response.json())
      .then(({ ...freelances }) => {
        setFreelances(freelances)
        console.log(freelances, 'aaa')
        setLoading(false)
      })
      .catch((error) => console.error(error, 'une errreur 404'))
  }, []) */

  useEffect(() => {
    async function fetchFreelancers() {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const freelancersList = await response.json()
        setFreelances(freelancersList)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchFreelancers()
  }, [])

  //const isEmtyFreelancesList = Object.keys(freelances) === 0
  const isEmptyList = JSON.stringify(freelances) === '{}'
  const freelancesL = freelances.freelancersList
  console.log( isEmptyList, freelances, 'aaa')
  return (
    <PresentationShiny>
      <h1>Trouvez votre prestataire</h1>
      <span>Chez Shiny nous réunissons les meilleurs profils pour vous.</span>

      {loading || isEmptyList ? (
        <Loader />
      ) : (
        <CardContainer>
          {freelancesL.map((profil, index) => (
            <Card
              key={`${profil.name}-${index}`}
              label={profil.job}
              picture={profil.picture}
              title={profil.name}
            />
          ))}
        </CardContainer>
      )}
    </PresentationShiny>
  )
}
