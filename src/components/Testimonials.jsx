import { restaurant, reviews } from "../data";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="resenas">
      <p className="eyebrow">Reseñas</p>
      <h2>{restaurant.rating} estrellas con {restaurant.reviews} opiniones</h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review" key={review.name}>
            <div aria-label="5 estrellas">★★★★★</div>
            <p>“{review.text}”</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
