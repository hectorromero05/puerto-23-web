import { restaurant } from "../data";

export default function About() {
  return (
    <section className="about section" id="ambiente">
      <div>
        <p className="eyebrow">Ambiente de costa en la ciudad</p>
        <h2>Una marisquería para sobremesa, familia y antojo fresco.</h2>
      </div>
      <div className="about-grid">
        <p>El perfil real de Puerto 23 apunta a comida marina en Providencia: tostada de atún, pulpo a las brasas, ceviche especial, tacos y aguachile aparecen entre búsquedas, fotos y reseñas.</p>
        <ul>
          <li>Consumo en el lugar</li>
          <li>Para llevar</li>
          <li>Entrega a domicilio</li>
          <li>{restaurant.price}</li>
        </ul>
      </div>
    </section>
  );
}
