export interface RoomResponse {
  id: string;
  name: string;
  description: string | null;
  roomType: string;
  retentionPolicy: string;
  maxMembers: number;
  isPrivate: boolean;
  inviteCode: string;
  ownerId: string;
  createdAt: Date;
}