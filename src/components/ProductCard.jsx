import React from "react";
import "../Styles/ProductCard.css";

function ProductCard({ product, isInCart, isWishlisted, onAddToCart, onWishlist }) {
  const { name, brand, price, originalPrice, discount, image, rating, reviews } = product;
  return (
    <div className="product-card">
      {}
      <div className="product-image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
          loading="lazy"
        />
        {}
        <button
          className={`wishlist-btn ${isWishlisted ? "wishlist-btn--active" : ""}`}
          onClick={() => onWishlist(product)}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>

        {}
        <span className="discount-badge">{discount}% OFF</span>
      </div>
      {}
      <div className="product-info">
        <p className="product-brand">{brand}</p>
        <p className="product-name">{name}</p>

        {}
        <div className="product-price-row">
          <span className="product-price">₹{price.toLocaleString("en-IN")}</span>
          <span className="product-original">₹{originalPrice.toLocaleString("en-IN")}</span>
          <span className="product-discount">({discount}% OFF)</span>
        </div>
        {}
        <div className="product-rating-row">
          <span className="rating-badge">⭐ {rating}</span>
          <span className="rating-reviews">| {reviews.toLocaleString("en-IN")}</span>
        </div>
        {}
        <button
          className={`add-to-bag-btn ${isInCart ? "add-to-bag-btn--added" : ""}`}
          onClick={() => onAddToCart(product)}
          disabled={isInCart}>{isInCart ? "✅ Added to Bag" : "🛍️ Add to Bag"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
