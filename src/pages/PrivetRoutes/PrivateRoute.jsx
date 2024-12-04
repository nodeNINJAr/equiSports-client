import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
 const {user , loader } = useContext(AuthContext);

//  
if(loader){
  return <h1>loadeing</h1>
}
  //   
 if(user){
    return children
 }

 return <Navigate to="/login" />
};

export default PrivateRoute;