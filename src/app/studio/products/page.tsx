"use client";

import { useState, useEffect } from "react";
import UploadComponent from "@/components/uploadcomponent";

interface Product {
  id: number;
  name: string;
  image: string;
  moq: number;
  category: string;
  description: string;
}

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    category: "woven-nicks",
    moq: "",
    description: ""
  });
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("add");

  // Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !imageUrl) {
      setStatus("❌ Product name and image are required");
      return;
    }

    setSubmitting(true);
    setStatus("📤 Creating product...");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          image: imageUrl,
          category: formData.category,
          moq: parseInt(formData.moq) || 1,
          description: formData.description
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Product created successfully!");
        setFormData({ name: "", category: "woven-nicks", moq: "", description: "" });
        setImageUrl("");
        fetchProducts();
        setTimeout(() => setActiveTab("manage"), 1500);
      } else {
        setStatus(`❌ ${data.error || "Failed to create product"}`);
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    setStatus("🗑️ Deleting product...");
    
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus(`✅ "${name}" deleted successfully!`);
        fetchProducts();
      } else {
        setStatus(`❌ ${data.error || "Failed to delete product"}`);
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again.");
    }
  };

  const categories = [
    { value: "woven-nicks", label: "Woven Nicks", icon: "🔷", color: "bg-purple-600" },
    { value: "woven-laises", label: "Woven Laises", icon: "🔶", color: "bg-pink-600" },
    { value: "woven-monograms", label: "Woven Monograms", icon: "🔹", color: "bg-green-600" },
    { value: "woven-invention", label: "Woven Invention", icon: "🔸", color: "bg-orange-600" },
    { value: "patches", label: "patches", icon: "🔷", color: "bg-purple-600" },
  ];

  const getCategoryColor = (category: string) => {
    const found = categories.find(c => c.value === category);
    return found?.color || "bg-gray-600";
  };

  return (
    <div className="space-y-8">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products Management</h1>
          <p className="text-gray-400 text-sm mt-1">Add, edit or remove products from your store</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("add")}
            className={`px-5 py-2 rounded-xl font-medium transition-all ${
              activeTab === "add"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            ➕ Add Product
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-5 py-2 rounded-xl font-medium transition-all ${
              activeTab === "manage"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            📋 Manage ({products.length})
          </button>
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <div className={`p-4 rounded-xl ${
          status.includes("✅") ? "bg-green-500/10 border border-green-500/50 text-green-400" :
          status.includes("❌") ? "bg-red-500/10 border border-red-500/50 text-red-400" :
          "bg-blue-500/10 border border-blue-500/50 text-blue-400"
        }`}>
          {status}
        </div>
      )}

      {/* Add Product Tab */}
      {activeTab === "add" && (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Product Image *
                </label>
                <UploadComponent onImageUpload={handleImageUpload} currentImage={imageUrl} />
              </div>

              {/* Right Column - Product Details */}
              <div className="space-y-5">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500"
                    placeholder="e.g., Premium Custom Patch"
                    required
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Category *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat.value })}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          formData.category === cat.value
                            ? `${cat.color} border-transparent text-white`
                            : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700"
                        }`}
                      >
                        <span className="text-2xl mr-2">{cat.icon}</span>
                        <span className="font-medium">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Minimum Order Quantity (MOQ) */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Minimum Order Quantity (MOQ) *
                  </label>
                  <input
                    type="number"
                    value={formData.moq}
                    onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500"
                    placeholder="e.g., 50, 100, 500"
                    min="1"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum pieces customer must order</p>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Describe your product..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-800">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-4 rounded-xl font-semibold text-lg transition-all disabled:opacity-50"
              >
                {submitting ? "PROCESSING..." : "🚀 ADD PRODUCT TO STORE"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Manage Products Tab */}
      {activeTab === "manage" && (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">All Products</h2>
            <button
              onClick={fetchProducts}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              🔄 Refresh
            </button>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin text-4xl mb-4">⚙️</div>
              <p className="text-gray-400">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">No products yet</h3>
              <p className="text-gray-400">Add your first product using the "Add Product" tab</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Image</th>
                    <th className="text-left py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Product Name</th>
                    <th className="text-left py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="text-left py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">MOQ</th>
                    <th className="text-right py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-12 h-12 object-cover rounded-lg bg-gray-800"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://via.placeholder.com/50?text=No+Img";
                          }}
                        />
                      </td>
                      <td className="py-4">
                        <span className="font-medium">{product.name}</span>
                      </td>
                      <td className="py-4">
                        <span className={`px-3 py-1 ${getCategoryColor(product.category)} rounded-full text-xs text-white`}>
                          {product.category.replace("-", " ")}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="text-blue-400 font-semibold">
                          {product.moq || 1}+ pieces
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          className="text-red-400 hover:text-red-300 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-red-500/10"
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}