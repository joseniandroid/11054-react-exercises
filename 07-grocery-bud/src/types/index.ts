export type BasketItem = {
  id: string;
  title: string;
};

export type Alert = {
  show: boolean;
  message?: string;
  type?: AlertType;
};

export type AlertType = 'success' | 'error';
