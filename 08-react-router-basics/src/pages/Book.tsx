import { useOutletContext, useParams } from 'react-router-dom';

export const Book = () => {
  const { id } = useParams();
  const outletCtx: any = useOutletContext();

  return (
    <h2>
      Book '{id}' {outletCtx.hello}
    </h2>
  );
};
