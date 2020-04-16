import React from 'react';
import './ButtonFetchUser.css'

const ButtonFetchUsers = props => {
  return (
    <button onClick={props.click}>Add user</button>
  );
}

export default ButtonFetchUsers;