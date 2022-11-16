import Exhibits from "../pages/Exhibits"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { UpdateSchedule, GetSchedules } from "../services/ScheduleServices"

const ExhibitDisplay = ({setSchedule, schedule_Id, onClick, name, image, exhibit}) => {


    const addToSchedule = async (e) => {
        e.preventDefault()

        const validateSchedule = async () => {
          if (schedule_Id === undefined) {
            alert('Create your schedule first, then add exhibits')
          } else {
            const newExhibit = await UpdateSchedule(exhibit),
             updateSchedule = await GetSchedules()
            console.log(updateSchedule)
            setSchedule(updateSchedule.data)
          }
        }
        validateSchedule()
      }



    return (
        <div className="card exhibit-card"onClick={() => onClick(exhibit)}  >
            <div className="info-wrapper flex-col">
                <h3 className="runDateDisplay"> {name}</h3>
                <img className="cardDisplay" src={image} />
                <button>View Animals</button>
                <button onClick={addToSchedule}>Add To Schedule</button>
            </div>

        </div>
    )
}

export default ExhibitDisplay
