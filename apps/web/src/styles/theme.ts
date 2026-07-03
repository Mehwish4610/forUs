export const theme = {
  colors: {
    background: "#020617",
    backgroundSoft: "#0B1120",

    surface: "#0F172A",
    surfaceSoft: "rgba(255,255,255,0.06)",

    primary: "#10B981",
    primaryHover: "#059669",
    primaryLight: "#34D399",

    secondary: "#06B6D4",
    secondaryHover: "#0891B2",
    secondaryLight: "#67E8F9",

    accent: "#14B8A6",

    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",
    textMuted: "#94A3B8",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#3B82F6",

    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(16,185,129,0.30)",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "999px",
  },

  shadow: {
    soft: "0 10px 30px rgba(0,0,0,0.20)",
    glow: "0 0 30px rgba(16,185,129,0.25)",
  },

  motion: {
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
  },
} as const;