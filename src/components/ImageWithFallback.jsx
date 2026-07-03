export default function ImageWithFallback({ src, alt, className = "" }) {
  return (
    <div className={`image-shell ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={(event) => event.currentTarget.classList.add("is-hidden")} />
      <div className="image-fallback" aria-hidden="true">
        <span>Puerto 23</span>
      </div>
    </div>
  );
}
