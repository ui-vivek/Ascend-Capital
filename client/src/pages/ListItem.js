import React from 'react';

const ListItem = ({ listIndex, itemIndex, item, onDeleteItem, onDragStart }) => {
  const handleDrag = event => {
    onDragStart(event, listIndex, itemIndex);
  };

  const handleDelete = () => {
    onDeleteItem(listIndex, itemIndex);
  };

  return (
    <div className="list-item" draggable="true" onDragStart={handleDrag}>
      <span>{item}</span>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
