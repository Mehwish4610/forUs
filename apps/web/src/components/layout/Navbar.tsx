import { useAuth } from "@/features/auth/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-emerald-400">forUs</h1>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Features
          </a>
          <a href="#" className="transition hover:text-white">
            Security
          </a>
          <a href="#" className="transition hover:text-white">
            FAQ
          </a>
          <a href="#" className="transition hover:text-white">
            GitHub
          </a>
        </nav>

      {user && (
        <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-emerald-400/40 bg-slate-950/70 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10">
          <span className="text-emerald-300">Welcome,</span> {" "} {user.displayName} 👋
        </div>

        <button
          onClick={logout}
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-red-400/60 hover:bg-red-500/10 hover:text-red-300"
        >
          Logout
        </button>
        </div>
      )}  
    </div>
    </header>
  );
}