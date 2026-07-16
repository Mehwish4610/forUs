export interface CreateRoomInput {
  name: string;
  description?: string;
  roomType:
    | "STUDY"
    | "FAMILY"
    | "WORK"
    | "GAMING"
    | "FRIENDS"
    | "CUSTOM";

  retentionPolicy:
    | "UNTIL_EMPTY"
    | "ONE_DAY"
    | "SEVEN_DAYS"
    | "THIRTY_DAYS";

  maxMembers: number;
  memberCount: number;
  
}