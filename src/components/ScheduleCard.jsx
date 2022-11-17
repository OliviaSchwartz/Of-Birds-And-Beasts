import Schedule from "../pages/Schedule"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DeleteSchedule, UpdateSchedule } from "../services/ScheduleServices"
import { useEffect, useState } from 'react'

const ScheduleDisplay = (props) => {
    let {id} = useParams()
    const initialState = {
      date: ''
    }
    const [formState, setFormState] = useState(initialState)
    const [updatedSchedule, setUpdatedSchedule] = useState('')


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await UpdateSchedule({ ...formState })
        console.log('handle submit', response)
        props.setLatestSchedule(response)
        setFormState(initialState)
        // props.setScheduleExists(true)
      }

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
                <form className="form" onSubmit={handleSubmit}>
                    <label className="label exhibitField" htmlFor="date">
                    date:{' '}
                    </label>
                        <input
                    className="input"
                type="text"
                id="date"
                placeholder="date-update"
                cols="30"
                onChange={handleChange}
                value={formState}
                required
        />
                <button className="exhibit-button" onClick={handleSubmit}>Add Exhibits</button>
            </form>
                <button className="exhibit-button" onClick={deleteOneSchedule}>Delete Schedule</button>
            </div>
        </div>
    )
}

export default ScheduleDisplay


// schedule, schedule_Id, exhibit_Id, date
// onClick={()=> onClick(props.schedule)}
