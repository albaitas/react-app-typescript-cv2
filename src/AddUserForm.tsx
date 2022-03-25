import React, { useState } from 'react';
import { AddUser } from './types';

interface AddUserFormProps {
  addUser: AddUser;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const initialFormState = { id: 0, name: '', email: '', completed: false };
  const [user, setUser] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.name || !user.email || /^\s*$/.test(user.name) || /^\s*$/.test(user.email)) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        placeholder='Add a name'
        name='name'
        value={user.name}
        onChange={handleChange}
        className='todo-input'
      />
      <input
        type='email'
        placeholder='Add a email'
        name='email'
        value={user.email}
        onChange={handleChange}
        className='todo-input'
      />
      <button className='todo-button'>Add new User</button>
      <button className='todo-button edit' onClick={() => setUser(initialFormState)}>
        Cancel
      </button>
    </form>
  );
};

export default AddUserForm;
