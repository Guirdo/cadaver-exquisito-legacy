import useForm from '@guirdo/simple-use-form'
import validator from 'validator'
import supabase from '../../lib/supabase'
import useUserStore from '../../store/userStore'
import useErrorStore from '../../store/errorStore'

function CreateNickname () {
  const user = useUserStore((state) => state.user)
  const setProfile = useUserStore((state) => state.setProfile)
  const setErrorMessage = useErrorStore((state) => state.setErrorMessage)
  const { formValues, handleOnChange } = useForm({
    nickname: ''
  })

  const { nickname } = formValues

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isFormValid()) {
      const { data, error } = await supabase
        .from('profiles')
        .insert({ id: user.id, nickname })
        .select()

      error
        ? setErrorMessage(error.message)
        : setProfile(data)
    } else {
      setErrorMessage('Invalid nickname')
    }
  }

  const isFormValid = () => {
    if (!validator.isLength(nickname, { min: 3, max: 32 })) {
      return false
    }

    return validator.matches(nickname, /^[a-zA-Z0-9][-a-z0-9_]{2,31}$/)
  }

  return (
    <div
      className="create-nickname"
    >
      <form
        className='create-nickname-form'
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
          placeholder="Nickname"
        />

        <small className='create-nickname__small'>
          Solo carácteres alfanuméricos y guiones bajos
        </small>

        <button
          className='button button--success create-nickname__button'
          type='submit'
        >
          Confirmar
        </button>
      </form>
    </div>
  )
}

export default CreateNickname
