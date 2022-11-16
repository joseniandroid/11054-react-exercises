import { FaEdit, FaTrash } from 'react-icons/fa';

import { BasketItem } from '../types';

type BasketProps = {
  items: BasketItem[];
  editItem: (id: string) => void;
};

export const Basket = ({ items, editItem }: BasketProps) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => (
        <article key={item.id} className='grocery-item'>
          <p className='title'>{item.title}</p>
          <div className='btn-container'>
            <button
              type='button'
              className='edit-btn'
              onClick={() => editItem(item.id)}
            >
              <FaEdit />
            </button>
            <button type='button' className='delete-btn'>
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};
