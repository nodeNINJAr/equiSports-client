import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import Swal from 'sweetalert2'

export const AuthContext = createContext(null)
// 
const AuthProvider = ({children}) => {
// state for set error and success message
const [error,setError] = useState({});
const[success,setSuccess] = useState({});


// collect user on state by observer
const [user , setUser] = useState(null); 
// 
const [loader , setLoader] = useState(true);
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
// observer
useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
      //   
      if(currentUser){
          setUser(currentUser);
          setLoader(false)

      }
      else{
        setUser("");
        setLoader(false)
      }

     })
    //  
      return ()=> unsubscribe()
},[])

// toast
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

// conatainer obj
const authInfo = {
   user,
   registerUsingEmailPass,
   updateUserProfile,
   loginUsingEmailPass,
   signInWithGoogle,
   loader,
   setLoader,
   Toast,
   error,
   setError,
   success,
   setSuccess

}


// 
return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;