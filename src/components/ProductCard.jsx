export default function ProductCard({ product }) {
  return (
    <div tabIndex="0" className="product-card" aria-label={product.name}>
      <img src={product.image} alt={`תמונה של ${product.name}`} loading="lazy" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>₪{product.price}</strong>
      <button aria-label="הוסף לעגלה">הוסף לעגלה</button>
    </div>
  );
}
