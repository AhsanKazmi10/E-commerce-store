"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Sign-In Trigger Function
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      // NextAuth ka standard signIn trigger method yahan hit hoga
      // import { signIn } from "next-auth/react" karke call hoga production me:
      // await signIn('google', { callbackUrl: '/dashboard' });
      console.log("Initiating structural connection with Google Authentication Services...");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', msg: "Access Authorized. Synchronizing workspace..." });
      } else {
        setStatus({ type: 'error', msg: data.message || "Invalid corporate credentials." });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: "Network link operational failure." });
    } finally { setLoading(false); }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16 relative border-t border-slate-100">
      <div className="max-w-md w-full bg-[#0F1115] border border-slate-800 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Superior Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />

        {/* Brand Header */}
        <div className="text-center space-y-1.5 mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white italic">
            H-B <span className="text-blue-600">PORTAL</span>
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            SECURE ENTERPRISE ACCESS MANAGEMENT
          </p>
        </div>

        {/* Dynamic Status Notifications */}
        <AnimatePresence mode="wait">
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-xl flex items-center gap-3 text-xs font-bold uppercase tracking-wide mb-6 ${
                status.type === 'success' 
                  ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-400' 
                  : 'bg-red-950/40 border border-red-500/30 text-red-400'
              }`}
            >
              {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              <span>{status.msg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-5">
          {/* 🌟 GOOGLE DIRECT SIGN IN BUTTON */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-[#1A1D23] hover:bg-[#22262f] text-white border border-slate-800 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
          >
            {/* SVG Vector for Crisp Original Google Icon asset */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.42 1.74l3.3-3.3C17.74 1.58 15.03 1 12 1 7.24 1 3.2 3.74 1.25 7.75l3.85 2.99C6.01 7.25 8.78 5.04 12 5.04z" />
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.73 2.89c2.18-2.01 3.7-4.99 3.7-8.62z" />
              <path fill="#FBBC05" d="M5.1 14.76c-.24-.73-.38-1.51-.38-2.31s.14-1.58.38-2.31L1.25 7.15C.45 8.76 0 10.58 0 12.5s.45 3.74 1.25 5.35l3.85-2.99z" />
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.73-2.89c-1.04.7-2.37 1.12-4.23 1.12-3.22 0-5.99-2.21-6.91-5.7L1.17 15.6C3.12 19.54 7.18 23 12 23z" />
            </svg>
            Continue with Google
          </button>

          {/* Clean Visual Separator Rule Grid */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-[1px] bg-slate-800 flex-1" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">OR VIA DATABASE</span>
            <div className="h-[1px] bg-slate-800 flex-1" />
          </div>

          {/* Form Credentials Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block pl-1">
                Corporate Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="operator@company.com"
                  className="w-full bg-[#1A1D23] border border-slate-800 p-4 pl-12 rounded-xl text-white text-sm outline-none focus:border-blue-600 font-medium placeholder-slate-500 transition-colors"
                />
                <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  Secure Password
                </label>
                <a href="#" className="text-[9px] font-black text-blue-500 uppercase tracking-widest hover:underline">
                  Recovery
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-[#1A1D23] border border-slate-800 p-4 pl-12 pr-12 rounded-xl text-white text-sm outline-none focus:border-blue-600 font-medium placeholder-slate-500 transition-colors"
                />
                <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-4 rounded-xl font-black uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg shadow-blue-600/10 mt-2"
            >
              {loading ? "Authenticating Data Matrix..." : <><span className="mt-[1px]">Authorize System</span> <ArrowRight size={14} /></>}
            </button>
          </form>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-slate-800/50">
          <p className="text-slate-500 text-xs font-medium">
            New corporate entity?{' '}
            <a href="/signup" className="text-blue-500 font-bold hover:underline tracking-tight">
              Register Unit
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}