import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from '@firebase/auth';
import { async } from '@firebase/util';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase';
import { SET_USER } from '../utils/constants';

export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};
const initialState = {
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const provider = new GoogleAuthProvider();

  // проверка на то что юзер залогинен или нет
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: SET_USER,
        payload: user,
      });
    });
  }, []);

  // Log out
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const registerUser = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user, 'user');
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = {
    user: state.user,
    registerUser: registerUser,
    logOut: logOut,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
