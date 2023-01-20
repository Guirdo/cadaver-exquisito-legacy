import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSessionStore from '../../store/sessionStore'
import CreateNickname from './CreateNickname'
import GameList from './GameList'

function HomePage () {
  const user = useSessionStore((state) => state.user)
  const profile = useSessionStore((state) => state.profile)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user])

  return (
    <main className='home'>
      {
        profile
          ? <GameList />
          : <CreateNickname />
      }
    </main>
  )
}

export default HomePage
