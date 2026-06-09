'use client';

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    type: 'Woven Label', // Default value
    message: '' 
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/send-email', { // Yahan apna sahi API path dein
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('✅ Inquiry sent successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', type: 'Woven Label', message: '' });
      } else {
        setStatus(`❌ Error: ${result.error || 'Failed to send'}`);
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send us an Inquiry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required className="p-3 border rounded-lg" />
            <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required className="p-3 border rounded-lg" />
            <input name="phone" placeholder="WhatsApp / Phone" onChange={handleChange} value={formData.phone} required className="p-3 border rounded-lg" />
            <select name="type" onChange={handleChange} value={formData.type} className="p-3 border rounded-lg bg-white">
              <option value="Woven Label">Woven Label</option>
              <option value="Printed Label">Printed Label</option>
              <option value="Hang Tag">Hang Tag</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <textarea name="message" placeholder="Your requirements..." onChange={handleChange} value={formData.message} required className="w-full p-3 border rounded-lg mt-4" rows={4} />
          
          <button 
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-lg text-white font-bold ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Sending...' : 'Submit Inquiry'}
          </button>
          
          {status && <p className="mt-4 text-center font-semibold">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;