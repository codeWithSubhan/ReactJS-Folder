// https://www.youtube.com/watch?v=7u2Rv4HfCYQ

import { useState } from 'react';

import CustomeForm from './CustomeForm';
import ItemList from './ItemList';
import './style.css';

function App() {
  const [item, setItem] = useState([]);

  function addItem(newItem) {
    setItem((item) => [...item, newItem]);
  }

  function Delete(id) {
    setItem(item.filter((item) => item.id !== id));
  }

  function toggleCheck(id) {
    setItem((item) =>
      item.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className='container'>
      <header>
        <h1>To Do App</h1>
      </header>
      <CustomeForm addItem={addItem} />
      {item.length > 0 && (
        <ItemList ItemList={item} Delete={Delete} toggleCheck={toggleCheck} />
      )}
    </div>
  );
}

export default App;
