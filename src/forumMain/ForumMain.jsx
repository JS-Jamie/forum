import React from 'react';
import { Container } from 'react-dom';

const ForumMain = () => {
  const samplePosts = [
    {
      title: 'The Best Articles for Learning Something New',
      author: 'johndoe',
      comments: 52,
      likes: 1200,
    },
    {
      title: 'I Finally Finished My First JavaScript Project!',
      author: 'janesmith',
      comments: 27,
      likes: 650,
    },
    {
      title: "What's the Best Way to Learn CSS?",
      author: 'bobross',
      comments: 83,
      likes: 2100,
    },
  ];
  return (
    <Container>
      <h1>Community Forum</h1>
      <div></div>
    </Container>
  );
};

export default ForumMain;
