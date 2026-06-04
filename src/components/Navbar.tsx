import Logo from './Logo';
import { CONTACT, whatsappUrl } from '../data/contact';

export default function Navbar(): JSX.Element {
  const link = whatsappUrl(
    CONTACT.phone,
    'Olá Adriana, gostaria de agendar uma reunião online para conhecer seu trabalho.',
  );

  return (
    <header className="navbar">
      <div className="nav-container">
        <Logo />
        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#momentos">Momentos</a>
          <a href="#filosofia">Filosofia</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-nav">
          Agendar Reunião
        </a>
      </div>
    </header>
  );
}
