import Logo from './Logo';
import { CONTACT, whatsappUrl } from '../data/contact';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo variant="footer" />
          <p className="footer-tag">
            Cuidando do início de cada nova história, com amor e ciência, há mais de 25 anos.
          </p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#momentos">Momentos</a>
            </li>
            <li>
              <a href="#filosofia">Filosofia</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>📍 {CONTACT.city}</li>
            <li>📱 {CONTACT.phoneDisplay}</li>
            <li>
              <a href={whatsappUrl(CONTACT.phone, 'Olá Adriana!')} target="_blank" rel="noopener noreferrer">
                WhatsApp direto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {CONTACT.name} · {CONTACT.title} · Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
