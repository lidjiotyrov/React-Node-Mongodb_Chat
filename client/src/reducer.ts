import {
  Joined,
  RoomId,
  UserName,
  Message,
  PayloadJoined,
  PayloadSetData,
  PayloadSetUsers,
  PayloadNewMessage
} from "./types";

type State = {
  joined: Joined;
  roomId: RoomId;
  userName: UserName;
  users: UserName[];
  messages: Message[];
}

type Action =
  | {
    type: 'JOINED';
    payload: PayloadJoined
  }
  | {
    type: 'SET_DATA';
    payload: PayloadSetData
  }
  | {
    type: 'SET_USERS';
    payload: PayloadSetUsers
  }
  | {
    type: 'NEW_MESSAGE';
    payload: PayloadNewMessage;
  }

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      };

    case 'SET_DATA':
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};
