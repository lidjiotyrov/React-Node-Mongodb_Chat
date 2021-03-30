import React, {
  FC,
  useState,
  useRef,
  useEffect
} from 'react';

import socket from '../../socket';

import {
  UserName,
  Message,
  RoomId,
  FunctionAddMessage
} from '~/types';

type Props = {
  users: UserName[];
  messages: Message[];
  userName: UserName;
  roomId: RoomId;
  onAddMessage: FunctionAddMessage;
}

const Chat: FC<Props> = ({
                           users,
                           messages,
                           userName,
                           roomId,
                           onAddMessage
                         }) => {
  const [messageValue, setMessageValue] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({userName, text: messageValue});
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current!.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat">

      <div className="chat-users">
        Room: <b>{roomId}</b>
        <hr/>
        <b>Online ({users.length}):</b>
        <ul>
          {users.map((name: UserName, index: number) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="chat-messages">
        <div
          className="messages"
          ref={messagesRef}
        >
          {messages.map((message: Message) => (
            <div className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>

        <form>
          <textarea
            className="form-control"
            value={messageValue}
            rows={3}
            onChange={(e) => setMessageValue(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={onSendMessage}
          >
            Send
          </button>
        </form>
      </div>

    </div>
  );
}

export default Chat;
