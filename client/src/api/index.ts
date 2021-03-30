import controller from './controller';
import { RoomId, UserName } from '~/types';

type DataAddUserInRoom = {
  userName: UserName;
  roomId: RoomId;
}

const api = {
  getRoom(roomId: RoomId) {
    return controller.get(`api/rooms/${roomId}`)
      .then((response) => {
        return response;
      });
  },
  addUserInRoom(data: DataAddUserInRoom) {
    return controller.post('api/rooms', data)
      .then((response) => {
        return response;
      });
  }
};

export default api;
