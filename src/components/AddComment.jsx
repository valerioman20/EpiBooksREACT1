// AddComment.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddComment({ asin, setComments }) {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { comment, rate, elementId: asin };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM5ZTZkNGQ2MzdmMzAwMTVhZGJmNWIiLCJpYXQiOjE3MTc5MTkyMjksImV4cCI6MTkxOTEyODgyOX0.Ub4Jl-r0UlyxMVvXDmYtxRfxhSQ1Xy_7BLmk-fXHZEs',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const data = await response.json();
        setComments(prevComments => [...prevComments, data]);
        setComment('');
        setRate(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
      </Form.Group>
      <Form.Group controlId="rate">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          as="select"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
