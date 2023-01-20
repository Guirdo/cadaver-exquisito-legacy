import { useEffect } from 'react'
import supabase from '../lib/supabase'
import useSessionStore from '../store/sessionStore'

function useSession () {
  const user = useSessionStore((state) => state.user)
  const setUser = useSessionStore((state) => state.setUser)
  const setProfile = useSessionStore((state) => state.setProfile)
  const cleanSession = useSessionStore((state) => state.cleanSession)

  const getProfile = async (id) => {
    await supabase
      .from('profiles')
      .select('nickname')
      .eq('id', id)
      .then(({ data }) => setProfile(data[0]))
  }

  const getUser = async () => {
    await supabase.auth.getSession()
      .then(async ({ data: { session } }) => {
        if (session !== null) {
          await getProfile(session.user.id)
          setUser(session.user)
        } else {
          cleanSession()
        }
      })
  }

  useEffect(() => {
    if (!user) {
      getUser()
    }
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === 'SIGNED_OUT') {
        cleanSession()
      } else {
        getUser()
      }
    })
  })
}

export default useSession
