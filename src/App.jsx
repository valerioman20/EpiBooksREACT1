import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from "./books/fantasy.json"
import { Container } from 'react-bootstrap';

function App() {


  return (
    <>
      <MyNav />
      <Container>
      <Welcome />
      <AllTheBooks books={fantasy}/>
      </Container>
    </>
  )
}

export default App
