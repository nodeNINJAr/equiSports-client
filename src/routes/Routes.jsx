
import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home';
import AllSportsEquipment from '../pages/AllSportsEquipment';
import AddEquipment from '../pages/PrivetRoutes/AddEquipment';
import MyEquipmentList from '../pages/PrivetRoutes/MyEquipmentList';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from '../pages/PrivetRoutes/PrivateRoute'
import ViewDetails from '../pages/PrivetRoutes/ViewDetails';
import UpdateProduct from '../pages/PrivetRoutes/UpdateProduct';
import Page404 from '../pages/Page404';
import ErrorPage from '../pages/ErrorPage';
import DiscountSignUp from '../pages/DiscountSignUp';
import CategoriesProduct from '../pages/CategoriesProduct';
import Cart from '../pages/PrivetRoutes/Cart';
import ContactForm from '../pages/ContactForm';

// 
export const router = createBrowserRouter([
        {
          path: "/",
          errorElement:<ErrorPage/>,
          element: <Root/>,
          children:[
            {
               path:'/',
              element:<Home/>
            },
            {
              path:"/all-sports-equipment",
              element:<AllSportsEquipment/>
            },
            {
              path:"/view-details/:id",
              element:<ViewDetails/>,
              loader: ({params})=> fetch(`https://equi-sports-server-green.vercel.app/my-equipment-list/update-product/${params.id}`)
            },
            {
              path:"/view-details/cart/:id",
              element:<PrivateRoute><Cart/></PrivateRoute>
            },
            {
              path:"/add-equipment",
              element:<PrivateRoute><AddEquipment/></PrivateRoute>
            },
            {
              path:"/my-equipment-list",
              element:<PrivateRoute><MyEquipmentList/></PrivateRoute>,
              
            },
            {
              path:"/my-equipment-list/update-product/:id",
              element:<UpdateProduct/>,
              loader: ({params})=> fetch(`https://equi-sports-server-green.vercel.app/my-equipment-list/update-product/${params.id}`)
              
            },
            {
              path:"/login",
              element:<Login/>
            },
            {
              path:"/register",
              element:<Register/>
            },
            {
              path:"/discount-signUp",
              element:<DiscountSignUp/>
            },
            {
              path:"/categories-products/:category",
              element:<CategoriesProduct/>,
            },
            {
              path:"/contact",
              element:<ContactForm/>,
            }


          ]
        },
        {
          path:'*',
          element:<Page404/>
        }
      ]);



