import React, { useState } from 'react';

import './App.css';
import ShopItemList from './components/ShopItems/ShopItemList/ShopItemList';
import ItemInput from './components/ShopItems/ItemInput/ItemInput';

const App = () => {
  const [itemLists, setItemLists] = useState([
    { text: 'Apple', id: 'f1' },
    { text: 'Drink', id: 'f2' }
  ]);

  const addItemHandler = enteredText => {
    setItemLists(prevItemLists => {
      const updatedItemLists = [...prevItemLists];
      updatedItemLists.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItemLists;
    });
  };

  const deleteItemHandler = itemId => {
    setItemLists(prevItemLists => {
      const updateItemLists = prevItemLists.filter(item => item.id !== itemId);
      return updateItemLists;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No items found. Maybe add one?</p>
  );

  if (itemLists.length > 0) {
    content = (
      <ShopItemList items={itemLists} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="item-form">
        <ItemInput onAddItem={addItemHandler} />
      </section>
      <section id="items">
        {content}

      </section>
    
     
     
     
    </div>
  );
};

export default App;
