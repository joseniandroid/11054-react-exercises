import { Book, BookList, Home } from './pages';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
