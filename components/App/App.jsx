import '@/style/style.scss'
import { Route, Routes } from 'react-router-dom'
import useErrorStore from '../../store/errorStore'
import useSession from '../../hooks/useSession'
import ErrorModal from '../ErrorModal'
import LandingPage from '../LandingPage'
import HomePage from '../HomePage'
import Layout from '../Layout'

function App () {
  const errorMessage = useErrorStore((state) => state.errorMessage)

  useSession()

  return (
    <Layout>
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
      {
        errorMessage && <ErrorModal />
      }
    </Layout>
  )
}

export default App
