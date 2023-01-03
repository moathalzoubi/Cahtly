import * as React from 'react';
export const Typing = (props: { show: boolean }) => {
  return (
    <div className="typing" style={{ displey: props.show ? 'grid' : 'none' }}>
      <div className="bubble">
        <div className="ellipsis dot_1"></div>
        <div className="ellipsis dot_2"></div>
        <div className="ellipsis dot_3"></div>
      </div>
    </div>
  );
};
