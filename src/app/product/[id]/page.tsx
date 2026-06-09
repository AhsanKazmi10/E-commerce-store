"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0); // Kaunsi image dikhani hai

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(res => {
        if(res.success) setProduct(res.data);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Maan lein product.images ek array hai ["img1.jpg", "img2.jpg", "img3.jpg"]
  const images = product.images || [product.image]; 

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Left: Gallery Section */}
      <div className="flex flex-col gap-4">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img src={images[activeImage]} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-4">
          {images.map((img: string, i: number) => (
            <button key={i} onClick={() => setActiveImage(i)} className="w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-600">
              <img src={img} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Details Section */}
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl text-blue-600 font-bold my-4">PKR {product.moq}</p>
        
        {/* Tabs */}
        <div className="mt-8">
            <h4 className="font-bold border-b pb-2">Product Details</h4>
            <p className="mt-4 text-gray-600">{product.description}</p>
            
            <h4 className="font-bold border-b pb-2 mt-6">Specifications</h4>
            <ul className="mt-4 list-disc pl-5 text-gray-600">
                <li>Material: High-Density Damask</li>
                <li>Size: Custom</li>
                <li>Fold: Center Fold</li>
            </ul>
        </div>
      </div>
    </div>
  );
}