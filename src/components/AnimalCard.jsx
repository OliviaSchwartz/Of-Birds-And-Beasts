import Animals from "../pages/Animals"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const AnimalDisplay = ({onClick, animal, name, image, species, information}) => {

    return (
        <div className="card animal-card"onClick={() => onClick(animal)}  >
            <div className="animal-info-wrapper flex-col">
                <h3 className="runDateDisplay item1"> {name}</h3>
                <img className="cardDisplay item2" src={image} alt='animal' />
                <h4 className="cardDisplay item3"> Species: {species} </h4>
                <p className="cardDisplay item4">Information: {information}</p>
            </div>
        </div>
    )
}

export default AnimalDisplay
