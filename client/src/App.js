import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Schedule from './pages/Schedule'
import Home from './pages/Home'
import './App.css'
import { useState, useEffect } from 'react'
import Exhibits from './pages/Exhibits'
import Animals from './pages/Animals'
import ExhibitCard from './components/ExhibitCard'
import AnimalCard from './components/AnimalCard'
import ExhibitAnimals from './pages/ExhibitAnimals'
import { NavLink } from 'react-router-dom'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [schedule, setSchedule] = useState({})
  const [scheduleExists, setScheduleExists] = useState(false)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    console.log('This is check token', user)
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      console.log('Inside useEffect')
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/schedule"
            element={
              <Schedule
                user={user}
                authenticated={authenticated}
                schedule={schedule}
                setSchedule={setSchedule}
                scheduleExists={scheduleExists}
                setScheduleExists={setScheduleExists}
              />
            }
          />
          <Route
            path="/schedule/:id"
            element={<Schedule user={user} authenticated={authenticated} />}
          />
          <Route
            path="/exhibit"
            element={
              <Exhibits
                setSchedule={setSchedule}
                schedule={schedule}
                scheduleExists={scheduleExists}
                setScheduleExists={setScheduleExists}
              />
            }
          />
          <Route path="/animal" element={<Animals />} />
          <Route path="/exhibit/:id" element={<ExhibitAnimals />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
