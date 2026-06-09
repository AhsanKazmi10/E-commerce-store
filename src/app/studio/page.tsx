"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalProducts: 0,
    labels: 0,
    patches: 0,
    badges: 0,
    embroidery: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/stats');
      const data = await res.json();
      
      if (res.ok) {
        setStats(data);
      } else {
        setError(data.error || "Failed to load stats");
      }
    } catch (err) {
      setError("Network error. Please refresh.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickUpload = () => {
    router.push('/studio/products');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⚙️</div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-red-400">{error}</p>
        <button 
          onClick={fetchStats}
          className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Category mapping for display
  const categories = [
    { key: 'labels', label: 'Woven Labels', value: stats.labels, color: 'bg-blue-600', icon: '🏷️' },
    { key: 'patches', label: 'Custom Patches', value: stats.patches, color: 'bg-purple-600', icon: '🪡' },
    { key: 'badges', label: 'Silicon Badges', value: stats.badges, color: 'bg-orange-600', icon: '⭐' },
    { key: 'embroidery', label: 'Embroidery', value: stats.embroidery, color: 'bg-green-600', icon: '🧵' },
  ];

  return (
    <div className="space-y-10">
      {/* Top Header */}
      <div>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">
          Welcome back, <span className="text-blue-600">Ahsan</span>
        </h1>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mt-2">
          System Overview & Real-time Traffic
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Products Card */}
        <div className="bg-[#111] border border-gray-900 p-8 rounded-3xl group hover:border-blue-600 transition-all">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Total Products</p>
            <span className="text-2xl">📦</span>
          </div>
          <h2 className="text-5xl font-black mt-2 group-hover:text-blue-500 transition-colors">
            {stats.totalProducts}
          </h2>
          <div className="mt-4 h-1 w-10 bg-blue-600 rounded-full"></div>
          <p className="text-[10px] text-gray-500 mt-2">Across all categories</p>
        </div>

        {/* Categories Card */}
        <div className="bg-[#111] border border-gray-900 p-8 rounded-3xl">
          <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Categories</p>
          <h2 className="text-5xl font-black mt-2">4</h2>
          <div className="mt-4 flex gap-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">Active collections</p>
        </div>

        {/* Live Status Card */}
        <div className="bg-[#111] border border-gray-900 p-8 rounded-3xl">
          <p className="text-gray-600 uppercase tracking-widest text-[10px] font-bold">Server Status</p>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full absolute opacity-75"></div>
            <h2 className="text-xl font-bold uppercase italic">Live</h2>
          </div>
          <p className="text-[10px] text-green-500/50 mt-2">Supabase Connected</p>
        </div>

        {/* Quick Action Card */}
        <div 
          onClick={handleQuickUpload}
          className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-white font-black uppercase italic leading-tight">
            Need to add<br/>new stock?
          </h3>
          <div className="flex items-center justify-between mt-4">
            <button className="bg-white text-black text-[10px] font-black uppercase py-2 px-4 rounded-lg group-hover:scale-105 transition-transform">
              Quick Upload →
            </button>
            <span className="text-3xl">📤</span>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#0a0a0a] border border-gray-900 rounded-3xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold uppercase tracking-widest">Category Wise Stock</h3>
          <p className="text-xs text-gray-500">Total: {stats.totalProducts} items</p>
        </div>
        
        <div className="space-y-6">
          {categories.map((cat) => (
            <StatBar 
              key={cat.key}
              label={cat.label}
              icon={cat.icon}
              count={cat.value}
              total={stats.totalProducts}
              color={cat.color}
            />
          ))}
        </div>

        {/* Empty state */}
        {stats.totalProducts === 0 && (
          <div className="text-center py-10">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-gray-400 text-sm">No products yet</p>
            <button
              onClick={handleQuickUpload}
              className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-sm"
            >
              Add your first product
            </button>
          </div>
        )}
      </div>

      {/* Recent Activity (Optional) */}
      <div className="bg-[#0a0a0a] border border-gray-900 rounded-3xl p-8">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={handleQuickUpload}
            className="bg-gray-900 hover:bg-gray-800 p-4 rounded-xl text-left transition-all"
          >
            <span className="text-2xl block mb-2">➕</span>
            <span className="font-bold text-sm">Add Product</span>
            <p className="text-gray-500 text-[10px] mt-1">Upload new items to store</p>
          </button>
          
          <button className="bg-gray-900 hover:bg-gray-800 p-4 rounded-xl text-left transition-all">
            <span className="text-2xl block mb-2">🖼️</span>
            <span className="font-bold text-sm">Manage Images</span>
            <p className="text-gray-500 text-[10px] mt-1">Update product photos</p>
          </button>
          
          <button className="bg-gray-900 hover:bg-gray-800 p-4 rounded-xl text-left transition-all">
            <span className="text-2xl block mb-2">📊</span>
            <span className="font-bold text-sm">View Reports</span>
            <p className="text-gray-500 text-[10px] mt-1">Analytics & insights</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper component for progress bar
function StatBar({ label, icon, count, total, color }: any) {
  const percentage = total > 0 ? (count / total) * 100 : 0;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
        </div>
        <span className="text-xs text-gray-400">
          {count} {count === 1 ? 'item' : 'items'}
          <span className="text-gray-600 ml-1">({percentage.toFixed(0)}%)</span>
        </span>
      </div>
      <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
        <div 
          className={`${color} h-full transition-all duration-1000 ease-out rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}