import React from 'react';
import { Container } from 'react-dom';

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
function forumPost({ title, author, comments, likes }) {
  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>Submitted by {author}</p>
      <p>
        {comments} comments | {likes} likes
      </p>
    </div>
  );
}

function forumPostList() {
  return (
    <div className='post-list'>
      {samplePosts.map((post) => (
        <forumPost
          key={post.title}
          title={post.title}
          author={post.author}
          comments={post.comments}
          hearts={post.hearts}
        />
      ))}
    </div>
  );
}

export default forumPostList;
