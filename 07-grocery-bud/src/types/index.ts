export type BasketItem = {
  title: string;
};

export type Alert = {
  show: boolean;
  message?: string;
  type?: AlertType;
};

export type AlertType = 'success' | 'error';
