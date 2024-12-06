import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const PrivateRoute = ({children}) => {
 const {user , loader, loaderP } = useContext(AuthContext);

//  
if(loader || loaderP){
  return <Loader/>
}
  //   
 if(user){
    return children
 }

 return <Navigate to="/login" />
};

export default PrivateRoute;