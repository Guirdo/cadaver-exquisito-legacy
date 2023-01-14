function Footer () {
  return (
    <footer className="footer">
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
