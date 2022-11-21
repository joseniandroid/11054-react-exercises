import { Link, Outlet } from 'react-router-dom';

export const BooksLayout = () => {
  return (
    <>
      <h3>Books Layout</h3>

      <Link to='/books/1'>Book 1</Link>
      <Link to='/books/2'>Book 2</Link>
      <Link to='/books/3'>Book 3</Link>
      <Link to='/books/new'>New Book</Link>

      <Outlet />
    </>
  );
};
