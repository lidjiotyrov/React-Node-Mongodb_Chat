import React, {FC, useState} from 'react';

import api from '../../api';

import {
  RoomId,
  UserName,
  FunctionOnLogin
} from '~/types';

type Props = {
  onLogin: FunctionOnLogin;
}

const JoinBlock: FC<Props> = ({onLogin}) => {
  const [roomId, setRoomId] = useState<RoomId>('');
  const [userName, setUserName] = useState<UserName>('');
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Wrong data');
    }

    const obj = {
      roomId,
      userName,
    };

    setLoading(true);
    await api.addUserInRoom(obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="btn btn-success"
        disabled={isLoading}
        onClick={onEnter}
      >
        {isLoading ? 'Entry...' : 'Join'}
      </button>
    </div>
  );
}

export default JoinBlock;
