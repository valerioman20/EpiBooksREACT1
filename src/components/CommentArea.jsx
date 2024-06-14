// CommentArea.js
import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

export default function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM5ZTZkNGQ2MzdmMzAwMTVhZGJmNWIiLCJpYXQiOjE3MTc5MTkyMjksImV4cCI6MTkxOTEyODgyOX0.Ub4Jl-r0UlyxMVvXDmYtxRfxhSQ1Xy_7BLmk-fXHZEs',
          },
        });

        if (response.status === 429) {
          setError('Too many requests. Please try again later.');
          return;
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch comments');
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="comment-area" data-testid="comment-area">
      {error && <div className="error">{error}</div>}
      <div className="comment-list-container">
        <CommentList comments={comments} />
      </div>
      <AddComment asin={asin} setComments={setComments} />
    </div>
  );
}

