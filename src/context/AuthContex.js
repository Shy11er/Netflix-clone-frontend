import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [ user, setUser ] =   useState({});

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    });

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
};