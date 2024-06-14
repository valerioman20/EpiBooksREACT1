import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CommentArea from './CommentArea';
import fantasy from "../books/fantasy.json"; 
import './BookDetails.css';

export default function BookDetails() {
  const { asin } = useParams();
  const book = fantasy.find(b => b.asin === asin);

  if (!book) {
    return <div>Libro non trovato</div>;
  }

  return (
    <Container className="book-details">
      <Row>
        <Col md={8}>
          <Card className="book-card">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
            </Card.Body>
          </Card>
          <CommentArea asin={book.asin} />
        </Col>
        <Col md={4}>
          <div className="book-extra-details">
            <h4>Dettagli del libro</h4>
            <p><strong>Autore:</strong> {book.author}</p>
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Prezzo:</strong> {book.price} €</p>
            <p>{book.extraDetails}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
