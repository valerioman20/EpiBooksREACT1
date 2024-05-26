import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './AllTheBooks.css';

export default function AllTheBooks(props) {
  console.log(props.books);
  return (
    <Row>
      {props.books.map(book => (
        <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="card" style={{ width: '16rem' }}>
            <div className="card-img-container">
              <Card.Img variant="top" src={book.img} />
            </div>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
