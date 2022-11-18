import Exhibits from "../pages/Exhibits"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { UpdateSchedule, GetSchedules } from "../services/ScheduleServices"

const ExhibitDisplay = ({setSchedule, onClick, name, image, exhibit, schedule, scheduleExists, setScheduleExists}) => {


    const addToSchedule = async (e) => {
        e.preventDefault()

        const validateSchedule = async () => {
          if (scheduleExists = false)  {
            alert('Create your schedule first, then add exhibits')
          } else {
            const newExhibit = await UpdateSchedule(exhibit),
             updateSchedule = await GetSchedules()
            setSchedule( updateSchedule.data)
          }
        }
        validateSchedule()
      }



    return (
        <div className="card exhibit-card" >
            <div className="info-wrapper flex-col">
                <h3 className="runDateDisplay"> {name}</h3>
                <img className="cardDisplayExhibit" src={image} />
                <button className="exhibit-button" onClick={() => onClick(exhibit)} >View Animals</button>
            </div>

        </div>
    )
}

export default ExhibitDisplay
