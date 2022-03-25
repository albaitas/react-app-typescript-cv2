export interface IUser {
  id: number;
  name: string;
  email: string;
  completed: boolean;
}
export type AddUser = (newUser: IUser) => void;
export type RemoveUser = (id: number) => void;
export type ToggleUser = (id: number) => void;
export type EditUser = (editUser: IUser) => void;
export type UpdateUser = (updateUser: IUser) => void;
export type SetEditing = (edit: boolean) => void;
