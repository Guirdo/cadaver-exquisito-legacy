import { useEffect, useState } from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import useSessionStore from '../../store/sessionStore'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function LandingPage () {
  const { t } = useTranslation('landing')
  const user = useSessionStore((state) => state.user)
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) {
      navigate('/home')
    }
  }, [user])

  return (
    <main className='landing'>
      <p
        className='landing__text'
      >
        {t('description')}
      </p>

      {
        isSigningIn
          ? <SignInForm />
          : <>
            {
              !hasLoggedIn
                ? <SignUpForm
                  setHasLoggedIn={setHasLoggedIn}
                />
                : <span
                  className='landing__validation-message'
                  aria-label='Validation message'
                >
                  {t('validation')}
                </span>
            }
          </>
      }

      <span
        className='landing__link'
        aria-label='signing option'
        onClick={() => setIsSigningIn(!isSigningIn)}
      >
        {
          isSigningIn
            ? t('sign-up')
            : t('sign-in')
        }
      </span>
    </main>
  )
}

export default LandingPage
