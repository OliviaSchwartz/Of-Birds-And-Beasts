import { useEffect, useState } from 'react'
import { GetExhibits } from '../services/ExhibitsServices'
import { useNavigate } from 'react-router-dom'
import ExhibitCard from '../components/ExhibitCard'

const Exhibits = () => {
  let navigate = useNavigate()
  const [exhibits, setExhibits] = useState([])

  useEffect(() => {
    const handleExhibits = async () => {
      const data = await GetExhibits()
      setExhibits(data)
    }
    handleExhibits()
  }, [])

  const viewAnimals = (id) => {
    navigate(`${id}`)
  }

  return (
    <div className="grid col-4">
      {exhibits.map((exhibit) => (
        <ExhibitCard
          key={exhibit.id}
          name={exhibit.name}
          image={exhibit.image}
          onClick={() => viewAnimals(exhibit.id)}
        />
      ))}
    </div>
  )
}

export default Exhibits
