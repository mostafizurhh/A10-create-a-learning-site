import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'ami' }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = { user, providerLogin }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;