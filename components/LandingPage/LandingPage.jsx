import { useState } from 'react'
import Layout from '../Layout'
import LogInForm from './LogInForm'

function LandingPage () {
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  return (
    <Layout>
      <main className='landing'>
        <p
          className='landing__text'
        >
          💀Cadaver Exquisito🍷es un juego de palabras donde tus amigos y tú escriben juntos un poema o historia, pero solo podrás ver lo que la persona anterior escribió. Hasta el final de la partida el resultado que verán sera fruto del consciente colectivo de su grupo.
        </p>
      </main>

      {
        !hasLoggedIn
          ? <LogInForm
          setHasLoggedIn={setHasLoggedIn}
          />
          : <span
            className='landing__validation-message'
            aria-label='Validation message'
          >
            Por favor, revisa tu correo
          </span>
      }
    </Layout>
  )
}

export default LandingPage
