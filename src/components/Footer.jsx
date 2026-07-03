import { restaurant } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Puerto 23</h2>
        <p>Marisquería en Providencia Guadalajara.</p>
      </div>
      <address>{restaurant.address}</address>
      <p>© 2026 Puerto 23 · Sitio demo preparado para despliegue.</p>
    </footer>
  );
}
