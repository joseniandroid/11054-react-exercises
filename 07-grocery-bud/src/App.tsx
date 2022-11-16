import { Alert, BasketItem } from './types';
import { Basket, Toast } from './components';
import { FormEvent, useEffect, useState } from 'react';

const getCachedBasket = () => {
  const basket = localStorage.getItem('basket');
  if (basket) {
    return JSON.parse(basket);
  }
  return [];
};

function App() {
  const [itemName, setItemName] = useState('');
  const [basket, setBasket] = useState<BasketItem[]>(getCachedBasket());
  const [alert, setAlert] = useState<Alert>({
    show: false,
    message: '',
    type: 'success',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newItemName = itemName;

    if (isEditing) {
      // Update the item inside the basket
      const updatedBasket = basket.map((item) => {
        if (item.id === editId) {
          return { ...item, title: newItemName };
        }
        return item;
      });
      setBasket(updatedBasket);

      setItemName('');
      setEditId('');
      setIsEditing(false);
      showAlert({
        show: true,
        message: `Item changed to '${newItemName}'`,
        type: 'success',
      });
      return;
    }

    setBasket([
      ...basket,
      {
        id: new Date().getTime().toString(),
        title: newItemName,
      },
    ]);
    setItemName('');
    showAlert({
      show: true,
      message: `'${newItemName}' added to the basket`,
      type: 'success',
    });
  };

  const clearBasket = () => {
    setBasket([]);
    showAlert({
      show: true,
      message: 'Basket is empty',
      type: 'error',
    });
  };

  const showAlert = (alert?: Alert) => {
    if (alert) {
      setAlert(alert);
    } else {
      setAlert({ show: false });
    }
  };

  const editItem = (id: string) => {
    const itemToEdit = basket.find((basketItem) => basketItem.id === id);

    if (!itemToEdit) {
      showAlert({
        show: true,
        message: `'${itemToEdit}' not found`,
        type: 'error',
      });
      return;
    }

    setItemName(itemToEdit.title);
    setIsEditing(true);
    setEditId(id);
  };

  const removeItem = (id: string) => {
    const itemToDelete = basket.find((item) => item.id === id);
    if (!itemToDelete) {
      return;
    }

    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    showAlert({
      show: true,
      message: `'${itemToDelete.title}' removed from the basket`,
      type: 'success',
    });
  };

  return (
    <section className='section-center'>
      <form action='' className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Toast {...alert} removeAlert={showAlert} />}

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
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {basket.length > 0 && (
        <div className='grocery-container'>
          <Basket items={basket} editItem={editItem} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearBasket}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
