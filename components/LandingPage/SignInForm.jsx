import { useState } from 'react'
import useForm from '@guirdo/simple-use-form'
import isEmail from 'validator/lib/isEmail'

function SignInForm ({ setHasLoggedIn }) {
  const [withPassword, setWithPassword] = useState(false)
  const { formValues, handleOnChange } = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEmail(email)) {
      setHasLoggedIn(true)
    }
  }

  return (
    <form
      aria-label="Sign In Form"
      className="auth"
      onSubmit={handleSubmit}
    >
      <label
        className='auth__text'
      >
        Ingresa con tu correo electrónico y recibiras un mensaje con el link mágico que te permitira crear una cuenta o ingresar si ya lo haz hecho.
      </label>
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
        Ingresar con contraseña
      </span>

      <button
        className='auth__button'
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

export default SignInForm
