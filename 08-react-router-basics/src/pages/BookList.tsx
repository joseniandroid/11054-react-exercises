import { Link } from 'react-router-dom';

export const BookList = () => {
  return (
    <>
      <h3>List of Books</h3>

      <Link to='/books/1'>Book 1</Link>
      <Link to='/books/2'>Book 2</Link>
      <Link to='/books/3'>Book 3</Link>
      <Link to='/books/new'>New Book</Link>
    </>
  );
};
