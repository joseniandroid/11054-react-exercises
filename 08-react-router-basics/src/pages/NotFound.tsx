import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: {
          statusCode: 404,
          message: 'Page not found',
        },
      });
    }, 3000);
  }, []);

  return <h2>Not Found Page</h2>;
};
