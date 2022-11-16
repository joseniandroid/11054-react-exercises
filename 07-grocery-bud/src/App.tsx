import { FormEvent, useState } from 'react';

import { Basket } from './components';
import { BasketItem } from './types';

function App() {
  const [itemName, setItemName] = useState('');
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setBasket([
      ...basket,
      {
        title: itemName,
      },
    ]);
  };

  return (
    <section className='section-center'>
      <form action='' className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>

      {basket.length > 0 && (
        <div className='grocery-container'>
          <Basket items={basket} />
        </div>
      )}
    </section>
  );
}

export default App;
