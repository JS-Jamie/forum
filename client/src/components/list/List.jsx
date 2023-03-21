import React from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';
import { Container } from 'react-bootstrap';

const List = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/item');
  };

  return (
    <Container>
      <div className='top-bar'>
        <h1>My Forum</h1>
      </div>
      <div className='main'>
        <ol>
          <li className='row'>
            <div onClick={handleClick}>
              <h4 className='title'> Thread 1</h4>
              <div className='bottom'>
                <p className='timestamp'>3/17/2023</p>
                <p className='comment-count'>6 comments</p>
              </div>
            </div>
          </li>
          <li className='row'>
            <div onClick={handleClick}>
              <h4 className='title'> Thread 2</h4>
              <div className='bottom'>
                <p className='timestamp'>3/18/2023</p>
                <p className='comment-count'>3 comments</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </Container>
  );
};

export default List;
