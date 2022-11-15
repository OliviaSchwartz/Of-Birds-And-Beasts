import { useEffect, useState } from 'react'
import { GetAnimalType } from '../services/AnimalsServices'
import { useNavigate, useParams } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard'

const ExhibitAnimals = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const handleAnimals = async () => {
      const data = await GetAnimalType(id)
      setAnimals(data)
    }
    handleAnimals()
  }, [])

  return (
    <div>
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          image={animal.image}
          species={animal.species}
          information={animal.information}
          // onClick={() => viewAnimals(exhibit.id)}
        />
      ))}
    </div>
  )
}

export default ExhibitAnimals
