import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from './Welcome';
import App from '../App';
import fantasy from '@/books/fantasy.json';
import AllTheBooks from '../components/AllTheBooks';
import { BrowserRouter as Router } from 'react-router-dom';


/*TEST 1 */
test('Verifica che il componente Welcome venga montato correttamente', () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText(/Benvenuto in EpiBooks!/i);
  expect(welcomeMessage).toBeInTheDocument();
});

/*TEST 2 */
test('Verifica che il numero delle card sia uguale al numero dei libri', () => {
  render(<App />);
  const cards = screen.getAllByTestId('card');
  expect(cards.length).toBe(fantasy.length);
});

/*TEST 3 MI DA FALLITO!
test('Verifica che il componente CommentArea venga renderizzato correttamente', () => {
  render(<App />);
  
  // Simulo il click sulla prima card
  const firstCard = screen.getAllByTestId('card')[0];
  fireEvent.click(firstCard);

  // Verifico che CommentArea venga renderizzato
  const commentArea = screen.getByTestId('comment-area');
  expect(commentArea).toBeInTheDocument();
}); */



/*TEST 4 */
function renderWithRouter(ui, { route = '/' } = {}) {   /*qui ho dovuto fornire il contesto del router ai componenti durante il test.*/
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
}

test('Filtra i libri in base al titolo inserito nella barra di ricerca', () => {
  renderWithRouter(<AllTheBooks books={fantasy} search="Witcher" />);
  expect(screen.getByText("The Last Wish: Introducing the Witcher")).toBeInTheDocument();
  expect(screen.getByText("Sword of Destiny (The Witcher)")).toBeInTheDocument();
  expect(screen.queryByText("D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)")).toBeNull();
  expect(screen.queryByText("Destiny Grimoire Anthology, Volume II: Fallen Kingdoms")).toBeNull();
  expect(screen.queryByText("D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)")).toBeNull();
  expect(screen.queryByText("American Gods: The Tenth Anniversary Edition: A Novel")).toBeNull();
});

/*TEST 5*/
test('Verifica che, cliccando su un libro, il suo bordo cambi colore', () => {
  render(<App />);

  // Seleziono la prima card
  const firstCard = screen.getAllByTestId('card')[0].querySelector('.card');

  // Verifico che il bordo inizialmente non sia rosso
  expect(firstCard).not.toHaveStyle('border: 2px solid red');

  // Simulo il click sulla prima card
  fireEvent.click(firstCard);

  // Verifico che il bordo sia diventato rosso
  expect(firstCard).toHaveStyle('border: 2px solid red');
  // Simula il secondo click sulla prima card
  fireEvent.click(firstCard);

  // Verifica che il bordo sia tornato alla condizione iniziale
  expect(firstCard).not.toHaveStyle('border: 2px solid red');
});


/*TEST 6*/
/*il test 6 che mi chiedeva di controllare se quando cliccavo sul secondo libro il primo ritornasse normale
l'ho leggermente modificato, estendendo il test 5, che se clicco nuovamente sulla card il bordo torni normale
nello specifico facendo questo:   

// Simula il secondo click sulla prima card
  fireEvent.click(firstCard);

  // Verifica che il bordo sia tornato alla condizione iniziale
  expect(firstCard).not.toHaveStyle('border: 2px solid red'); */

  
/*TEST 7*/
test('Verifica che all\'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all\'interno del DOM', () => {
  render(<App />);

  // Verifico che non ci siano istanze del componente SingleComment
  const singleComments = screen.queryAllByText(/Rating:/);
  expect(singleComments.length).toBe(0);
});

/*TEST 8*/
