# User Management System

The User Management System is a web application built with React that provides CRUD (Create, Read, Update, Delete) functionality for managing user data. It allows you to add new users, view a list of existing users, update user information, and delete users as needed.

## Features

- Add new users: Enter the name of the user and click the "Add" button to add them to the system.
- View user list: See a list of all users currently stored in the system.
- Update user information: Update the name of an existing user by editing their name and saving the changes.
- Delete users: Remove users from the system permanently.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Hooks: Use `useReducer` and `useContext` hooks for state management and sharing data between components.
- HTML and CSS: Markup and styling for the user interface.

## Getting Started

To get started with the User Management System, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd user-management-system`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## Project Structure

- `/src`: Contains the main source code for the application.
  - `/components`: Contains reusable React components used in the application.
  - `/context`: Contains the UserContext file for managing user data with `useReducer` and `useContext`.
  - `App.js`: The main component that renders other components and sets up the UserContext.
  - `index.js`: The entry point of the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project repository.

## License

The User Management System is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

This project was created using the React library and inspired by the need for a simple user management system with CRUD operations. We would like to thank the open-source community for their contributions and support.

