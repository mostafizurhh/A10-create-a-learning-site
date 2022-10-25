import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)

    const providerLogin = (provider) => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const loginWithEmail = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (info) => {
        return updateProfile(auth.currentUser, info)
    }
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setloading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, loading, setloading, providerLogin, createUser, emailVerification, loginWithEmail, updateUserInfo, logOut }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;