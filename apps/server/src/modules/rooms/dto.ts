export interface RoomResponse {
  id: string;
  name: string;
  description: string | null;
  roomType: string;
  retentionPolicy: string;
  maxMembers: number;
  memberCount: number;
  isPrivate: boolean;
  inviteCode: string;
  ownerId: string;
  createdAt: Date;
}

export interface JoinRoomRequest {
  inviteCode: string;
}

export interface RoomMemberResponse {
  id: string;
  displayName: string;
  avatarUrl: string | null;
  isGuest: boolean;
  role: "OWNER" | "ADMIN" | "MEMBER";
  joinedAt: Date;
}

export interface RoomDetailsResponse extends RoomResponse {
  owner: {
    id: string;
    displayName: string;
    avatarUrl: string | null;
  };
  members: RoomMemberResponse[];
  isOwner: boolean;
}