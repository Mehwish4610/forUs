export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_40%)]" />

      <div className="absolute -bottom-40 left-[-8%] h-[520px] w-[420px] rotate-12 rounded-full bg-cyan-400/25 blur-[90px]" />
      <div className="absolute -bottom-48 left-[8%] h-[560px] w-[260px] rotate-12 rounded-full bg-purple-500/20 blur-[95px]" />

      <div className="absolute -bottom-40 right-[-8%] h-[520px] w-[420px] -rotate-12 rounded-full bg-emerald-400/25 blur-[90px]" />
      <div className="absolute -bottom-48 right-[8%] h-[560px] w-[260px] -rotate-12 rounded-full bg-purple-500/20 blur-[95px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.10),rgba(2,6,23,0.65),rgba(2,6,23,0.95))]" />
    </div>
  );
}