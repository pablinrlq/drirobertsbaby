export default function About(): JSX.Element {
  return (
    <section id="sobre" className="section section-about">
      <div className="container two-col">
        <div className="col-label">
          <span className="vertical-line" />
          <h2 className="section-title">Sobre mim</h2>
        </div>
        <div className="col-content">
          <p className="lead">
            Há mais de duas décadas, dedico minha vida a estar ao lado de mulheres em um dos
            momentos mais transformadores que existem: o nascimento de um filho.
          </p>
          <p>
            Sou <strong>enfermeira obstetra</strong> e <strong>especialista em saúde da família</strong>,
            formada com a missão de oferecer um cuidado que vai muito além da técnica.
            Acredito em um parto onde a mulher é a protagonista — respeitada em seu tempo,
            seu corpo e suas escolhas.
          </p>
          <p>
            Meu trabalho une evidência científica, escuta atenta e o toque humano que cada
            gestação merece. Acompanho cada família com presença real, do pré-natal ao pós-parto,
            em casa, em maternidade ou onde for mais seguro e acolhedor para você.
          </p>
          <div className="signature">
            <span>— Adriana Roberto</span>
            <small>COREN/MG · Enfermeira Obstetra</small>
          </div>
        </div>
      </div>
    </section>
  );
}
