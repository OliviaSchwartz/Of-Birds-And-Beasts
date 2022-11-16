import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Schedule from './Schedule'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <div className="home-things">
        <h1 className="welcome-message">Of Birds and Beasts</h1>
        <img src="https://i.etsystatic.com/5577241/r/il/0f1ae8/3050339649/il_fullxfull.3050339649_mqe7.jpg" />
      </div>
      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here to Sign-In
        </button>
        <button onClick={() => navigate('/register')}>
          Click Here to Register
        </button>
      </section>
    </div>
  )
}

export default Home
