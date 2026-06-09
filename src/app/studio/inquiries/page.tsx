"use client";

import { useState, useEffect } from "react";

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  product_type: string;
  message: string;
  design_image: string;
  status: string;
  created_at: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      console.log("Fetching inquiries...");
      
      const response = await fetch("/api/inquiries");
      const data = await response.json();
      
      console.log("Response:", data);
      
      if (data.success) {
        setInquiries(data.data);
      } else {
        setError(data.error || "Failed to load inquiries");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/inquiries/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        setInquiries(prev => 
          prev.map(inq => 
          inq.id === id ? { ...inq, status } : inq
        )
      );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'approved': return 'bg-green-500/20 text-green-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⚙️</div>
          <p>Loading inquiries...</p>
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
          onClick={fetchInquiries}
          className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Custom Artwork Requests</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage customer design inquiries ({inquiries.length} total)
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="text-center py-20 bg-gray-900/50 rounded-2xl">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold mb-2">No inquiries yet</h3>
          <p className="text-gray-400">Customer inquiries will appear here</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-gray-900/50 rounded-2xl border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900">
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Date</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Customer</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Contact</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Product</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Message</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Design</th>
                <th className="text-left py-4 px-6 text-xs uppercase tracking-wider">Status</th>
               </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-sm">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                    <div className="text-xs text-gray-500">
                      {new Date(inquiry.created_at).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">{inquiry.name}</div>
                    <div className="text-xs text-gray-500">{inquiry.email}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm">{inquiry.phone || "—"}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-xs">
                      {inquiry.product_type || "—"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm max-w-xs truncate" title={inquiry.message}>
                      {inquiry.message}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {inquiry.design_image ? (
                      <a 
                        href={inquiry.design_image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                      >
                        📷 View Design
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm">No image</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={inquiry.status}
                      onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor(inquiry.status)} border-none outline-none cursor-pointer bg-gray-800`}
                    >
                      <option value="pending">⏳ Pending</option>
                      <option value="approved">✅ Approved</option>
                      <option value="rejected">❌ Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}