// UserList.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = () => {
  const { users, deleteUser, updateUser } = useContext(UserContext);

  const handleDelete = id => {
    deleteUser(id);
  };

  const handleUpdate = user => {
    const newName = prompt('Enter the new name:');
    if (newName) {
      updateUser({ ...user, name: newName });
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleUpdate(user)}>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
