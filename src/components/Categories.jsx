import React from "react";
import "../styles/Categories.css";

const categoryEmoji = {
  All: "🏪",
  Men: "👔",
  Women: "👗",
  Footwear: "👟",
  Accessories: "👜",
 
};

function Categories({ categories, activeCategory, setActiveCategory }) {
  return (
    <section className="categories">
      <div className="categories-inner">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "category-btn--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            <span className="category-emoji">{categoryEmoji[cat]}</span>
            <span className="category-name">{cat}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
