import { specialties } from "../data";

export default function Menu() {
  return (
    <section className="menu section" id="menu">
      <p className="eyebrow">Especialidades mencionadas por comensales</p>
      <h2>Menú breve para decidir rápido</h2>
      <div className="menu-list">
        {specialties.map((item) => (
          <article className="menu-item" key={item.title}>
            <span>{item.price}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
