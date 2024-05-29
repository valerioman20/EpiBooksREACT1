import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

export default function SingleBook({book}) {

   const  [selected, setSelected] = useState(false);
  return (
    <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="card" style={{ width: '16rem', border: selected? "2px solid red" : "none" }} onClick={()=>setSelected(!selected)}>
        <div className="card-img-container">
          <Card.Img variant="top" src={book.img} />
        </div>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

