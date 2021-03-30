export type Joined = boolean;
export type RoomId = string;
export type UserName = string;
export type Message = {
  userName: string;
  text: string;
}

export type PayloadJoined = {
  userName: UserName;
  roomId: RoomId;
}

export type PayloadSetData = {
  users: UserName[];
  messages: Message[];
}

export type PayloadSetUsers = UserName[];

export type PayloadNewMessage = Message;

export type FunctionOnLogin = (obj: PayloadJoined) => void;
export type FunctionAddMessage = (message: PayloadNewMessage) => void;

declare global {
  interface Window {
    socket: SocketIOClient.Socket;
  }
}
