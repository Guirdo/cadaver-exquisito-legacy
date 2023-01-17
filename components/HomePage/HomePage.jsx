import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../../store/userStore'
import Layout from '../Layout'

function HomePage () {
  const user = useUserStore((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user])

  return (
    <Layout>
      <main className='home'>
        <div className='home-game-list'>
          <div className='game-card'>
            <span className='game__title'>
              Crear nuevo cadaver
            </span>
            <button
              className='game__create-new-button'
              aria-label='Create new room'
            >
              +
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
