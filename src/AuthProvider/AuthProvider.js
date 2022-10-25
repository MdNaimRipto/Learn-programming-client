import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const user = { name: "" };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = { user, googleLogin, githubLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;