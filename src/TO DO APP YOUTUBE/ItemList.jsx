import Item from './Item';

function ItemList({ ItemList, Delete, toggleCheck }) {
  return (
    <ul id='ItemItem'>
      {ItemList.sort((a, b) => b.id - a.id).map((item) => (
        <Item
          key={item.id}
          item={item}
          Delete={Delete}
          toggleCheck={toggleCheck}
        />
      ))}
    </ul>
  );
}

export default ItemList;
