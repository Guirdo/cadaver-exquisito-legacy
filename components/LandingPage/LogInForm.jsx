import useForm from '@guirdo/simple-use-form'
import isEmail from 'validator/lib/isEmail'

function LogInForm ({ setHasLoggedIn }) {
  const { formValues, handleOnChange } = useForm({
    email: ''
  })

  const { email } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEmail(email)) {
      setHasLoggedIn(true)
    }
  }

  return (
    <form
      aria-label="Log In Form"
      className="login"
      onSubmit={handleSubmit}
    >
      <label
        className='login__text'
      >
        Ingresa con tu correo electrónico y recibiras un mensaje con el link mágico que te permitira crear una cuenta o ingresar si ya lo haz hecho.
      </label>
      <input
        className='login__input'
        name="email"
        value={email}
        onChange={handleOnChange}
        type="email"
        placeholder="Correo Electrónico"
      />

      <button
        className='login__button'
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

export default LogInForm
