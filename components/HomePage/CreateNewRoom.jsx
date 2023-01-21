function CreateNewRoom () {
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
        Crear nuevo cadaver
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
