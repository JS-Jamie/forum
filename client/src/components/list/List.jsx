import React from 'react';
import './list.css';
import { Container } from 'react-bootstrap';

const List = () => {
  return (
    <Container>
      <div className='top-bar'>
        <h1>My Forum</h1>
      </div>
      <div className='main'>
        <ol>
          <li className='row'>
            <a href='/item'>
              <h4 className='title'> Thread 1</h4>
              <div className='bottom'>
                <p className='timestamp'>3/17/2023</p>
                <p className='comment-count'>6 comments</p>
              </div>
            </a>
          </li>
          <li className='row'>
            <a href='/item'>
              <h4 className='title'> Thread 2</h4>
              <div className='bottom'>
                <p className='timestamp'>3/18/2023</p>
                <p className='comment-count'>3 comments</p>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </Container>
  );
};

export default List;
