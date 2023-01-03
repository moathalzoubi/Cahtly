import * as React from 'react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { FcVideoCall, FcCallback, FcMenu } from 'react-icons/fc';
import { IconButton } from '@chakra-ui/react';
export const ChatPanel = () => {
  return (
    <div className="container">
      <div className="chat_box">
        <div className="head">
          <div className="user">
            <div className="avatar">
              <img src="https://picsum.photos/g/40/40" alt="img" />
            </div>
            <div className="name">Kai Cheng</div>
          </div>
          <ul className="bar_tool">
            <li>
              <IconButton icon={<FcCallback />} />
            </li>
            <li>
              <span className="m-1">
                <FcVideoCall />
              </span>
            </li>
            <li>
              <span className="m-1">
                <FcMenu />
              </span>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="incoming">
            <div className="bubble">
              <p>Hey, Father's Day is coming up..</p>
            </div>
            <div className="bubble">
              <p>What are you getting.. Oh, oops sorry dude.</p>
            </div>
          </div>
          <div className="outgoing">
            <div className="bubble lower">
              <p>Nah, it's cool.</p>
            </div>
            <div className="bubble">
              <p>
                Well you should get your Dad a cologne. Here smell it. Oh wait!
                ...
              </p>
            </div>
          </div>
          <div className="typing">
            <div className="bubble">
              <div className="ellipsis dot_1"></div>
              <div className="ellipsis dot_2"></div>
              <div className="ellipsis dot_3"></div>
            </div>
          </div>
        </div>
        <div className="foot">
          <input type="text" className="msg" placeholder="Type a message..." />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};