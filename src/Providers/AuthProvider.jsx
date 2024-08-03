import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider=({children})=>{
    const auth = getAuth(app);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // create user using email and password fireabase
    const createUserUsingEmail=(email, password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign in using email and password
    const userSignIn = (email, password) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password);
    }

    // user create account using google account
    const createUserUsingGoogle=()=>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
    }

    // user profile update using name and photo
    const userProfileUpdate =(name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    //  user acive check
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unSubscribe();
    },[])

    // user sing out
    const userSignOut=()=>{
       return signOut(auth)
    }

    const userInfo ={
        userSignIn,
        userSignOut,
        userProfileUpdate,
        createUserUsingEmail,
        createUserUsingGoogle,
    }

    return(
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider