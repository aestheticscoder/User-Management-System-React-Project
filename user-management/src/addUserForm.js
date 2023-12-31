// AddUserForm.js
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name
    };
    addUser(newUser);
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUserForm;
