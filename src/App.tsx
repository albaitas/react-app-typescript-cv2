import React, { useState } from 'react';
import './App.css';
import User from './User';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import { initialData } from './initialData';
import { AddUser, ToggleUser, RemoveUser, EditUser, UpdateUser } from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState(initialData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: 0, name: '', email: '', completed: true };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const add: AddUser = (newUser) => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  const remove: RemoveUser = (id) => {
    setUsers([...users].filter((user) => user.id !== id));
  };

  const edit: EditUser = (editUser) => {
    setEditing(true);
    setCurrentUser({
      id: editUser.id,
      name: editUser.name,
      email: editUser.email,
      completed: editUser.completed
    });
  };

  const toggle: ToggleUser = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          completed: !user.completed
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const update: UpdateUser = (updateUser) => {
    setEditing(false);
    setUsers([...users].map((user) => (user.id === updateUser.id ? updateUser : user)));
  };

  return (
    <div className='todo-app'>
      <h1>App with Hooks</h1>
      <div>
        <div>
          {editing ? (
            <div>
              <h3>Edit User</h3>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={update} />
            </div>
          ) : (
            <div>
              <h3>Add User</h3>
              <AddUserForm addUser={add} />
            </div>
          )}
        </div>
        <div>
          <h3>View Users</h3>
          <User users={users} toggleUser={toggle} removeUser={remove} editUser={edit} />
        </div>
      </div>
    </div>
  );
};

export default App;
