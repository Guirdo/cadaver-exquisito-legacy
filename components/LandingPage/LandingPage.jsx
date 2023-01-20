import { useEffect, useState } from 'react'
import Layout from '../Layout'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import useSessionStore from '../../store/sessionStore'
import { useNavigate } from 'react-router-dom'

function LandingPage () {
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
    <Layout>
      <main className='landing'>
        <p
          className='landing__text'
        >
          💀Cadaver Exquisito🍷es un juego de palabras donde tus amigos y tú escriben juntos un poema o historia, pero solo podrás ver lo que la persona anterior escribió. Hasta el final de la partida el resultado que verán sera fruto del consciente colectivo de su grupo.
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
                    Por favor, revisa tu correo
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
              ? 'Registrate'
              : 'Inicia sesión'
          }
        </span>
      </main>
    </Layout>
  )
}

export default LandingPage
