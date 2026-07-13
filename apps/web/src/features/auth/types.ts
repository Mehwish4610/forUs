export interface GuestUser {
  id: string;
  displayName: string;
  isGuest: true;
}

export interface GuestLoginRequest {
  displayName: string;
}

export interface GuestLoginResponse {
  success: boolean;
  message: string;
  data: {
    token?: string;
    user: GuestUser;
  };
}