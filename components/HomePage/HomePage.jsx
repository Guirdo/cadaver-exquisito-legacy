import Layout from '../Layout'

function HomePage () {
  return (
    <Layout>
      <main className='home'>
        <div className='home-game-list'>
          <div className='game-card'>
            <span className='game__title'>
              Crear nuevo cadaver
            </span>
            <button
              className='game__create-new-button'
              aria-label='Create new room'
            >
              +
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
