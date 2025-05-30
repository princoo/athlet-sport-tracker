import { storage } from "../core/storage";
import { clearToken } from "../redux/slices/tokenSlice";
import { store } from '../redux/store';
import { jwtDecode } from 'jwt-decode';

// Utility to check if the user is logged in
export const isLoggedIn = () => {
  const token = store.getState().token.value;
  return token !== null && token !== undefined && token.trim() !== '';
};
// Utility to log the user out
export const logOut = () => {
  store.dispatch(clearToken());
  window.location.href = "/auth/signin"
};

// Utility to decode the token
export interface DecodedUser{
  id: string,
  user_name: string,
  email: string,
  roleId: string,
  role:{
    role_name: string
  }

}
export const decodeToken = () => {
  const token = store.getState().token.value;
  try {
    if (token) {
      // const loggedUser:DecodedUser = jwtDecode(token);
       const loggedUser = JSON.parse(storage.getUser() ||"{}")
      
      return loggedUser
    }
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
