import { apiFetch } from "@/lib/api";
import type {
  GuestLoginRequest,
  GuestLoginResponse,
} from "../types";

export async function loginAsGuest(
  payload: GuestLoginRequest
): Promise<GuestLoginResponse> {
  return apiFetch("/auth/guest", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getCurrentUser(): Promise<GuestLoginResponse> {
  return apiFetch("/auth/me");
}

export async function logoutUser() {
  return apiFetch("/auth/logout", {
    method: "POST",
  });
}