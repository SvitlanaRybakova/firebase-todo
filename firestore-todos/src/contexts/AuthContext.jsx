import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const AuthContext = createContext();

 const useAuthContext = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = (props) => {
 
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const signup = (email, password) => {
    // do any security validation here
    return  createUserWithEmailAndPassword(auth, email, password)
		
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email,password)
  };

  const logout = () => {
    return  signOut(auth)
  }

	const values = { signup, login, logout };
	return (
		<AuthContext.Provider value={values}>
			{props.children}
		</AuthContext.Provider>
	);
};

export { useAuthContext, AuthContextProvider as default };

