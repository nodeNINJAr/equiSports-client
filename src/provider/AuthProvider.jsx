import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';


export const AuthContext = createContext(null)
// 
const AuthProvider = ({children}) => {


// Register using email and password
const registerUsingEmailPass = (newUserInfo)=>{
    return createUserWithEmailAndPassword(auth , newUserInfo?.userEmail, newUserInfo?.userPassword);
}
// update or set user name and pgoto url
const updateUserProfile = (newUserInfo)=>{
  return updateProfile(auth.currentUser , {displayName:newUserInfo?.userName ,  photoURL:newUserInfo?.UserPhotoUrl});
}
// Login using email and pass
const loginUsingEmailPass = (userLoginInfo)=>{
    return signInWithEmailAndPassword(auth ,userLoginInfo?.userEmail , userLoginInfo?.userPassword);
}

// sign in with google
const provider = new GoogleAuthProvider();
const signInWithGoogle =()=>{
    return signInWithPopup(auth , provider);
}

const authInfo = {
   name:"ridoy",
   registerUsingEmailPass,
   updateUserProfile,
   loginUsingEmailPass,
   signInWithGoogle

}


    // 
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;