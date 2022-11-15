import Animals from "../pages/Animals"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const AnimalDisplay = ({onClick, animal, name, image, species, information}) => {

    return (
        <div className="card exhibit-card"onClick={() => onClick(animal)}  >
            <div className="info-wrapper flex-col">
                <h3 className="runDateDisplay"> name: {name}</h3>
                <img className="cardDisplay"src={image} />
                <h4 className="cardDisplay"> Species: {species} </h4>
                <p className="cardDisplay">Information: {information}</p>
            </div>

        </div>
    )
}

export default AnimalDisplay
