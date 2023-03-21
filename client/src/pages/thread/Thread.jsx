import React from 'react';
import './thread.css';

const Thread = () => {
  return (
    <div>
      <div className='top-bar'>
        <h1>My Forum</h1>
      </div>
      <div className='header'>
        <h4 className='title'>Thread 1</h4>
        <div className='bottom'>
          <p className='timestamp'>3/17/2023</p>
          <p className='comment-count'>6 comments</p>
        </div>
      </div>
      <textarea></textarea>
      <button>add comment</button>
      <div className='comments'>
        <div className='comment'>
          <div className='top-comment'>
            <p className='user'>Jamie</p>
            <p className='timestamp'>3/18/2023</p>
          </div>
          <div className='comment-content'>Comment text here</div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
