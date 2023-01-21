import { useTranslation } from 'react-i18next'

function CreateNewRoom () {
  const { t } = useTranslation('home')
  const handleClick = () => {
    console.log('click')
  }

  return (
    <div
      className='room-card'
      role="button"
      onClick={handleClick}
    >
      <span className='room-card__title'>
        {t('create-new-room')}
      </span>
      <span
        className='room-card__create-button'
        aria-label='Create new room'
      >
        +
      </span>
    </div>
  )
}

export default CreateNewRoom
