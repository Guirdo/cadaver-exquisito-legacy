import useForm from '@guirdo/simple-use-form'

function CreateNickname () {
  const { formValues, handleOnChange } = useForm({
    nickname: ''
  })

  const { nickname } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      className="create-nickname"
      onSubmit={handleSubmit}
    >
      <label className="create-nickname__text">
        Para empezar a jugar primero necesitas crear un nombre de usuario.
      </label>

      <input
        className="create-nickname__input"
        aria-label='Nickname'
        type="text"
        value={nickname}
        name="nickname"
        onChange={handleOnChange}
      />

      <button
        className='button button--success create-nickname__button'
        type='submit'
      >
        Confirmar
      </button>
    </form>
  )
}

export default CreateNickname
