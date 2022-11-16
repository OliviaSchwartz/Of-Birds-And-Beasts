import Schedule from "../pages/Schedule"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const ScheduleDisplay = ({onClick, schedule, patron_Id, exhibit_Id, date, user, authenticated}) => {

    return (
        <div className="card schedule-card"onClick={() => onClick(schedule)}  >
            <div className="schedule-info-wrapper flex-col">
                <h3 className="runDateDisplay item1"> {date}</h3>
                <h4 className="cardDisplay item3"> Exhibits:</h4>
            </div>
        </div>
    )
}

export default ScheduleDisplay
