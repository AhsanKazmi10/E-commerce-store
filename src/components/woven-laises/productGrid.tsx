"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Product type
interface Product {
  id: number;
  name: string;
  image: string;
  moq: number;  // ✅ MOQ instead of price
  description: string;
  category: string;
}

export default function WovenlaisesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products for this category
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products?category=woven-laises");
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      } else {
        setError("Failed to load products");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section - Tumhara existing hero section yahan rahega */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Woven Laises</h1>
          <p className="text-xl md:text-2xl">Premium quality woven patches</p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Collection</h2>
          <p className="text-gray-400">Discover our premium woven laises collection</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-spin">⚙️</div>
              <p className="text-gray-400">Loading products...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-red-400">{error}</p>
            <button 
              onClick={fetchProducts}
              className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🪡</div>
                <h3 className="text-2xl font-semibold mb-2">No products yet</h3>
                <p className="text-gray-400">Check back soon for new arrivals!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id}>
                    <div className="group bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                      {/* Product Image */}
                      <div className="aspect-square relative overflow-hidden bg-gray-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                          {product.description || "Premium quality woven patch"}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 font-bold text-xl">
                            PKR {product.moq.toLocaleString()}
                          </span>
                          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition-colors">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}