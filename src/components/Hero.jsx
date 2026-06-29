import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";

const banners = [
  {
    id: 1,
    title: "END OF REASON SALE",
    subtitle: "50–80% OFF",
    description: "On Top Brands & Trending Styles",
    bg: "linear-gradient(135deg, #ff3f6c 0%, #ff8c42 100%)",
    emoji: "🔥",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    subtitle: "SUMMER 2024",
    description: "Fresh Styles for Every Occasion",
    bg: "linear-gradient(135deg, #6c63ff 0%, #3ec6e0 100%)",
    emoji: "✨",
  },
  {
    id: 3,
    title: "BRAND FACTORY",
    subtitle: "TOP BRANDS",
    description: "Nike, Adidas, Zara & More",
    bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    emoji: "👟",
  },
];
function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const goTo = (index) => setCurrent(index);

  return (
    <section className="hero">
      {}
      <div
        className="hero-banner"
        style={{ background: banners[current].bg }}
      >
        <div className="hero-content">
          <span className="hero-emoji">{banners[current].emoji}</span>
          <h1 className="hero-title">{banners[current].title}</h1>
          <p className="hero-subtitle">{banners[current].subtitle}</p>
          <p className="hero-description">{banners[current].description}</p>
          <button className="hero-btn">SHOP NOW</button>
        </div>
      </div>
      {}
      <div className="hero-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "dot--active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
