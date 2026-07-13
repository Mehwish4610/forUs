import { useState } from "react";
import AuroraBackground from "@/components/background/AuroraBackground";
import Navbar from "@/components/layout/Navbar";
import {
  Avatar,
  Badge,
  Button,
  Card,
  GlassPanel,
} from "@/components/ui";
import GuestLoginModal from "@/features/auth/components/GuestLoginModal";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function HomePage() {
  const [guestModalOpen, setGuestModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AuroraBackground />
      <Navbar />

      <section className="flex min-h-screen items-start justify-center px-6 pb-28 pt-32">
        <div className="w-full text-center">
          <h1 className="text-7xl font-bold tracking-tight text-emerald-400 md:text-8xl">
            forUs
          </h1>

          <p className="mt-7 text-2xl leading-relaxed text-slate-300">
            Private conversations,
           
            made for us.
          </p>


          {!user && (
          <div className ="mt-12 flex flex-wrap justify-center gap-5">
            <Button
              variant="ghost"
              className="mt-8 border-b border-emerald-400/80 rounded-none px-2 py-2"
              onClick={() => setGuestModalOpen(true)}
              >
              <span className="mr-2">👤</span>
              Continue as Guest
            </Button>

            <Button
              variant="ghost"
              className="mt-8 border-b border-emerald-400/80 rounded-none px-2 py-2"
            >
              <span className="mr-2 font-bold">G</span>
              Continue with Google
            </Button>
          </div>
          )}

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
            <Card className="flex min-h-36 items-center gap-5 p-7 text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-2xl text-emerald-300">
                🔐
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Temporary chats
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Messages follow your room retention setting.
                </p>
              </div>
            </Card>

            <Card className="flex min-h-36 items-center gap-5 p-7 text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-2xl text-emerald-300">
                🔒
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Secure rooms
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share private links with only the people you trust.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <GuestLoginModal
        open={guestModalOpen}
        onClose={() => setGuestModalOpen(false)}
      />
    </main>
  );
}