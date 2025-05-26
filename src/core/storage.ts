import { jwtDecode } from 'jwt-decode';
import { config } from './config';
import { store } from "../redux/store";
interface MyToken {
  names: string;
  email: string;
  role: string;
}

const TOKEN_NAME = `${config.APP_NAME}-token`;
export interface DecodedToken {
  id: string,
  userName: string,
  email: string,
  roleId: string,
  role:{
    roleName: string
  }

}

export const storage = {
  getToken: () => localStorage.getItem(TOKEN_NAME),
  getUser: () => localStorage.getItem('LOGED_USER'),
  setToken: (token: string) => localStorage.setItem(TOKEN_NAME, token),
  setUser: (user:any) => localStorage.setItem('LOGED_USER', JSON.stringify(user)),
  removeUser: () => localStorage.removeItem('LOGED_USER'),
  removeToken: () => localStorage.removeItem(TOKEN_NAME),
};
const token = storage.getToken();
export const userPayload = token ? jwtDecode<MyToken>(token as string) : null;
