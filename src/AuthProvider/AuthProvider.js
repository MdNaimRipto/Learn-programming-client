import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const user = { name: "" };

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    }
    const authInfo = { user, googleLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;