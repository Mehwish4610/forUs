import { useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import RoomOverviewCards from "@/features/dashboard/components/RoomOverviewCards";
import WelcomePanel from "@/features/dashboard/components/WelcomePanel";
import CreateRoomModal from "@/features/rooms/components/CreateRoomModal";
import JoinRoomModal from "@/features/rooms/components/JoinRoomModal";

export default function DashboardPage() {
  const [createRoomOpen, setCreateRoomOpen] = useState(false);
  const [joinRoomOpen, setJoinRoomOpen] = useState(false);

  function openCreateRoomModal() {
    setJoinRoomOpen(false);
    setCreateRoomOpen(true);
  }

  function openJoinRoomModal() {
    setCreateRoomOpen(false);
    setJoinRoomOpen(true);
  }

  return (
    <DashboardLayout>
      <WelcomePanel
        onCreateRoom={openCreateRoomModal}
        onJoinRoom={openJoinRoomModal}
      />

      <RoomOverviewCards
        onCreateRoom={openCreateRoomModal}
        onJoinRoom={openJoinRoomModal}
      />

      <CreateRoomModal
        open={createRoomOpen}
        onClose={() => setCreateRoomOpen(false)}
      />

      <JoinRoomModal
        open={joinRoomOpen}
        onClose={() => setJoinRoomOpen(false)}
      />
    </DashboardLayout>
  );
}