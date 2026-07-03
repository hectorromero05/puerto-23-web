import ImageWithFallback from "./ImageWithFallback";

const images = [
  ["/galeria1.jpg", "Tostadas y mariscos frescos de Puerto 23"],
  ["/galeria2.jpg", "Ambiente de marisquería en Providencia"],
  ["/galeria3.jpg", "Platillos para compartir en Puerto 23"],
];

export default function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="section-heading">
        <p className="eyebrow">Galería</p>
        <h2>Azul, coral y mesa servida</h2>
      </div>
      <div className="gallery-grid">
        {images.map(([src, alt], index) => <ImageWithFallback key={src} src={src} alt={alt} className={`gallery-photo photo-${index + 1}`} />)}
      </div>
    </section>
  );
}
