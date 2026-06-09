"use client";

import React, { useState, useRef } from 'react';
import { Upload, MessageSquare, Send, FileText, X, FileCheck, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 🌍 Full Global Country Codes Array for International Orders
const ALL_COUNTRIES = [
  { code: "+92", label: "PK (+92)" },
  { code: "+1", label: "US/CA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+966", label: "SA (+966)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
  { code: "+91", label: "IN (+91)" },
  { code: "+86", label: "CN (+86)" },
  { code: "+81", label: "JP (+81)" },
  { code: "+39", label: "IT (+39)" },
  { code: "+31", label: "NL (+31)" },
  { code: "+34", label: "ES (+34)" },
  { code: "+bd", label: "BD (+880)", override: "+880" },
];

const CustomLabelProcess = () => {
  const [formData, setFormData] = useState({ 
    name: "", email: "", phone: "", countryCode: "+92", type: "Main Woven Label", message: "" 
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // 🚀 New State for Professional Success Banner Popups
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const CLOUD_NAME = "dgzcqgmxq"; 
  const UPLOAD_PRESET = "hb_enterprises"; 

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (selectedFile: File) => {
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Pehle design upload karein!");
    setLoading(true);

    try {
      let finalImageUrl = "No Image";
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", UPLOAD_PRESET);
        const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: "POST",
          body: data
        });
        const cloudData = await cloudRes.json();
        finalImageUrl = cloudData.secure_url;
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: `${formData.countryCode}${formData.phone}`, imageUrl: finalImageUrl }),
      });

      if (response.ok) {
        // Purana Alert Window Remove -> Custom Modal Pop Open
        setShowSuccessModal(true);
        setPreview(null); 
        setFile(null);
        setFormData({ ...formData, name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      alert("Error: Connection check karein.");
    } finally { setLoading(false); }
  };

  return (
    <section className="border-gray-800 py-12 md:py-24 px-4 md:px-6 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: items-start aur h-full fixes to prevent crowding on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Process Info (Sticky only on Large Desktop) */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-24 w-full">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
                <span className="text-blue-600">Custom</span> Design Process
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Upload your artwork and let our experts handle the rest. We specialize in transforming your brand identity into high-precision woven designs with absolute thread-level accuracy.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: <Upload className="w-5 h-5" />, title: "Upload Artwork", desc: "provide your artwork in AI, PDF, EPS, or high-resolution PNG" },
                { icon: <FileText className="w-5 h-5" />, title: "Spec Selection", desc: "Select your preferred thread quality, density, and professional fold type to match your garment" },
                { icon: <MessageSquare className="w-5 h-5" />, title: "Digital Proof", desc: "Review and refine your digital layout before we proceed to the weaving phase." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600 flex-shrink-0">{step.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{step.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Upload & Form */}
          <div className="space-y-6 w-full">
            <input 
              ref={fileInputRef} type="file" className="hidden" 
              onChange={(e) => e.target.files && handleFile(e.target.files[0])}
              accept="image/*,.pdf,.ai"
            />
            
            {/* The Upload Box */}
            <motion.div 
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
              onClick={() => !file && fileInputRef.current?.click()}
              className={`
                relative min-h-[260px] md:min-h-[300px] p-6 md:p-8 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all cursor-pointer
                ${dragActive ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-blue-400'}
                ${file ? 'border-green-500 bg-green-50/30' : ''}
              `}
            >
              <AnimatePresence mode="wait">
                {!preview ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
                      <Upload className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900">Upload Your Design</h3>
                      <p className="text-xs md:text-sm text-slate-400">Drag & drop or click to browse files</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full space-y-4">
                    <div className="relative h-40 md:h-48 w-full">
                      <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setPreview(null); setFile(null); }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2 text-green-700 font-bold text-xs bg-green-100 py-2 px-4 rounded-full max-w-full">
                      <FileCheck size={14} className="flex-shrink-0" /> 
                      <span className="truncate max-w-[180px] md:max-w-xs">{file?.name}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* The Form - Appears after upload */}
            <AnimatePresence>
              {file && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-5 md:p-8 space-y-5 md:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none focus:border-blue-600 text-sm" required />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none focus:border-blue-600 text-sm" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <select 
                          name="countryCode" 
                          value={formData.countryCode} 
                          onChange={handleChange} 
                          className="bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none text-sm font-bold appearance-none pr-8 pl-4 cursor-pointer"
                        >
                          {ALL_COUNTRIES.map((country, idx) => (
                            <option key={idx} value={country.override || country.code}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="flex-1 bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none text-sm" required />
                    </div>
                    
                    <div className="relative">
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none text-sm font-bold appearance-none cursor-pointer">
                        <option>Main Woven Label</option>
                        <option>Care Label</option>
                        <option>Size Label</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Quantity, Size, Fold type, etc." rows={3} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl outline-none focus:border-blue-600 text-sm resize-none" required />

                  <button 
                    type="submit"
                    onClick={handleSend} disabled={loading}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    {loading ? "Uploading..." : <><Send size={16} /> Submit Design</>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* 🚀 PREMIUM ANIMATED INDUSTRIAL SUCCESS MODAL DISPLAY */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.93, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white border border-slate-200 max-w-md w-full rounded-[2rem] p-6 md:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Premium Gradient Top Border Rule */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600" />
              
              {/* Verification Ring Center-piece */}
              <motion.div 
                initial={{ rotate: -45, scale: 0.6 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle2 size={36} className="stroke-[1.5]" />
              </motion.div>

              {/* Status Typography Block */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                  Design <span className="text-blue-600">Synchronized</span>
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  Your corporate artwork parameters and structural data configurations have been securely filed into the <span className="text-slate-800 font-bold">H-B Enterprises</span> operational database.
                </p>
              </div>

              {/* Internal Operator Roadmap Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left">
                <span className="text-[10px] font-black tracking-wider text-blue-600 uppercase block mb-0.5">Weaving Desk Status:</span>
                <p className="text-slate-500 text-[11px] font-medium leading-normal">
                  Our thread technicians will review your layout blueprints to compile a precise physical proof configuration within the next 24 hours.
                </p>
              </div>

              {/* Dismiss Trigger */}
              <button 
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-md shadow-slate-900/10"
              >
                Return To Workspace
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CustomLabelProcess;