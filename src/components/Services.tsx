import { SERVICES, type Service } from '../data/services';

function ServiceCard({ service }: { readonly service: Service }): JSX.Element {
  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}

export default function Services(): JSX.Element {
  return (
    <section id="servicos" className="section section-services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">O que ofereço</span>
          <h2 className="section-title centered">Cuidado em cada fase</h2>
          <p className="section-sub">
            Um acompanhamento completo, pensado para respeitar seu ritmo, seu corpo e a chegada da sua bebê.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
