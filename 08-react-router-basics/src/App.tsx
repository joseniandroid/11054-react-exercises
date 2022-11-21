import { Book, BookList, Home, NewBook, NotFound } from './pages';
import { Link, Route, Routes, useRoutes } from 'react-router-dom';

import { BookRoutes } from './routes';
import { BooksLayout } from './layouts';

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/books',
      element: <BookRoutes />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Routes>
        <Route path='/books' element={<h4>Extra Routes in /books</h4>} />
      </Routes>

      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
        </ul>
      </nav>

      {elements}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
