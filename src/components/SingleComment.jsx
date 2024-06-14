// SingleComment.js
import React from 'react';

export default function SingleComment({ comment }) {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
    </div>
  );
}