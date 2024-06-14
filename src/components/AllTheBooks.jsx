import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './AllTheBooks.css';
import SingleBook from './SingleBook';

export default function AllTheBooks({ books, search }) {
  return (
    <>
      <Row>
        <Col>
          {}
        </Col>
      </Row>
      <Row>
        {books
          .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
          .map(book => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </>
  );
}
