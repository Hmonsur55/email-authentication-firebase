import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
const auth = getAuth(app);

export const authContex = createContext(null);

// for sign in with google check 47 line in here
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
// login function check login also 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

// signout function check header also
    const logOut = () => {
        return signOut(auth)
    }

    // observe with auth state change , login information gula dhore rakhar jonne

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe()
        }
   },[])

    // end  login information

    // sign in with google 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
      user,
        createUser,
        signIn,
        logOut,
        loading,
      googleSignIn
    };
    
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;