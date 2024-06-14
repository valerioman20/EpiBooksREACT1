// App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from "./books/fantasy.json";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';


function App() {
  const [search, setSearch] = useState("");

  return (
    <>
    <BrowserRouter>
      <MyNav search={search} setSearch={setSearch} />
      <Container>
        <Welcome />
        <Routes>
          <Route index element={<AllTheBooks books={fantasy} search={search} />}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='Details/:asin' element={<BookDetails/>}/>
        </Routes>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
