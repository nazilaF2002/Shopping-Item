import React from 'react';

import ShopItem from '../ShopItem/ShopItem';
import './ShopItemList.css';

const ShopItemList = props => {
  return (
    <ul className="item-list">
      {props.items.map(item => (
        <ShopItem
          key={item.id}
          id={item.id}
          onDelete={props.onDeleteItem}
        >
          {item.text}
        </ShopItem>
      ))}
    </ul>
  );
};

export default ShopItemList;
