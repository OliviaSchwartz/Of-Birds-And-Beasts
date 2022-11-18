import Schedule from "../pages/Schedule"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { DeleteSchedule, UpdateSchedule } from "../services/ScheduleServices"
import { useEffect, useState } from 'react'

const ScheduleDisplay = (props) => {

    const initialState = {
      date: '',
      exhibit_list: ''
    }
    const [formState, setFormState] = useState(initialState)
    const [updatedSchedule, setUpdatedSchedule] = useState({})


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }



const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateSchedule(props.schedule_Id, formState)
    props.setToggle(!props.toggle)
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
                <form className="form" onSubmit={handleSubmit}>
                    <label className="label exhibitField" htmlFor="date">
                    date:{' '}
                    </label>
                        <input
                    className="input"
                type="text"
                id="date"
                placeholder="Udate your visit date"
                cols="30"
                onChange={handleChange}
                value={formState.date}
                required
        />
          <h4 className="cardDisplay item3"> Exhibits: {props.exhibit_list}</h4>
         <label className="label exhibitField" htmlFor="exhibit_list">
                    Exhibits:{' '}
                    </label>
                        <input
                    className="input"
                type="text"
                id="exhibit_list"
                placeholder="Add Your Exhibits Here"
                cols="30"
                onChange={handleChange}
                value={formState.exhibit_list}

        />
                <button className="exhibit-button" onClick={handleSubmit}>Update Schedule</button>
            </form>
                <button className="exhibit-button" onClick={deleteOneSchedule}>Delete Schedule</button>
            </div>
        </div>
    )
}

export default ScheduleDisplay


// schedule, schedule_Id, exhibit_Id, date
// onClick={()=> onClick(props.schedule)}
// const handleSubmit = async (e) => {
//     e.preventDefault()
//     await UpdateSchedule(props.schedule_Id, formState)
//     props.setToggle(!props.toggle)
//   }
