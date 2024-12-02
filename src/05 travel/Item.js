export function Item({ item, onDeleteItems, onCheckBox }) {
  return (
    <li>
      <input type='checkbox' onClick={() => onCheckBox(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} &nbsp; {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
