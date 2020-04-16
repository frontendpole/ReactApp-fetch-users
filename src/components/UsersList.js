import React from 'react';
import './UsersList.css'

const UsersList = (props) => {
  console.log(props.users)
  const users = props.users.map(user => (
    <div key={user.id.value}>
      <img src={user.picture.large} alt={`a face of ${user.name.title} ${user.name.last}`} />
      <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
      <h2>{`${user.email}`}</h2>
    </div>
  ))
  return (
    <div className="users">{users}</div>
  );
}

export default UsersList;