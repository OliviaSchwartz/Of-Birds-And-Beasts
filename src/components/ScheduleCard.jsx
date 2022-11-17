import Schedule from "../pages/Schedule"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DeleteSchedule } from "../services/ScheduleServices"

const ScheduleDisplay = (props) => {

    const deleteOneSchedule = async (e) => {
        e.preventDefault()
        console.log(props.schedule_Id)
        await DeleteSchedule(props.schedule_Id)
        props.setToggle(!props.toggle)
    }

    return (
        <div className="card exhibit-card" >
            <div className="schedule-info-wrapper flex-col">
                <h3 className="runDateDisplay item1"> {props.date}</h3>
                <h4 className="cardDisplay item3"> Exhibits:</h4>
                <button className="exhibit-button">Add Exhibits</button>
                <button className="exhibit-button" onClick={deleteOneSchedule}>Delete Schedule</button>
            </div>
        </div>
    )
}

export default ScheduleDisplay


// schedule, schedule_Id, exhibit_Id, date
// onClick={()=> onClick(props.schedule)}
