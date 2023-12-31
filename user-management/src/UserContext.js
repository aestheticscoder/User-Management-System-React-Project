// UserContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  users: []
};

const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = user => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  const deleteUser = id => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  const updateUser = user => {
    dispatch({ type: 'UPDATE_USER', payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        addUser,
        deleteUser,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
