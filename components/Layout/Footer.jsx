import { useNavigate } from 'react-router-dom'
import supabase from '../../lib/supabase'
import useUserStore from '../../store/userStore'

function Footer () {
  const user = useUserStore((state) => state.user)
  const navigate = useNavigate()

  const handleLogOut = async () => {
    await supabase.auth.signOut()
      .then(() => navigate('/'))
  }

  return (
    <footer className="footer">
      {
        user &&
          <span
            className="footer__link"
            onClick={handleLogOut}
          >
            Log out
          </span>
      }
      <ul className="footer-list">
        <li className="footer-list-item">
          <a href="#" className="footer__link">Privacidad</a>
        </li>
        <li className="footer-list-item">
          <a href="#" className="footer__link">Acerca de</a>
        </li>
      </ul>
      <div>
        Hecho con ❤️ por{' '}
        <a
          className="footer__link"
          href="https://github.com/Guirdo"
          target="_blank"
          rel="noreferrer"
        >
          Guirdo
        </a>
      </div>
    </footer>
  )
}

export default Footer
