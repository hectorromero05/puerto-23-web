import { restaurant } from "../data";
import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">{restaurant.category} · Providencia Guadalajara</p>
        <h1>{restaurant.tagline}</h1>
        <p className="hero-lead">Puerto 23 reúne tostadas, tacos y platos marinos en una esquina fresca de Av. Providencia, con servicio para comer ahí, llevar o pedir a domicilio.</p>
        <div className="hero-actions">
          <a className="button primary" href={restaurant.whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
          <a className="button ghost" href={restaurant.maps} target="_blank" rel="noreferrer">Cómo llegar</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Composición visual costera de Puerto 23">
        <ImageWithFallback src="/hero.jpg" alt="Platillo representativo de mariscos en Puerto 23" className="hero-photo" />
        <div className="rating-card"><strong>{restaurant.rating}</strong><span>★ en Google · {restaurant.reviews} reseñas</span></div>
      </div>
    </header>
  );
}
