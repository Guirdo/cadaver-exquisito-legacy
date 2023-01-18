import { useState } from 'react'
import useForm from '@guirdo/simple-use-form'
import isEmail from 'validator/lib/isEmail'
import supabase from '../../lib/supabase'
import useErrorStore from '../../store/errorStore'

function SignInForm () {
  const setErrorMessage = useErrorStore((state) => state.setErrorMessage)
  const [withPassword, setWithPassword] = useState(false)
  const { formValues, handleOnChange } = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isEmail(email)) {
      let response
      if (withPassword) {
        response = await supabase.auth.signInWithPassword({ email, password })
      } else {
        response = await supabase.auth.signInWithOtp({ email })
      }

      response.error && setErrorMessage(response.error.message)
    }
  }

  return (
    <form
      aria-label="Sign In Form"
      className="auth"
      onSubmit={handleSubmit}
    >
      <h2>Inicia sesión</h2>
      <input
        className='auth__input'
        name="email"
        value={email}
        onChange={handleOnChange}
        type="email"
        placeholder="Correo Electrónico"
      />

      {
        withPassword &&
        <input
          className='auth__input'
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Contraseña"
        />
      }

      <span
        className="auth__link"
        aria-label="with password"
        onClick={() => setWithPassword(!withPassword)}
      >
        {
          withPassword
            ? 'Ingresar con link mágico'
            : 'Ingresar con contraseña'
        }
      </span>

      <button
        className='button button--primary button--block auth__button'
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

export default SignInForm
