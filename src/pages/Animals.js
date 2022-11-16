import { useEffect, useState } from 'react'
import { GetAnimals } from '../services/AnimalsServices'
import { useNavigate } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard'

const Animals = () => {
  let navigate = useNavigate()
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const handleAnimals = async () => {
      const data = await GetAnimals()
      setAnimals(data)
    }
    handleAnimals()
  }, [])

  const viewAnimalDetails = (id) => {
    navigate(`${id}`)
  }

  return (
    <div className="grid col-4">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          image={animal.image}
          onClick={() => viewAnimalDetails(animal.id)}
        />
      ))}
    </div>
  )
}

export default Animals
