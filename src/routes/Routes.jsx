
import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from '../Layouts/Root';



export const router = createBrowserRouter([
        {
          path: "/",
          errorElement:<h1>Errroo happnaing</h1>,
          element: <Root/>,
          children:[
            {
                path:'/',

            }
          ]
        },
      ]);



