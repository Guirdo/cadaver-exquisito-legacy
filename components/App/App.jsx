import '@/style/style.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import HomePage from '../HomePage'

function App () {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/home'
        element={<HomePage />}
      />
    </Routes>
  )
}

export default App
