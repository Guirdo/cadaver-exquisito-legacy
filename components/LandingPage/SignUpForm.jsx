import { useState } from 'react'
import useForm from '@guirdo/simple-use-form'
import validator from 'validator'

function SignUpForm ({ setHasLoggedIn }) {
  const [withPassword, setWithPassword] = useState(false)
  const { formValues, handleOnChange } = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { email, password, confirmPassword } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      setHasLoggedIn(true)
    }
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)) return false

    if (withPassword) {
      if (!validator.isStrongPassword(password)) return false
      if (password !== confirmPassword) return false
    }

    return true
  }

  return (
    <form
      aria-label="Sign Up Form"
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
        <>
          <input
            className='auth__input'
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            aria-label="Password"
            placeholder="Contraseña"
          />

          <input
            className='auth__input'
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            aria-label="Confirm password"
            placeholder="Confirmar"
          />
        </>
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

export default SignUpForm
