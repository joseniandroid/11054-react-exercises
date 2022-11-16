import { BasketItem } from '../types';

type BasketProps = {
  items: BasketItem[];
};

export const Basket = ({ items }: BasketProps) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => (
        <article className='grocery-item'>
          <p className='title'>{item.title}</p>
        </article>
      ))}
    </div>
  );
};
