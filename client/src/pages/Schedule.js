import { useEffect, useState } from 'react'
import { GetSchedules, CreateSchedules } from '../services/ScheduleServices'
import { useNavigate } from 'react-router-dom'

const Schedule = ({ user, authenticated }) => {
  const initialState = {
    date: ''
  }
  let navigate = useNavigate()
  const [formState, setFormState] = useState(initialState)
  const [scheduleExists, setScheduleExists] = useState(false)
  const [schedule, setSchedule] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await CreateSchedules(formState)
    console.log('handle submit', response)
    setSchedule(response)
    setFormState(initialState)
    setScheduleExists(true)
  }

  useEffect(() => {
    const handleSchedule = async () => {
      const data = await GetSchedules()
      setSchedule(data)
    }
    handleSchedule()
  }, [])

  if (scheduleExists) {
    return (
      <div className="schedule-text">
        <div className="section-title">SCHEDULE </div>
        <div>Date: {schedule.date} </div>
        <br />
        <div className="exhibit-list">
          <div className="exhbit-title">Scheduled Exhibits </div>
          {schedule?.exhibits?.map((exhibit) => (
            <p>{exhibit.name}</p>
          ))}
        </div>
        <button>Delete Schedule</button>
        <button>View Exhibits</button>
      </div>
    )
  } else {
    return user && authenticated ? (
      <div className="schedule-text section-title">
        {' '}
        CREATE A SCHEDULE
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Date:{' '}
          </label>
          <input
            className="input"
            type="text"
            id="date"
            placeholder="MM/DD/YY (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.date}
            required
          />
          <button className="submit-button" type="submit">
            Create Schedule
          </button>
        </form>
      </div>
    ) : (
      <div className="protected">
        <h3>Oops! You must be signed in to do that!</h3>
        <button onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    )
  }
}

export default Schedule

// return user && authenticated ? (
//   <div className="grid col-4">
//     {schedule.map((schedule) => (
//       <div className="card" key={schedule.id}>
//         <h3>{schedule.title}</h3>
//         <div>
//           <img src={schedule.image} alt="post" />
//         </div>
//         <p>{schedule.body.substring(0, 80)}...</p>
//       </div>
//     ))}
//   </div>
// ) : (
//   <div className="protected">
//     <h3>Oops! You must be signed in to do that!</h3>
//     <button onClick={() => navigate('/signin')}>Sign In</button>
//   </div>
// )
// }

// if (scheduleExists) {
//   return (
//     <div className="schedule-text">
//       <div className="section-title">SCHEDULE </div>
//       <div>Date: {schedule.date} </div>
//       <br />
//       <div className="exhibit-list">
//         <div className="exhbit-title">Scheduled Exhibits </div>
//         {schedule?.exhibits?.map((exhibit) => (
//           <p>{exhibit.name}</p>
//         ))}
//       </div>
//       <button>Delete Schedule</button>
//       <button>View Exhibits</button>
//     </div>
//   )
// } else {
//   return ( user && authenticated) ? (
//     <div className="schedule-text section-title">
//       {' '}
//       CREATE A SCHEDULE
//       <form className="form" onSubmit={handleSubmit}>
//         <label className="label dateField" htmlFor="date">
//           Date:{' '}
//         </label>
//         <input
//           className="input"
//           type="text"
//           id="date"
//           placeholder="MM/DD/YY (Required)"
//           cols="30"
//           onChange={handleChange}
//           value={formState.date}
//           required
//         />
//         <button className="submit-button" type="submit">
//           Create Schedule
//         </button>
//       </form>
//     </div>
//   )
// }
// }
