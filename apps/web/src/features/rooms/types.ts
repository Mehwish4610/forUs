export type RoomType =
  | "STUDY"
  | "FAMILY"
  | "WORK"
  | "GAMING"
  | "FRIENDS"
  | "CUSTOM";

export type RetentionPolicy =
  | "UNTIL_EMPTY"
  | "ONE_DAY"
  | "SEVEN_DAYS"
  | "THIRTY_DAYS";

export interface Room {
  id: string;
  name: string;
  description: string | null;
  roomType: RoomType;
  retentionPolicy: RetentionPolicy;
  maxMembers: number;
  memberCount: number;
  isPrivate: boolean;
  inviteCode: string;
  ownerId: string;
  createdAt: string;
}

export interface CreateRoomRequest {
  name: string;
  description?: string;
  roomType: RoomType;
  retentionPolicy: RetentionPolicy;
  maxMembers: number;
}

export interface CreateRoomResponse {
  success: boolean;
  message: string;
  data: {
    room: Room;
  };
}

export interface RoomsResponse {
  success: boolean;
  message: string;
  data: {
    ownedRooms: Room[];
    joinedRooms: Room[];
  };
}

export interface JoinRoomRequest {
  inviteCode: string;
}

export interface JoinRoomResponse {
  success: boolean;
  message: string;
  data: {
    room: Room;
  };
}

export type RoomMemberRole = "OWNER" | "ADMIN" | "MEMBER";

export interface RoomMember {
  id: string;
  displayName: string;
  avatarUrl: string | null;
  isGuest: boolean;
  role: RoomMemberRole;
  joinedAt: string;
}

export interface RoomDetails extends Room {
  owner: {
    id: string;
    displayName: string;
    avatarUrl: string | null;
  };
  members: RoomMember[];
  isOwner: boolean;
}

export interface RoomDetailsResponse {
  success: boolean;
  message: string;
  data: {
    room: RoomDetails;
  };
}