import React, { createContext } from 'react';


export const AuthContext = createContext(null)
// 
const AuthProvider = ({children}) => {


// Register using email and password
const registerUsingEmailPass = ()=>{
    return
}
// update or set user name and pgoto url
const updateUserProfile = ()=>{
  return
}
// Login using email and pass
const loginUsingEmailPass = ()=>{
    return
}

// sign in with google
const signInWithGoogle =()=>{
    return
}




    // 
    return (
        <AuthContext.Provider>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;