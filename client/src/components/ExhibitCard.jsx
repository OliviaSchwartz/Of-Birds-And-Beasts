import Exhibits from "../pages/Exhibits"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const ExhibitDisplay = ({onClick, name, image, exhibit}) => {

    return (
        <div className="card exhibit-card"onClick={() => onClick(exhibit)}  >
            <div className="info-wrapper flex-col">
                <h3 className="runDateDisplay"> {name}</h3>
                <p className="cardDisplay">{image}</p>
            </div>

        </div>
    )
}

export default ExhibitDisplay
