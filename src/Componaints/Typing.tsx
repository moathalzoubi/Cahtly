import * as React from 'react';
import { FcLikePlaceholder, FcLike, FcMenu } from 'react-icons/fc';

export const Typing = (props: { show: boolean }) => {
  return (
    <div className="typing">
      <div className="bubble" style={{ displey: props.show ? 'none' : 'none' }}>
        <div className="ellipsis dot_1">
          <FcLikePlaceholder />
        </div>
        <div className="ellipsis dot_2">
          <FcLike />
        </div>
        <div className="ellipsis dot_3">
          <FcLikePlaceholder />
        </div>
      </div>
    </div>
  );
};
