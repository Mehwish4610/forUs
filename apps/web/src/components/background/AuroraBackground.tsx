export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_35%)]" />

      <div className="absolute left-[-12%] top-[-20%] h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[150px]" />

      <div className="absolute right-[-12%] bottom-[-20%] h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/3 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[130px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.85))]" />
    </div>
  );
}