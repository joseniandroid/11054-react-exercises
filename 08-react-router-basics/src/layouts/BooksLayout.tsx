import { Link, Outlet, useSearchParams } from 'react-router-dom';

export const BooksLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: '3' });
  const inputNum = searchParams.get('n') ?? 0;

  return (
    <>
      <h3>Books Layout</h3>

      <Link to='/books/1'>Book 1</Link>
      <Link to='/books/2'>Book 2</Link>
      <Link to={`/books/${inputNum}`}>Book {inputNum}</Link>
      <Link to='/books/new'>New Book</Link>

      <Outlet
        context={{
          hello: 'world',
        }}
      />

      <input
        type='number'
        value={inputNum}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};
