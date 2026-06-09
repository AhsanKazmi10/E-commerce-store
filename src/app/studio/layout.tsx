
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-gray-900 bg-[#0a0a0a] p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl font-black italic text-blue-600 uppercase tracking-tighter">H-B Admin</h2>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Control Center</p>
        </div>

        <nav className="flex-1 space-y-2">
          <Link href="/studio" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600/10 hover:text-blue-500 transition-all group font-bold text-sm">
            Dashboard
          </Link>
          
          <div className="pt-4 pb-2">
            <p className="text-[10px] text-gray-700 uppercase tracking-[0.3em] pl-3 mb-2 font-black">Management</p>
            <Link href="/studio/products" className="flex items-center gap-3 p-3 rounded-xl bg-blue-600 text-white font-bold text-sm">
              Products Management
            </Link>
            <Link href="/studio/inquiries" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600/10 hover:text-blue-500 transition-all">
  📋 Custom Inquiries
</Link>
          </div>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-900">
          <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors">← Back to Website</Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}