import React, { useState, useEffect } from 'react';
import { IUser, UpdateUser, SetEditing } from './types';

interface EditUserFormProps {
  updateUser: UpdateUser;
  setEditing: SetEditing;
  currentUser: IUser;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ updateUser, currentUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.name || !user.email || /^\s*$/.test(user.name) || /^\s*$/.test(user.email)) return;
    updateUser(user);
    setUser({ id: 0, name: '', email: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleChange}
        className='todo-input edit'
      />
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={handleChange}
        className='todo-input edit'
      />
      <button className='todo-button edit'>Update user</button>
      <button className='todo-button edit' onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
