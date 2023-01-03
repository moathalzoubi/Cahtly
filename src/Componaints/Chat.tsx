import * as React from 'react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { FcVideoCall, FcCallback, FcMenu } from 'react-icons/fc';
import { IconButton, Avatar } from '@chakra-ui/react';
import { Typing } from '../Componaints/Typing';
export const ChatPanel = (props: any) => {
  return (
    <div className="container">
      <div className="chat_box">
        <div className="head">
          <div className="user">
            <div className="avatar">
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                width={50}
              />
            </div>
            <div className="name">props.username</div>
          </div>
          <div className="head-icons">
            <div className="appicons">
              {' '}
              <IconButton
                variant="outline"
                colorScheme="blue"
                icon={<FcCallback />}
              />{' '}
            </div>
            <div className="appicons">
              {' '}
              <IconButton
                variant="outline"
                colorScheme="blue"
                icon={<FcVideoCall />}
              />{' '}
            </div>
            <div className="appicons">
              {' '}
              <IconButton
                variant="outline"
                colorScheme="blue"
                icon={<FcMenu />}
              />{' '}
            </div>
          </div>
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
          <Typing show={true} />
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
