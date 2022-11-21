import { Book, BookList, Home, NewBook, NotFound } from './pages';
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
        <Route path='/books/new' element={<NewBook />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
