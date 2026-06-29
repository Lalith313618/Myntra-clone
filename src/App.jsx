import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bag from "./pages/Bag";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Men's Slim Fit T-Shirt",
    brand: "H&M",
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    rating: 4.2,
    reviews: 1345,
    category: "Men",
  },
  {
    id: 2,
    name: "Women's Floral Dress",
    brand: "Zara",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    rating: 4.5,
    reviews: 892,
    category: "Women",
  },
  {
    id: 3,
    name: "Running Sneakers",
    brand: "Nike",
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    rating: 4.7,
    reviews: 2104,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Women's Kurta Set",
    brand: "W",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
    rating: 4.3,
    reviews: 657,
    category: "Women",
  },
  {
    id: 5,
    name: "Men's Chino Pants",
    brand: "Levi's",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    rating: 4.1,
    reviews: 423,
    category: "Men",
  },
  {
    id: 6,
    name: "Casual Backpack",
    brand: "Wildcraft",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    rating: 4.4,
    reviews: 1789,
    category: "Accessories",
  },
  {
    id: 7,
    name: "Women's Denim Jacket",
    brand: "Roadster",
    price: 1799,
    originalPrice: 3599,
    discount: 50,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=500&fit=crop",
    rating: 4.6,
    reviews: 534,
    category: "Women",
  },
  {
    id: 8,
    name: "Men's Formal Shirt",
    brand: "Arrow",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    rating: 4.0,
    reviews: 876,
    category: "Men",
  },
];

const categories = ["All", "Men", "Women", "Footwear", "Accessories"];
function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const { cart, addToCart } = useContext(CartContext);


  const filteredProducts = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
  const handleAddToCart = (product)=>{

addToCart(product);

};
  const handleWishlist = (product) => {
    if (wishlistItems.includes(product.id)) {
      setWishlistItems(wishlistItems.filter((id) => id !== product.id));
      setWishlistCount((prev) => prev - 1);
    } else {
      setWishlistItems([...wishlistItems, product.id]);
      setWishlistCount((prev) => prev + 1);
    }
  };

return (

<BrowserRouter>
<Routes>
<Route 

path="/bag"element={<Bag cartItems={cartItems}/>
}
/>

<Route 
path="/"
element={

<div className="app">
<Navbar

cartCount={cart.length}
wishlistCount={wishlistCount}
searchQuery={searchQuery}
setSearchQuery={setSearchQuery}
/>

<Hero />
<Categories

categories={categories}
activeCategory={activeCategory}
setActiveCategory={setActiveCategory}
/>

<section className="products-section">

<h2 className="section-title">
  {activeCategory === "All" ? "All Products": activeCategory}</h2>

<div className="products-grid">

{
filteredProducts.map((product)=>(
<ProductCard

key={product.id}
product={product}
isInCart={cart.some(item => item.id === product.id)}
isWishlisted={wishlistItems.includes(product.id)}
onAddToCart={handleAddToCart}
onWishlist={handleWishlist}
/>
))
}
</div>
</section>
<Footer />
</div>
}
/>
</Routes>
</BrowserRouter>
);
}

export default App;