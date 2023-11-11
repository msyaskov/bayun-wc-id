import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexRoute from "~/route/index";
import {LoginRoute} from "~/route/login";

const router = createBrowserRouter([{
    id: 'index',
    path: '/',
    element: <IndexRoute/>,
    children: [{
        id: 'login',
        path: '/login',
        element: <LoginRoute/>
    }]
}])

ReactDOM.createRoot(document.body).render(<RouterProvider router={router}/>)
