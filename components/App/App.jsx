import '@/style/style.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'
import HomePage from '../HomePage'
import { useEffect } from 'react'
import supabase from '../../lib/supabase'
import useUserStore from '../../store/userStore'

function App () {
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    async function getUser () {
      const { data } = await supabase.auth.getSession()

      if (data.session !== null) {
        setUser(data.session.user)
      } else {
        setUser(null)
      }
    }
    getUser()

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT') {
        setUser(null)
      } else {
        await supabase.auth.getSession()
          .then((res) => {
            const { data } = res
            setUser(data.session !== null ? data.session?.user : null)
          })
      }
    })
  })

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
