import { Home, NotFound } from './pages';
import { NavLink, Route, Routes } from 'react-router-dom';

import { BookRoutes } from './routes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/books' element={<h4>Extra Routes in /books</h4>} />
      </Routes>

      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/books'>Books</NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
