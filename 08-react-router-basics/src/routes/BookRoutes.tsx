import { Book, BookList, NewBook } from '../pages';
import { Route, Routes } from 'react-router-dom';

import { BooksLayout } from '../layouts';

export const BookRoutes = () => {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<BookList />} />
        <Route path=':id' element={<Book />} />
        <Route path='new' element={<NewBook />} />
      </Route>
    </Routes>
  );
};
