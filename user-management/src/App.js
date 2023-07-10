
import React from 'react';
import './App.css';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import AddUserForm from './addUserForm';


const App = () => {
  return (
    <UserProvider>
      <UserList />
      <AddUserForm />
    </UserProvider>
  );
};

export default App;
