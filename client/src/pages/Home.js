import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Schedule from './Schedule'

const Home = () => {
  let navigate = useNavigate()
  const [schedule, setSchedule] = useState({})

  return (
    <div className="home-container col">
      <div>Welcome to Of Birds and Beasts</div>
      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Sign-In
        </button>
      </section>
    </div>
  )
}

export default Home
