import React, { useState } from 'react';
import { Col, Card, Collapse, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommentArea from './CommentArea';
import './SingleBook.css';

export default function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4" data-testid="card">
        <Card
          className="card"
          style={{ width: '16rem', border: selected ? '2px solid red' : 'none' }}
          onClick={() => setSelected(!selected)}
        >
          <div className="card-img-container">
            <Card.Img variant="top" src={book.img} />
          </div>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">{book.title}</Card.Title>
            <Link to={`/Details/${book.asin}`} className="btn btn-info text-white text-center mt-2">
              Dettagli
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Collapse in={selected}>
          <div>
            <CommentArea asin={book.asin} />
          </div>
        </Collapse>
      </Col>
    </>
  );
}
