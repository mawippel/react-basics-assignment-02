import React from 'react';

const Char = (props) => {
  return (
    <p style={styleChar} onClick={props.onClickHandler}> {props.charText} </p>
  );
}

const styleChar = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

export default Char;
