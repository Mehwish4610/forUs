import { Navigate, createBrowserRouter } from "react-router-dom";

import { useAuth } from "@/features/auth/context/AuthContext";
import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import RoomPage from "@/pages/RoomPage";
import ProtectedRoute from "./ProtectedRoute";

function LoadingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
      Loading forUs...
    </main>
  );
}

function HomeRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <Navigate to="/dashboard" replace /> : <HomePage />;
}

function FallbackRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return <Navigate to={user ? "/dashboard" : "/"} replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/rooms/:roomId",
    element: (
      <ProtectedRoute>
        <RoomPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <FallbackRoute />,
  },
]);