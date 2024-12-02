import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

function CustomeForm({ addItem }) {
  const [item, setItem] = useState('');

  function hanldeFormSubmit(e) {
    e.preventDefault();
    addItem({
      name: item,
      checked: false,
      id: Date.now(),
    });
    setItem('');
  }
  return (
    <form className='todo' onSubmit={hanldeFormSubmit}>
      <div className='wrapper'>
        <input
          type='text'
          id='task'
          className='input'
          value={item}
          onInput={(e) => setItem(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder='Write here...'
        />
        <label htmlFor='task' className='label'>
          Add List
        </label>
      </div>
      <button type='submit' className='btn' aria-label='Add'>
        <PlusIcon />
      </button>
    </form>
  );
}

export default CustomeForm;
