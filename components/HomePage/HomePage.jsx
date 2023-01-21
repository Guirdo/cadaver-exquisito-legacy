import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import useSessionStore from '../../store/sessionStore'
import CreateNickname from './CreateNickname'
import RoomsList from './RoomsList'

function HomePage () {
  const { t } = useTranslation('home')
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
        !profile
          ? <CreateNickname />
          : <>
            <span className='home__greeting'>
              {t('welcome')} {profile.nickname}
            </span>
            <RoomsList />
          </>
      }
    </main>
  )
}

export default HomePage
