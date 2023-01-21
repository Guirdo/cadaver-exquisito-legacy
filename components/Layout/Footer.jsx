import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import supabase from '../../lib/supabase'
import useSessionStore from '../../store/sessionStore'

function Footer () {
  const { t } = useTranslation('footer')
  const user = useSessionStore((state) => state.user)
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
            {t('log-out')}
          </span>
      }
      <ul className="footer-list">
        <li className="footer-list-item">
          <a href="#" className="footer__link">{t('privacy')}</a>
        </li>
        <li className="footer-list-item">
          <a href="#" className="footer__link">{t('about')}</a>
        </li>
      </ul>
      <div>
        {t('made-by')}{' '}
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
