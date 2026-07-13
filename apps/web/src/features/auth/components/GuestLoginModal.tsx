import { useState } from "react";
import { Button } from "@/components/ui";
import { useAuth } from "../context/AuthContext";

type GuestLoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function GuestLoginModal({
  open,
  onClose,
}: GuestLoginModalProps) {
  const { login } = useAuth();

  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  async function handleSubmit() {
    const trimmedName = displayName.trim();

    if (trimmedName.length < 3) {
      setError("Display name must be at least 3 characters.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await login(trimmedName);

      setDisplayName("");
      onClose();
    } catch {
      setError("Unable to continue as guest. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">Continue as Guest</h2>

        <p className="mt-2 text-slate-400">Choose a display name.</p>

        <input
          className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          autoFocus
        />

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Joining..." : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}