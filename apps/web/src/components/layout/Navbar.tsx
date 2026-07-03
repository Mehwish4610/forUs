export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
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

        <button className="rounded-xl border border-emerald-500/30 px-5 py-2 text-sm text-slate-200 transition hover:bg-emerald-500/10">
          Continue as Guest
        </button>
      </div>
    </header>
  );
}