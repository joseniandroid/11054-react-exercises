import { useState } from 'react';

function App() {
  const [itemName, setItemName] = useState('eggs');

  return (
    <section className='section-center'>
      <form action='' className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <h2>{itemName}</h2>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
