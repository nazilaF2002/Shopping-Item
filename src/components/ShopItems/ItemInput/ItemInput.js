import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from './ItemInput.module.css';
// import './ItemInput.css';
// import styled from 'styled-components';
// const FormControl=styled.div`


//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props=>props.invalid ? 'red':'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>props.invalid ? 'red':'black'};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
//   background-color:${props=>props.invalid ? 'red':'transparent'}
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// // &.invalid input{
// //   background: red;
// //   border-color: brown;
// // }
// // &.invalid label{
// //   color: red;
// // }

// `
const ItemInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsvalid] = useState(true);
  const itemInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.length > 0) {
      setIsvalid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddItem(enteredValue);

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={` ${styled['form-control']}  ${!isValid && styled.invalid}`}>
        {/* <FormControl className={`${!isValid && 'invalid'}`}> */}
        {/* <FormControl invalid={!isValid}> */}
        <label>Shopping Item</label>
        <input type="text" onChange={itemInputChangeHandler} />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ItemInput;
