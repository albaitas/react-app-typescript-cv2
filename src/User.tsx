import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { IUser, ToggleUser, RemoveUser, EditUser } from './types';

interface UserProps {
  users: IUser[];
  toggleUser: ToggleUser;
  removeUser: RemoveUser;
  editUser: EditUser;
}

const User: React.FC<UserProps> = ({ users, toggleUser, removeUser, editUser }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div className={user.completed ? 'todo-row complete' : 'todo-row'} key={user.id}>
            <div className='pointer' key={user.id} onClick={() => toggleUser(user.id)}>
              {user.name} - {user.email}
            </div>
            <div className='icons'>
              <TiEdit onClick={() => editUser(user)} className='edit-icon' />
              <RiCloseCircleLine onClick={() => removeUser(user.id)} className='delete-icon' />
            </div>
          </div>
        ))
      ) : (
        <h4>No Users!</h4>
      )}
    </div>
  );
};
export default User;
