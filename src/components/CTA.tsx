import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT, whatsappUrl } from '../data/contact';

export default function CTA(): JSX.Element {
  const link = whatsappUrl(
    CONTACT.phone,
    'Olá Adriana, gostaria de agendar uma reunião online para conhecer seu trabalho de parto humanizado.',
  );

  return (
    <section id="contato" className="section section-cta">
      <div className="container cta-container">
        <div className="cta-text">
          <span className="eyebrow">Vamos conversar</span>
          <h2 className="section-title">
            Agende uma <em>reunião online</em> sem compromisso
          </h2>
          <p>
            Um bate-papo tranquilo para você me conhecer, contar sua história e tirar todas as suas dúvidas.
            Responderei pessoalmente pelo WhatsApp para combinarmos o melhor horário.
          </p>
          <div className="cta-buttons">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <WhatsAppIcon size={22} />
              Marcar reunião pelo WhatsApp
            </a>
          </div>
          <div className="cta-info">
            <div>
              <strong>📍 Atendimento:</strong> {CONTACT.city} e região metropolitana de BH
            </div>
            <div>
              <strong>📱 WhatsApp:</strong> {CONTACT.phoneDisplay}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
