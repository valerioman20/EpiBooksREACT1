// CommentList.js
import React from 'react';
import SingleComment from './SingleComment';

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
