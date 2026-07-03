import { restaurant } from "../data";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio de Puerto 23">
        <img src="/logo.png" alt="Logo Puerto 23" onError={(event) => event.currentTarget.classList.add("is-hidden")} />
        <span>Puerto 23</span>
      </a>
      <div className="nav-links">
        <a href="#ambiente">Ambiente</a>
        <a href="#menu">Menú</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Ubicación</a>
      </div>
      <a className="nav-cta" href={restaurant.whatsapp} target="_blank" rel="noreferrer" aria-label="Reservar en Puerto 23 por WhatsApp">Reservar</a>
    </nav>
  );
}
