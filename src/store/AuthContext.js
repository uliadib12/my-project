import { onAuthStateChanged } from '@firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config-firebase'


const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                setcurrentUser(user)
                setIsLoading(false)
            }
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        isLoading
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}