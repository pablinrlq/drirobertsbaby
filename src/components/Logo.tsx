interface LogoProps {
  readonly variant?: 'default' | 'footer';
}

export default function Logo({ variant = 'default' }: LogoProps): JSX.Element {
  const className = variant === 'footer' ? 'footer-logo' : 'logo';
  return (
    <a href="#hero" className={className}>
      <span className="logo-mark">A</span>
      <span className="logo-text">
        Adriana Roberto
        <small>Enfermeira Obstetra</small>
      </span>
    </a>
  );
}
