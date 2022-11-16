import { Alert, AlertType } from '../types';

import { useEffect } from 'react';

type ToastProps = {
  type?: AlertType;
  message?: string;
  removeAlert: (alert?: Alert) => void;
};

export const Toast = ({ type, message, removeAlert }: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{message}</p>;
};
