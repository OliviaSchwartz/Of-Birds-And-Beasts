import { useEffect, useState } from 'react'
import {
  GetSchedules,
  CreateSchedules,
  GetScheduleById
} from '../services/ScheduleServices'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ScheduleCard from '../components/ScheduleCard'

const Schedule = ({
  user,
  authenticated,
  setSchedule,
  schedule,
  scheduleExists,
  setScheduleExists
}) => {
  const initialState = {
    date: ''
  }
  let { id } = useParams()
  let navigate = useNavigate()
  const [formState, setFormState] = useState(initialState)
  // const [scheduleExists, setScheduleExists] = useState(false)
  // const [schedule, setSchedule] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await CreateSchedules({ ...formState, patron_Id: user.id })
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

  const viewSchedules = (id) => {
    navigate(`${id}`)
  }

  return user && authenticated ? (
    <div>
      <div className="schedule-form">
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
      <div className="grid col-4">
        <div className="grid col-4">
          {schedule.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              date={schedule.date}
              onClick={() => viewSchedules(schedule.id)}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Schedule
