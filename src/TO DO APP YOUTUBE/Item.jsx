import { useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

function Item({ item, Delete, toggleCheck }) {
  const [isChecked, setIsChecked] = useState(item.checked);

  function handleCheckboxChange(e) {
    setIsChecked(!isChecked);
    toggleCheck(item.id);
  }
  return (
    <li className='task'>
      <div className='task-group'>
        <input
          id={item.id}
          type='checkbox'
          name={item.name}
          checked={isChecked}
          className='checkbox'
          onChange={handleCheckboxChange}
        />

        <label htmlFor={item.id} className='label1'>
          {item.name}
          <p className='checkmark'>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className='task-group'>
        <button
          className='btn'
          aria-label={`Update ${item.name} Task`}
          //   onClick={() => enterEditMode(item)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn delete`}
          aria-label={`Delete ${item.name} Task`}
          onClick={() => Delete(item.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
}

export default Item;
