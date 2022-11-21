import { Book, BookList, Home, NewBook, NotFound } from './pages';
import { Link, Route, Routes } from 'react-router-dom';

import { BooksLayout } from './layouts';

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
        <Route path='/books' element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
