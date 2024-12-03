
import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home';
import AllSportsEquipment from '../pages/AllSportsEquipment';
import AddEquipment from '../pages/PrivetRoutes/AddEquipment';
import MyEquipmentList from '../pages/PrivetRoutes/MyEquipmentList';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';



export const router = createBrowserRouter([
        {
          path: "/",
          errorElement:<h1>Errroo happnaing</h1>,
          element: <Root/>,
          children:[
            {
               path:'/',
              element:<Home/>,
              loader: ()=> fetch('data.json')

            },
            {
              path:"/all-sports-equipment",
              element:<AllSportsEquipment/>,
            },
            {
              path:"/add-equipment",
              element:<AddEquipment/>
            },
            {
              path:"/my-equipment-list",
              element:<MyEquipmentList/>
            },
            {
              path:"/login",
              element:<Login/>
            },
            {
              path:"/register",
              element:<Register/>
            }

          ]
        },
      ]);



