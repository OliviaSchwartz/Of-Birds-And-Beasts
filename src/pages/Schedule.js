import { useEffect, useState } from 'react'
import { CreateSchedules, GetSchedulesById } from '../services/ScheduleServices'
import { useNavigate } from 'react-router-dom'
import ScheduleCard from '../components/ScheduleCard'

const Schedule = ({
  user,
  authenticated,
  setSchedule,
  schedule,
  setScheduleExists
}) => {
  const initialState = {
    date: ''
  }
  let navigate = useNavigate()
  const [formState, setFormState] = useState(initialState)
  const [toggle, setToggle] = useState(false)
  const [latestSchedule, setLatestSchedule] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await CreateSchedules({ ...formState, patron_Id: user.id })
    console.log('handle submit', response)
    setLatestSchedule(response)
    setFormState(initialState)
    setScheduleExists(true)
  }

  useEffect(() => {
    const handleSchedule = async (id) => {
      const data = await GetSchedulesById(id)
      setSchedule(data)
    }
    if (user) handleSchedule(user.id)
  }, [latestSchedule, toggle])

  return user && authenticated ? (
    <div>
      <div className="schedule-form">
        <h2>
          Use this scheduling tool to plan your visit to Of Birds and Beasts
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Date of visit:{' '}
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
        <div className="exhibit-list">
          <h2> Aquarium, Aviary, Forest, Desert, Reptiles and Frozen Tundra</h2>
        </div>
      </div>
      <div className="grid col-4">
        <div className="grid col-4">
          {schedule.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              date={schedule.date}
              exhibit_list={schedule.exhibit_list}
              schedule_Id={schedule.id}
              setToggle={setToggle}
              toggle={toggle}
              setLatestSchedule={setLatestSchedule}
              latestSchedule={latestSchedule}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button className="exhibit-button" onClick={() => navigate('/signin')}>
        Sign In
      </button>
    </div>
  )
}

export default Schedule
