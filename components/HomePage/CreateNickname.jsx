import useForm from '@guirdo/simple-use-form'
import validator from 'validator'
import supabase from '../../lib/supabase'
import useSessionStore from '../../store/sessionStore'
import useErrorStore from '../../store/errorStore'
import { useTranslation } from 'react-i18next'

function CreateNickname () {
  const { t } = useTranslation(['home', 'common'])
  const user = useSessionStore((state) => state.user)
  const setProfile = useSessionStore((state) => state.setProfile)
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
          {t('for-starting')}
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
          {t('valid-characters')}
        </small>

        <button
          className='button button--success create-nickname__button'
          type='submit'
        >
          {t('confirm', { ns: 'common' })}
        </button>
      </form>
    </div>
  )
}

export default CreateNickname
