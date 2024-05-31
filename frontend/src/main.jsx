import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginScreen from './pages/LoginScreen.jsx'
import RegisterScreen from './pages/RegisterScreen.jsx'
import Product_page from './pages/product_page.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/login',
      element:<LoginScreen/>
    },
    {
      path:'/register',
      element:<RegisterScreen/>
    },
    {
      path:'/products',
      element:<Product_page/>
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
