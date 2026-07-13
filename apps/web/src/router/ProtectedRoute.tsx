import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
        Loading forUs...
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}