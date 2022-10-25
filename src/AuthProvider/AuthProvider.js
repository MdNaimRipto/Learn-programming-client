import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createAccountWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return unsubscribe;
    }, [])
    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        createAccountWithEmailAndPassword,
        loginWithEmailAndPassword,
        updateUserProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;