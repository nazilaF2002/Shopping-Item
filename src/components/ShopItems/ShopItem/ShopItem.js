import React from 'react';

import './ShopItem.css';

const ShopItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="shopping-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default ShopItem;
