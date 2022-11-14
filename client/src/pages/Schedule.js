import { useEffect, useState } from 'react'
import { GetSchedules } from '../services/ScheduleServices'
import { useNavigate } from 'react-router-dom'

const Schedule = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const handleSchedule = async () => {
      const data = await GetSchedules()
      setSchedule(data)
    }
    handleSchedule()
  }, [])

  return user && authenticated ? (
    <div className="grid col-4">
      {schedule.map((schedule) => (
        <div className="card" key={schedule.id}>
          <h3>{schedule.title}</h3>
          <div>
            <img src={schedule.image} alt="post" />
          </div>
          <p>{schedule.body.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Schedule
