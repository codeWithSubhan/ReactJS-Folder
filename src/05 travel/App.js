import { useState } from 'react';

import Logo from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

import './index.css';

export default function App() {
  const [items, setItems] = useState([]);

  function addItems(Item) {
    console.log(Item);
    setItems((items) => [...items, Item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function checkBox(id) {
    console.log(id);
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }

  function clearList() {
    const res = window.confirm('Do you realy want to remove all list?');
    res && setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItems}
        onCheckBox={checkBox}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
