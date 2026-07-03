import { restaurant } from "../data";

export default function Location() {
  return (
    <section className="location section" id="ubicacion">
      <div className="location-card">
        <p className="eyebrow">Ubicación</p>
        <h2>Av. Providencia 2951</h2>
        <p>{restaurant.address}</p>
        <p>{restaurant.hours} · Tel. {restaurant.phone}</p>
        <div className="hero-actions">
          <a className="button primary" href={restaurant.maps} target="_blank" rel="noreferrer">Abrir Google Maps</a>
          <a className="button ghost dark" href={restaurant.whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
        </div>
      </div>
      <iframe title="Mapa de Puerto 23 en Providencia Guadalajara" src="https://www.google.com/maps?q=20.6988879,-103.3860588&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
