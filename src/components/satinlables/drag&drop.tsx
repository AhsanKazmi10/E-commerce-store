"use client";

import React, { useState, useRef } from 'react';
import { Upload, MessageSquare, Send, FileText, X, FileCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_COUNTRIES = [
  { code: "+92", label: "PK (+92)" },
  { code: "+1", label: "US/CA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+966", label: "SA (+966)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
];

const SatinLabelProcess = () => {
  const [formData, setFormData] = useState({ 
    name: "", email: "", phone: "", countryCode: "+92", type: "Woven Satin Label", message: "" 
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
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
    if (!file) return;
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
        setShowSuccessModal(true);
        setPreview(null); 
        setFile(null);
        setFormData({ ...formData, name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-6 border-t border-slate-100 relative" id="designDropdown">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-24 w-full">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
                <span className="text-blue-600">Satin Label</span> Engineering
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                Upload your brand logo or label design. Our precision weaving machinery translates vector layouts into high-density custom labels with soft-touch finishes.
              </p>
            </div>

            <div className="space-y-4 md:space-y-5">
              {[
                { icon: <Upload className="w-5 h-5" />, title: "Submit Label Artwork", desc: "Upload your logo or brand name in AI, PDF, or high-res PNG formats." },
                { icon: <FileText className="w-5 h-5" />, title: "Finish & Fold Selection", desc: "Choose your finish: Ultra-soft Satin, crisp Taffeta, or durable Canvas edge." },
                { icon: <MessageSquare className="w-5 h-5" />, title: "Proofing Cycle", desc: "Our technicians generate a digital weaving proof for your inspection before mass production." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl border border-slate-100 lg:border-none">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600 flex-shrink-0 shadow-sm">{step.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-tight">{step.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="space-y-6 w-full bg-[#0F1115] border border-slate-800 rounded-[2.5rem] p-4 md:p-6 shadow-2xl">
            <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => e.target.files && handleFile(e.target.files[0])} accept="image/*,.pdf,.ai" />
            
            <motion.div 
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
              onClick={() => !file && fileInputRef.current?.click()}
              className={`relative min-h-[260px] md:min-h-[320px] p-6 md:p-8 rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center text-center transition-all cursor-pointer ${dragActive ? 'border-blue-600 bg-blue-600/10' : 'border-slate-800 bg-[#050505] hover:border-blue-500'} ${file ? 'border-emerald-500 bg-emerald-950/20' : ''}`}
            >
              <AnimatePresence mode="wait">
                {!preview ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-600/30">
                      <Upload className="w-6 h-6 md:w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white">UPLOAD LABEL ARTWORK</h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Drag & drop or browse files</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="w-full space-y-4">
                    <div className="relative h-40 md:h-48 w-full">
                      <img src={preview} alt="Label Preview" className="w-full h-full object-contain" />
                      <button type="button" onClick={(e) => { e.stopPropagation(); setPreview(null); setFile(null); }} className="absolute -top-2 -right-2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-transform"><X size={16} /></button>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/50 py-2 px-4 rounded-xl max-w-full">
                      <FileCheck size={14} className="flex-shrink-0" /> 
                      <span className="truncate max-w-[180px]">{file?.name}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {file && (
                <motion.div initial={{ opacity: 0, height: 0, y: 20 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: 20 }} transition={{ duration: 0.4 }} className="space-y-4 pt-2 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm outline-none focus:border-blue-600 font-medium placeholder-slate-500" required />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm outline-none focus:border-blue-600 font-medium placeholder-slate-500" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-2">
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm font-bold outline-none appearance-none pr-8 pl-4 cursor-pointer focus:border-blue-600">
                        {ALL_COUNTRIES.map((c, idx) => <option key={idx} value={c.code}>{c.label}</option>)}
                      </select>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" className="flex-1 bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm outline-none focus:border-blue-600 font-medium placeholder-slate-500" required />
                    </div>
                    
                    <div className="relative">
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm font-bold outline-none appearance-none cursor-pointer focus:border-blue-600">
                        <option>Woven Satin Label</option>
                        <option>Taffeta Label</option>
                        <option>Damask Satin</option>
                        <option>Canvas Edge Label</option>
                        <option>Silicon Label</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Label Specifications (Quantity, Size, Special Folds...)" rows={3} className="w-full bg-[#1A1D23] border border-slate-800 p-4 rounded-xl text-white text-sm outline-none focus:border-blue-600 resize-none font-medium placeholder-slate-500" required />
                  <button type="submit" onClick={handleSend} disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-[0.15em] hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/10">
                    {loading ? "Syncing Request..." : "Submit Label Request"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="bg-[#0F1115] border border-slate-800 max-w-md w-full rounded-[2rem] p-8 text-center space-y-6 shadow-2xl">
              <div className="w-20 h-20 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 size={40} /></div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">Transmission <span className="text-blue-600">Verified</span></h3>
              <p className="text-slate-400 text-sm">Your label design matrix has been sent to our weaving facility.</p>
              <button onClick={() => setShowSuccessModal(false)} className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 py-3.5 rounded-xl text-xs font-black uppercase transition-all">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SatinLabelProcess;