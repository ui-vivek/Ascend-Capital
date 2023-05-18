import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import './Home.css';
import ListItem from "./ListItem";

const Home = () => {
  const [lists, setLists] = useState([
    ["Item 1", "Item 2", "Item 3"],
    ["Item 4", "Item 5", "Item 6"],
    ["Item 7", "Item 8", "Item 9"],
    ["Item 10", "Item 11", "Item 12"],
  ]);

  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  if (!loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  const handleDragStart = (event, sourceIndex, itemIndex) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ sourceIndex, itemIndex })
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const sourceIndex = data.sourceIndex;
    const itemIndex = data.itemIndex;
    const item = lists[sourceIndex][itemIndex];

    if (sourceIndex !== targetIndex) {
      const updatedLists = [...lists];
      updatedLists[sourceIndex].splice(itemIndex, 1);
      updatedLists[targetIndex].push(item);
      setLists(updatedLists);
    }
  };

  const handleDeleteItem = (listIndex, itemIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].splice(itemIndex, 1);
    setLists(updatedLists);
  };

  const handleAddItem = (listIndex) => {
    const updatedLists = [...lists];
    const newItem = `Item ${Math.floor(Math.random() * 100)}`;
    updatedLists[listIndex].push(newItem);
    setLists(updatedLists);
  };

  return (
    <div className="app">
      {lists.map((list, listIndex) => (
        <div
          key={listIndex}
          className="list"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, listIndex)}
        >
          {list.map((item, itemIndex) => (
            <ListItem
              key={itemIndex}
              listIndex={listIndex}
              itemIndex={itemIndex}
              item={item}
              onDeleteItem={handleDeleteItem}
              onDragStart={handleDragStart}
            />
          ))}
          <div
            className="add-item-btn"
            onClick={() => handleAddItem(listIndex)}
          >
            + Add Item
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
