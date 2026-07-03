import AuroraBackground from "../components/background/AuroraBackground";
import Navbar from "@/components/layout/Navbar";
import {
  Avatar,
  Badge,
  Button,
  Card,
  GlassPanel,
} from "@/components/ui";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AuroraBackground />
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-emerald-400">
            forUs
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Private conversations,
            <br />
            made for us.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>Create Room</Button>
            <Button variant="secondary">Join Room</Button>
          </div>

          <button className="mt-6 text-sm text-slate-400 transition hover:text-white">
            Continue with Google
          </button>

          <GlassPanel className="mx-auto mt-10 max-w-md p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Avatar name="Mehwish Shariff" />
                            <div className="text-left">
                                <p className="font-semibold text-white">Study Group</p>
                                <p className="text-sm text-slate-400">4 people here</p>
                            </div>    
                    </div>

                    <Badge variant="success">Active</Badge>
                </div>
            </GlassPanel>

            <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
                <Card>
                    <h3 className="font-semibold text-white">Temporary chats</h3>
                    <p className="mt-2 text-sm text-slate-400">
                        Messages follow your room retention setting.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-semibold text-white">Secure rooms</h3>
                    <p className="mt-2 text-sm text-slate-400">
                        Share private links with only the people you trust.
                    </p>
                </Card>
            </div>
        </div>
      </section>
    </main>
  );
}